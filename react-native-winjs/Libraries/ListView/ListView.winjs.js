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
    return ReactWinJS.reactRenderer(function( item) {
      return renderRow(item.data.dataItem, item.data.sectionID, item.data.rowID);
    });
    //
  }


  // Constructor
  constructor(props, context) {
    super(props, context);
    this.winjsbinding = new WinJS.Binding.List([]);
  }

  _getDataItem(dataSource, sectionIndex, rowIndex) {
    const dataItem = dataSource.getRowData(sectionIndex,rowIndex);
    const sectionID = dataSource.sectionIdentities[sectionIndex];
    const rowID = dataSource.rowIdentities[sectionIndex][rowIndex];
    return {dataItem, sectionID, rowID}
  }

  setDataSource(dataSource) {
    let newData = [];
    for (var i = 0; i < dataSource.getRowCount(); i++)
    {
      let rowIndex = dataSource.getRowIndexForFlatIndex(i);
      let sectionIndex = dataSource.getSectionIndexForFlatIndex(i);
      newData.push(this._getDataItem(dataSource, sectionIndex, rowIndex));
    }

    this.winjsbinding.push(...newData);
  }

  updateDataSource(oldDataSource, newDataSource) {
      const newRowCount = newDataSource.getRowCount();
      const oldRowCount = oldDataSource.getRowCount();
      try {
          let dataItems = [];
          for (var i = 0; i < newRowCount; i++) {
              const newRowIndex = newDataSource.getRowIndexForFlatIndex(i);
              const newSectionIndex = newDataSource.getSectionIndexForFlatIndex(i);

              const newDataItem = this._getDataItem(newDataSource, newSectionIndex,newRowIndex);
              if ( i < oldRowCount ) {
                  const oldRowIndex = oldDataSource.getRowIndexForFlatIndex(i);
                  const oldSectionIndex = oldDataSource.getSectionIndexForFlatIndex(i);
                  const oldDataItem = this._getDataItem(oldDataSource, oldSectionIndex ,oldRowIndex);

                  if (newDataSource._rowHasChanged(newDataItem, oldDataItem)) {
                      this.winjsbinding.setAt(i, newDataItem);                      
                  }
              }
              else {
                  dataItems.push(newDataItem);
              }
          }
          this.winjsbinding.push(...dataItems);
          this.winjsbinding.splice(newDataSource.getRowCount(), this.winjsbinding.length - newDataSource.getRowCount());
      } catch (e) {
          console.log(e);
      }

  }

  // callbacks

  componentDidMount() {
    this.setDataSource(this.props.dataSource);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.dataSource !== nextProps.dataSource && nextProps.dataSource)
    {
      this.updateDataSource(this.props.dataSource, nextProps.dataSource);
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
