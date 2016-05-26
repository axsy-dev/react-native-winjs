/**
 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
 * All rights reserved.
 *
 * @providesModule ReactImage
 */
'use strict';

import React from 'react';
import View from 'ReactView';
import { Mixin as LayoutMixin } from 'ReactLayoutMixin';
import ImageResizeMode from './ImageResizeMode';

const STATUS_ERRORED = 'ERRORED'
const STATUS_LOADED = 'LOADED'
const STATUS_LOADING = 'LOADING'
const STATUS_PENDING = 'PENDING'
const STATUS_IDLE = 'IDLE'

function resolveAssetSource(source) {
  return ((typeof source === 'object') ? source.uri : source) || null
}

var Image = React.createClass({
  statics: {
    resizeMode: ImageResizeMode,
  },

  mixins: [LayoutMixin],

  contextTypes: {
    isInAParentText: React.PropTypes.bool
  },

  getInitialState() {
    const uri = resolveAssetSource(this.props.source)
    // state
    return { status: uri ? STATUS_PENDING : STATUS_IDLE }
  },

  render() {

    var props = {...this.props};
    props.src = typeof props.source === 'string' ? props.source : props.source.uri;

    // TODO: lazyload image when not in viewport

    var resizeMode = this.props.resizeMode;

    // Background image element, resizeMode is strtch is equal default img style
    if ( (this.props.children || (resizeMode && resizeMode !== 'stretch')) && !this.context.isInAParentText) {
      var containerStyles = props.style ? props.style : {};
      containerStyles.backgroundImage = 'url("' + props.src + '")';
      containerStyles.backgroundSize = resizeMode || 'cover';
      containerStyles.backgroundRepeat = 'no-repeat';
      containerStyles.backgroundPosition = '50%';

      return (
        <View style={containerStyles} data-src={props.src}>
          {this.props.children}
        </View>
      );
    } else {

      return (
        <img {...props}/>
      );
    }
  },

  _createImageLoader() {
    const uri = resolveAssetSource(this.props.source)

    this._destroyImageLoader()
    this.image = new window.Image()
    this.image.onerror = e => {this._onError(e);}
    this.image.onload = e => {this._onLoad(e);}
    this.image.src = uri
    this._onLoadStart()
  },

  _destroyImageLoader() {
   if (this.image) {
     this.image.onerror = null
     this.image.onload = null
     this.image = null
   }
 },

 _onError(e) {
    const { onError } = this.props
    const event = { nativeEvent: e }

    this._destroyImageLoader()
    this.setState({ status: STATUS_ERRORED })
    this._onLoadEnd()
    if (onError) onError(event)
  },

  _onLoad(e)  {
    const { onLoad } = this.props
    const event = { nativeEvent: e }

    this._destroyImageLoader()
    this.setState({ status: STATUS_LOADED })
    if (onLoad) onLoad(event)
    this._onLoadEnd()
  },

  _onLoadEnd () {
     const { onLoadEnd } = this.props
     if (onLoadEnd) onLoadEnd()
   },

   _onLoadStart () {
     const { onLoadStart } = this.props
     this.setState({ status: STATUS_LOADING })
     if (onLoadStart) onLoadStart()
   },

   componentDidMount () {
     if (this.state.status === STATUS_PENDING) {
       this._createImageLoader()
     }
   },

   componentDidUpdate () {
    if (this.state.status === STATUS_PENDING && !this.image) {
      this._createImageLoader()
    }
   },

   componentWillReceiveProps(nextProps) {
    const nextUri = resolveAssetSource(nextProps.source)
    if (resolveAssetSource(this.props.source) !== nextUri) {
      this.setState({
        status: nextUri ? STATUS_PENDING : STATUS_IDLE
      })
    }
  },

  componentWillUnmount() {
    this._destroyImageLoader()
  }

});

module.exports = Image;
