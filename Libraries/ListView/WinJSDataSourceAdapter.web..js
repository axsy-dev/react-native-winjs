/**
 * Copyright (c) 2015-present, Axsy Software Ltd
 *
 * This implements a WinJS datasource that will wrap the standard react-native datasource
 * @providesModule WinJSDataSourceAdapter
 */

    // Definition of the data adapter
    var WinJSDataSourceAdapter = WinJS.Class.define(
        function (listView) {

            // Constructor
            this._minPageSize = 50;
            this._maxPageSize = 50;
            this._maxCount = 1000;
            this._listView = listView
        },

        // Data Adapter interface methods
        // These define the contract between the virtualized datasource and the data adapter.
        // These methods will be called by virtualized datasource to fetch items, count etc.
        {
            // This class only implements the itemsFromIndex and count methods

            // Called to get a count of the items
            // The value of the count can be updated later in the response to itemsFromIndex
            getCount: function () {
                console.log("length request ");

                var that = this;

                return new Promise(function(resolve, reject) {
                    if (that._listView.props.dataSource) {
                      console.log("sent " + that._listView.props.dataSource.getRowCount() + " rows");
                      resolve(that._listView.props.dataSource.getRowCount());
                    } else {
                      console.log("no datasource (yet!)");
                      resolve(0);
                    }
                });

            },

            // Called by the virtualized datasource to fetch items
            // It will request a specific item and optionally ask for a number of items on either side of the requested item.
            // The implementation should return the specific item and, in addition, can choose to return a range of items on either
            // side of the requested index. The number of extra items returned by the implementation can be more or less than the number requested.
            //
            // Must return back an object containing fields:
            //   items: The array of items of the form items=[{ key: key1, data : { field1: value, field2: value, ... }}, { key: key2, data : {...}}, ...];
            //   offset: The offset into the array for the requested item
            //   totalCount: (optional) update the value of the count
            itemsFromIndex: function (requestIndex, countBefore, countAfter) {
                console.log("data request " + requestIndex);
                var that = this;
                if (requestIndex >= that._maxCount) {
                    return WinJS.Promise.wrapError(new WinJS.ErrorFromName(WinJS.UI.FetchError.doesNotExist));
                }

                var fetchSize, fetchIndex;
                // See which side of the requestIndex is the overlap
                if (countBefore > countAfter) {
                    //Limit the overlap
                    countAfter = Math.min(countAfter, 10);
                    //Bound the request size based on the minimum and maximum sizes
                    var fetchBefore = Math.max(Math.min(countBefore, that._maxPageSize - (countAfter + 1)), that._minPageSize - (countAfter + 1));
                    fetchSize = fetchBefore + countAfter + 1;
                    fetchIndex = requestIndex - fetchBefore;
                } else {
                    countBefore = Math.min(countBefore, 10);
                    var fetchAfter = Math.max(Math.min(countAfter, that._maxPageSize - (countBefore + 1)), that._minPageSize - (countBefore + 1));
                    fetchSize = countBefore + fetchAfter + 1;
                    fetchIndex = requestIndex - countBefore;
                }

                if (that._listView.props.dataSource) {
                    var results = [], count;

                    for (var i = 0; i < fetchSize && (fetchIndex + i) < that._listView.props.dataSource.getRowCount() ; i++) {
                        var rowID = that._listView.props.dataSource.getRowIndexForFlatIndex(fetchIndex + i);
                        var sectionID = that._listView.props.dataSource.getSectionIndexForFlatIndex(fetchIndex + i);
                        var dataItem = that._listView.props.dataSource.getRowData(sectionID,rowID);
                        results.push({
                            key: (fetchIndex + i).toString(),
                            data: dataItem
                        });
                    }
                    console.log("returned " + results.length + " items");
                    return Promise.resolve(
                    {
                        items: results, // The array of items
                        offset: requestIndex - fetchIndex, // The offset into the array for the requested item
                        totalCount: that._listView.props.dataSource.getRowCount()
                    });

                } else {
                  return Promise.resolve( {
                      items: [],
                      offset: 0
                  });
                }

            },

            setNotificationHandler: function (notificationHandler) {
                this._notificationHandler = notificationHandler;
            },

            itemSignature: function (item) {
                return item.hash;
            }
            // itemsFromStart: not implemented
            // itemsFromEnd: not implemented
            // itemsFromKey: not implemented
            // itemsFromDescription: not implemented
        });


        WinJSDataSourceAdapter.datasource = WinJS.Class.derive(WinJS.UI.VirtualizedDataSource, function (listView) {
             this._baseDataSourceConstructor(new WinJSDataSourceAdapter(listView));
        })

//     WinJS.Namespace.define("WinJSDataSourceAdapter", {
//         datasource: WinJS.Class.derive(WinJS.UI.VirtualizedDataSource, function () {
//             this._baseDataSourceConstructor(new WinJSDataSourceAdapter());
//         })
//     });


module.exports = WinJSDataSourceAdapter;
