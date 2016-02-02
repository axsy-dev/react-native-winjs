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
  }

  updateDataSource(normalReactDataSource) {
    if (this.dataSource != normalReactDataSource) {
      this.dataSource = normalReactDataSource;
      this.state = {
        update: 1
      };
      this.winjsbinding.invalidateAll();
      console.log("set for update");
    }
  }

  // callbacks

  componentDidMount() {
    console.log("componentDidMount");
    var normalReactDataSource = this.props.dataSource;
    this.updateDataSource(normalReactDataSource);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    this.updateDataSource(nextProps.dataSource);
  }

  shouldComponentUpdate(nextProps, nextState) {
    var update = false;
    if (this.state.update) {
      update = true;
      this.state = {
        update: 0
      };
    }
    console.log("shouldComponentUpdate " + update);
    return update;
  }

  render() {
    console.log("render");
    return (
      <ReactWinJS.ListView
        style={this.props.style}
        className="win-container"
        itemDataSource={ this.winjsbinding }
        itemTemplate={this.itemRenderer(this.props.renderRow)}
        layout={ { type: WinJS.UI.ListLayout } }
      />
    );
  }

}
