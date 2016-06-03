/**
 * Copyright (c) 2015-present, Axsy Software Ltd
 *
 * @providesModule ReactListView
 */
'use strict';


import React, { PropTypes } from 'react';
import ListViewDataSource from 'ReactListViewDataSource';
import WinJSDataSourceAdapter from 'WinJSDataSourceAdapter';

import ReactWinJS from 'react-winjs';

export default class ListView extends React.Component {

  // pass down the ability to instantiate new listView.DataSource(...)
  static DataSource( params ) {
    return new ListViewDataSource(params);
  }

  // winJS mappings
  itemRenderer( renderRow ) {
    return ReactWinJS.reactRenderer(function( item ) {
      return renderRow(item.data);
    });
    //
  }


  // Constructor
  constructor(props, context) {
    super(props, context);
    this.winjsbinding = new WinJSDataSourceAdapter.datasource(this);
    this.state = {update: 1};
  }

  updateDataSource(normalReactDataSource) {
    if (this.dataSource !== normalReactDataSource) {

      this.dataSource = normalReactDataSource;
      //this.setState ( {
      //  update: 1
      //});

      setImmediate( () => {this.winjsbinding.invalidateAll();} );

    }
  }

  // callbacks

  componentDidMount() {
    var normalReactDataSource = this.props.dataSource;
    this.updateDataSource(normalReactDataSource);
  }

  componentWillReceiveProps(nextProps) {
    this.updateDataSource(nextProps.dataSource);
  }

  componentWillUpdate() {
    this.refs.listView && this.refs.listView.winControl && this.refs.listView.winControl.selection.clear();
  }


  shouldComponentUpdate(nextProps, nextState) {
    var update = false;
    if (this.state.update) {
      update = true;
      this.setState ( {
        update: 0
      });
    }
    return update;
  }

  onItemInvoked(event) {
    const id = event.detail.itemIndex;

    setImmediate(() => {
      this.props.onItemSelect && this.props.onItemSelect(id);
    });
  }

  render() {
    return (
      <ReactWinJS.ListView
        ref="listView"
        itemDataSource={ this.winjsbinding }
        itemTemplate={this.itemRenderer(this.props.renderRow)}
        onItemInvoked={this.onItemInvoked.bind(this)}
        {...this.props}
      />
    );
  }

}
