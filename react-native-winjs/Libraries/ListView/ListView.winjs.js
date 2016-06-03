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
    this.winjsbinding = new WinJS.Binding.List([]);
  }

  setDataSource(dataSource) {
    let newData = [];
    for (let i = 0; i < dataSource.getRowCount(); i++)
    {
      let rowID = dataSource.getRowIndexForFlatIndex(i);
      let sectionID = dataSource.getSectionIndexForFlatIndex(i);
      let dataItem = dataSource.getRowData(sectionID,rowID);
      newData.push(dataItem);
    }

    this.winjsbinding.push(...newData);
  }

  updateDataSource(dataSource) {
    console.log(`updating data source ${dataSource.getRowCount()} ${this.winjsbinding.length}`);
    let dataItems = [];
    for (let i = 0; i < dataSource.getRowCount(); i++)
    {
      let rowID = dataSource.getRowIndexForFlatIndex(i);
      let sectionID = dataSource.getSectionIndexForFlatIndex(i);

      if (dataSource.rowShouldUpdate(sectionID, rowID))
      {
        /// too many row should update - needs checking
        let dataItem = dataSource.getRowData(sectionID,rowID);
        if ( i < this.winjsbinding.length )
        {
          console.log(`row should update ${i}`);
          this.winjsbinding.setAt(i, dataItem);
        }
        else  {
          dataItems.push(dataItem);
        }
      }
    }
    this.winjsbinding.push(...dataItems);
    this.winjsbinding.splice(dataSource.getRowCount(), this.winjsbinding.length - dataSource.getRowCount());
  }

  // callbacks

  componentDidMount() {
    this.setDataSource(this.props.dataSource);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.dataSource !== nextProps.dataSource && nextProps.dataSource)
    {
      this.updateDataSource(nextProps.dataSource);
    }
  }

  componentWillUpdate() {
    this.refs.listView && this.refs.listView.winControl && this.refs.listView.winControl.selection.clear();
  }


  shouldComponentUpdate(nextProps, nextState) {
    return false;
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
        itemDataSource={ this.winjsbinding.dataSource }
        itemTemplate={this.itemRenderer(this.props.renderRow)}
        onItemInvoked={this.onItemInvoked.bind(this)}
        {...this.props}
      />
    );
  }

}
