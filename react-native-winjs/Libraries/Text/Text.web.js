/**
 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
 * All rights reserved.
 *
 * Copyright (c) 2015, Facebook, Inc.  All rights reserved.
 *
 * @providesModule ReactText
 */
'use strict';

import React from 'react';
import { Mixin as TouchableMixin } from 'ReactTouchable';
import { Mixin as LayoutMixin } from 'ReactLayoutMixin';

/**
 * A React component for displaying text which supports nesting,
 * styling, and touch handling.  In the following example, the nested title and
 * body text will inherit the `fontFamily` from `styles.baseText`, but the title
 * provides its own additional styles.  The title and body will stack on top of
 * each other on account of the literal newlines:
 *
 * ```
 * renderText: function() {
 *   return (
 *     <Text style={styles.baseText}>
 *       <Text style={styles.titleText} onPress={this.onPressTitle}>
 *         {this.state.titleText + '\n\n'}
 *       </Text>
 *       <Text numberOfLines={5}>
 *         {this.state.bodyText}
 *       </Text>
 *     </Text>
 *   );
 * },
 * ...
 * var styles = StyleSheet.create({
 *   baseText: {
 *     fontFamily: 'Cochin',
 *   },
 *   titleText: {
 *     fontSize: 20,
 *     fontWeight: 'bold',
 *   },
 * };
 * ```
 */

var Text = React.createClass({

  mixins: [LayoutMixin, TouchableMixin],

  propTypes: {
    /**
     * Used to truncate the text with an elipsis after computing the text
     * layout, including line wrapping, such that the total number of lines
     * does not exceed this number.
     */
    numberOfLines: React.PropTypes.number,
    /**
     * Invoked on mount and layout changes with
     *
     *   `{nativeEvent: {layout: {x, y, width, height}}}`
     */
    onLayout: React.PropTypes.func,
    /**
     * This function is called on press.
     */
    onPress: React.PropTypes.func,
    /**
     * When true, no visual change is made when text is pressed down. By
     * default, a gray oval highlights the text on press down.
     * @platform ios
     */
    suppressHighlighting: React.PropTypes.bool,
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID: React.PropTypes.string,
    /**
     * Specifies should fonts scale to respect Text Size accessibility setting on iOS.
     */
    allowFontScaling: React.PropTypes.bool,
  },

  getInitialState: function(): Object {
    return {...this.touchableGetInitialState(), ...{
      isHighlighted: false,
    }};
  },

  getDefaultProps: function(): Object {
    return {
      allowFontScaling: true,
    };
  },

  // componentDidMount: function() {
  //   console.log('mount')
  // },
  //
  // componentDidUpdate: function() {
  //   console.log('update')
  // },

  onStartShouldSetResponder: function(): bool {
    var shouldSetFromProps = this.props.onStartShouldSetResponder &&
      this.props.onStartShouldSetResponder();
    return shouldSetFromProps || !!this.props.onPress;
  },

  /*
   * Returns true to allow responder termination
   */
  handleResponderTerminationRequest: function(): bool {
    // Allow touchable or props.onResponderTerminationRequest to deny
    // the request
    var allowTermination = this.touchableHandleResponderTerminationRequest();
    if (allowTermination && this.props.onResponderTerminationRequest) {
      allowTermination = this.props.onResponderTerminationRequest();
    }
    return allowTermination;
  },

  handleResponderGrant: function(e: SyntheticEvent, dispatchID: string) {
    this.touchableHandleResponderGrant(e, dispatchID);
    this.props.onResponderGrant &&
      this.props.onResponderGrant.apply(this, arguments);
  },

  handleResponderMove: function(e: SyntheticEvent) {
    this.touchableHandleResponderMove(e);
    this.props.onResponderMove &&
      this.props.onResponderMove.apply(this, arguments);
  },

  handleResponderRelease: function(e: SyntheticEvent) {
    this.touchableHandleResponderRelease(e);
    this.props.onResponderRelease &&
      this.props.onResponderRelease.apply(this, arguments);
  },

  handleResponderTerminate: function(e: SyntheticEvent) {
    this.touchableHandleResponderTerminate(e);
    this.props.onResponderTerminate &&
      this.props.onResponderTerminate.apply(this, arguments);
  },

  touchableHandleActivePressIn: function() {
    if (this.props.suppressHighlighting || !this.props.onPress) {
      return;
    }
    this.setState({
      isHighlighted: true,
    });
  },

  touchableHandleActivePressOut: function() {
    if (this.props.suppressHighlighting || !this.props.onPress) {
      return;
    }
    this.setState({
      isHighlighted: false,
    });
  },

  touchableHandlePress: function() {
    this.props.onPress && this.props.onPress();
  },

  touchableGetPressRectOffset: function(): RectOffset {
    return PRESS_RECT_OFFSET;
  },

  getChildContext: function(): Object {
    return {isInAParentText: true};
  },

  contextTypes: {
    isInAParentText: React.PropTypes.bool
  },

  childContextTypes: {
    isInAParentText: React.PropTypes.bool
  },

  render: function() {
    var props = {...this.props};
    // Text is accessible by default
    if (props.accessible !== false) {
      props.accessible = true;
    }
    props.isHighlighted = this.state.isHighlighted;
    props.onStartShouldSetResponder = this.onStartShouldSetResponder;
    props.onResponderTerminationRequest =
      this.handleResponderTerminationRequest;
    props.onResponderGrant = this.handleResponderGrant;
    props.onResponderMove = this.handleResponderMove;
    props.onResponderRelease = this.handleResponderRelease;
    props.onResponderTerminate = this.handleResponderTerminate;

    var {
      numberOfLines,
      style
    } = props;

    style = {...props.style};

    if (typeof style.lineHeight == 'number') {
      style.lineHeight += 'px';
    }

    // Default lineHeight is 1.2 x fontSize
    var lineHeight = style.lineHeight || (style.fontSize || 16) * 1.2; // FIXME:  not sure 16px is the default line height
    if (typeof lineHeight == 'number') {
      lineHeight += 'px';
    }
    style.lineHeight = lineHeight;

    if (style.textDecorationLine) {
      style.textDecoration = style.textDecorationLine;
    }

    if (!props.children) {
      // TODO set a linebreak
    }

    return (
      <span {...props}
        style={{
          ...{
            display: this.context.isInAParentText ? 'inline' : 'inline-block',
            margin: 0,
            padding: 0,
            wordWrap: 'break-word',
            fontFamily: 'Calibri, Helvetica Neue, STHeiTi, sans-serif'
          },
          ...style,
          ...(numberOfLines && {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            wordWrap: 'break-word',
            display: '-webkit-box',
            WebkitLineClamp: numberOfLines,
            WebkitBoxOrient: 'vertical',
            maxHeight: parseFloat(lineHeight) * numberOfLines,
          })
        }} />
    );
  },
});

type RectOffset = {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

var PRESS_RECT_OFFSET = {top: 20, left: 20, right: 20, bottom: 30};

module.exports = Text;
