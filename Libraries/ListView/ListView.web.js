/**
 * Copyright (c) 2015-present, Axsy Software Ltd
 *
 * @providesModule ReactListView
 */
'use strict';

import React, { PropTypes } from 'react';
import ListViewDataSource from 'ReactListViewDataSource';
// import ReactDOM from 'react-dom';
// import ScrollView from 'ReactScrollView';
// import ScrollResponder from 'ReactScrollResponder';
// import StaticRenderer from 'ReactStaticRenderer';
// import TimerMixin from 'react-timer-mixin';
// import assign from 'object-assign';
// import getLayout from 'ReactGetLayout';

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
  }

  render() {
    // if (this.winjslistview.props.itemDataSource.count() !== this.props.dataSource.getRowCount()) {
    // something has changed
    var normalReactDataSource = this.props.dataSource;
    var items = [];
    for (var i = 0; i < normalReactDataSource.getSectionLengths()[0]; i++) {
      var item = normalReactDataSource.getRowData(0, i); // one section for now
      items.push(item);
    }
    // }
    return (
      <ReactWinJS.ListView
        style={this.props.style}
        className="win-container"
        itemDataSource={ new WinJS.Binding.List(items).dataSource }
        itemTemplate={this.itemRenderer(this.props.renderRow)}
        layout={ { type: WinJS.UI.ListLayout } }
      />
    );
  }

}
