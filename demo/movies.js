webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The examples provided by Facebook are for non-commercial testing and
	 * evaluation purposes only.
	 *
	 * Facebook reserves all rights not expressly granted.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
	 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
	 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * @providesModule MoviesApp
	 * 
	 */
	'use strict';
	
	var React = __webpack_require__(1);
	var AppRegistry = React.AppRegistry;
	var Navigator = React.Navigator;
	var StyleSheet = React.StyleSheet;
	var Platform = React.Platform;
	var View = React.View;
	
	var MovieScreen = __webpack_require__(339);
	var SearchScreen = __webpack_require__(343);
	
	var RouteMapper = function RouteMapper(route, navigationOperations, onComponentRef) {
	
	  if (route.name === 'search') {
	    return React.createElement(SearchScreen, { navigator: navigationOperations });
	  } else if (route.name === 'movie') {
	    return React.createElement(
	      View,
	      { style: { flex: 1 } },
	      React.createElement(MovieScreen, {
	        style: { flex: 1 },
	        navigator: navigationOperations,
	        movie: route.movie
	      })
	    );
	  }
	};
	
	var MoviesApp = React.createClass({
	  displayName: 'MoviesApp',
	
	  render: function render() {
	    var initialRoute = { name: 'search' };
	    return React.createElement(Navigator, {
	      style: styles.container,
	      initialRoute: initialRoute,
	      renderScene: RouteMapper
	    });
	  }
	});
	
	var styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    backgroundColor: 'white'
	  }
	});
	
	AppRegistry.registerComponent('MoviesApp', function () {
	  return MoviesApp;
	});
	
	if (Platform.OS == 'winjs') {
	  var app = document.createElement('div');
	  document.body.appendChild(app);
	
	  AppRegistry.runApplication('MoviesApp', {
	    rootTag: app
	  });
	}
	
	module.exports = MoviesApp;

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The examples provided by Facebook are for non-commercial testing and
	 * evaluation purposes only.
	 *
	 * Facebook reserves all rights not expressly granted.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
	 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
	 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * 
	 */
	'use strict';
	
	var React = __webpack_require__(1);
	var Image = React.Image;
	var PixelRatio = React.PixelRatio;
	var ScrollView = React.ScrollView;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var View = React.View;
	
	var getImageSource = __webpack_require__(340);
	var getStyleFromScore = __webpack_require__(341);
	var getTextFromScore = __webpack_require__(342);
	
	var MovieScreen = React.createClass({
	  displayName: 'MovieScreen',
	
	  render: function render() {
	    return React.createElement(
	      ScrollView,
	      { contentContainerStyle: styles.contentContainer },
	      React.createElement(
	        View,
	        { style: styles.mainSection },
	        React.createElement(Image, {
	          source: getImageSource(this.props.movie, 'det'),
	          style: styles.detailsImage
	        }),
	        React.createElement(
	          View,
	          { style: styles.rightPane },
	          React.createElement(
	            Text,
	            { style: styles.movieTitle },
	            this.props.movie.title
	          ),
	          React.createElement(
	            Text,
	            null,
	            this.props.movie.year
	          ),
	          React.createElement(
	            View,
	            { style: styles.mpaaWrapper },
	            React.createElement(
	              Text,
	              { style: styles.mpaaText },
	              this.props.movie.mpaa_rating
	            )
	          ),
	          React.createElement(Ratings, { ratings: this.props.movie.ratings })
	        )
	      ),
	      React.createElement(View, { style: styles.separator }),
	      React.createElement(
	        Text,
	        null,
	        this.props.movie.synopsis
	      ),
	      React.createElement(View, { style: styles.separator }),
	      React.createElement(Cast, { actors: this.props.movie.abridged_cast })
	    );
	  }
	});
	
	var Ratings = React.createClass({
	  displayName: 'Ratings',
	
	  render: function render() {
	    var criticsScore = this.props.ratings.critics_score;
	    var audienceScore = this.props.ratings.audience_score;
	
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        View,
	        { style: styles.rating },
	        React.createElement(
	          Text,
	          { style: styles.ratingTitle },
	          'Critics:'
	        ),
	        React.createElement(
	          Text,
	          { style: [styles.ratingValue, getStyleFromScore(criticsScore)] },
	          getTextFromScore(criticsScore)
	        )
	      ),
	      React.createElement(
	        View,
	        { style: styles.rating },
	        React.createElement(
	          Text,
	          { style: styles.ratingTitle },
	          'Audience:'
	        ),
	        React.createElement(
	          Text,
	          { style: [styles.ratingValue, getStyleFromScore(audienceScore)] },
	          getTextFromScore(audienceScore)
	        )
	      )
	    );
	  }
	});
	
	var Cast = React.createClass({
	  displayName: 'Cast',
	
	  render: function render() {
	    if (!this.props.actors) {
	      return null;
	    }
	
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        { style: styles.castTitle },
	        'Actors'
	      ),
	      this.props.actors.map(function (actor) {
	        return React.createElement(
	          Text,
	          { key: actor.name, style: styles.castActor },
	          '• ',
	          actor.name
	        );
	      })
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  contentContainer: {
	    padding: 10
	  },
	  rightPane: {
	    justifyContent: 'space-between',
	    flex: 1
	  },
	  movieTitle: {
	    flex: 1,
	    fontSize: 16,
	    fontWeight: '500'
	  },
	  rating: {
	    marginTop: 10
	  },
	  ratingTitle: {
	    fontSize: 14
	  },
	  ratingValue: {
	    fontSize: 28,
	    fontWeight: '500'
	  },
	  mpaaWrapper: {
	    alignSelf: 'flex-start',
	    borderColor: 'black',
	    borderWidth: 1,
	    paddingHorizontal: 3,
	    marginVertical: 5
	  },
	  mpaaText: {
	    fontFamily: 'Palatino',
	    fontSize: 13,
	    fontWeight: '500'
	  },
	  mainSection: {
	    flexDirection: 'row'
	  },
	  detailsImage: {
	    width: 134,
	    height: 200,
	    backgroundColor: '#eaeaea',
	    marginRight: 10
	  },
	  separator: {
	    backgroundColor: 'rgba(0, 0, 0, 0.1)',
	    height: 1 / PixelRatio.get(),
	    marginVertical: 10
	  },
	  castTitle: {
	    fontWeight: '500',
	    marginBottom: 3
	  },
	  castActor: {
	    marginLeft: 2
	  }
	});
	
	module.exports = MovieScreen;
	/* $FlowIssue #7363964 - There's a bug in Flow where you cannot
	 * omit a property or set it to undefined if it's inside a shape,
	 * even if it isn't required */

/***/ },

/***/ 340:
/***/ function(module, exports) {

	/**
	 * The examples provided by Facebook are for non-commercial testing and
	 * evaluation purposes only.
	 *
	 * Facebook reserves all rights not expressly granted.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
	 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
	 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * 
	 */
	'use strict';
	
	function getImageSource(movie, kind) {
	  var uri = movie && movie.posters ? movie.posters.thumbnail : null;
	  if (uri && kind) {
	    uri = uri.replace('tmb', kind);
	  }
	  return { uri: uri };
	}
	
	module.exports = getImageSource;

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The examples provided by Facebook are for non-commercial testing and
	 * evaluation purposes only.
	 *
	 * Facebook reserves all rights not expressly granted.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
	 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
	 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * 
	 */
	'use strict';
	
	var React = __webpack_require__(1);
	var StyleSheet = React.StyleSheet;
	
	var MAX_VALUE = 200;
	
	// import type { StyleObj } from 'StyleSheetTypes';
	
	function getStyleFromScore(score) {
	  if (score < 0) {
	    return styles.noScore;
	  }
	
	  var normalizedScore = Math.round(score / 100 * MAX_VALUE);
	  return {
	    color: 'rgb(' + (MAX_VALUE - normalizedScore) + ', ' + normalizedScore + ', ' + 0 + ')'
	  };
	}
	
	var styles = StyleSheet.create({
	  noScore: {
	    color: '#999999'
	  }
	});
	
	module.exports = getStyleFromScore;

/***/ },

/***/ 342:
/***/ function(module, exports) {

	/**
	 * The examples provided by Facebook are for non-commercial testing and
	 * evaluation purposes only.
	 *
	 * Facebook reserves all rights not expressly granted.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
	 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
	 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * 
	 */
	'use strict';
	
	function getTextFromScore(score) {
	  return score > 0 ? score + '%' : 'N/A';
	}
	
	module.exports = getTextFromScore;

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The examples provided by Facebook are for non-commercial testing and
	 * evaluation purposes only.
	 *
	 * Facebook reserves all rights not expressly granted.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
	 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
	 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * 
	 */
	'use strict';
	
	var React = __webpack_require__(1);
	var ActivityIndicatorIOS = React.ActivityIndicatorIOS;
	var ListView = React.ListView;
	var Platform = React.Platform;
	var ProgressBarAndroid = React.ProgressBarAndroid;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var View = React.View;
	
	var TimerMixin = __webpack_require__(284);
	
	var fetch = Platform.OS === 'winjs' ? __webpack_require__(344) : __webpack_require__(345);
	
	var invariant = __webpack_require__(231);
	var dismissKeyboard = __webpack_require__(325);
	
	var MovieCell = __webpack_require__(346);
	var MovieScreen = __webpack_require__(339);
	var SearchBar = __webpack_require__(347);
	
	/**
	 * This is for demo purposes only, and rate limited.
	 * In case you want to use the Rotten Tomatoes' API on a real app you should
	 * create an account at http://developer.rottentomatoes.com/
	 */
	var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/';
	var API_KEYS = ['7waqfqbprs7pajbz28mqf6vz'];
	
	// Results should be cached keyed by the query
	// with values of null meaning "being fetched"
	// and anything besides null and undefined
	// as the result of a valid query
	
	// 'y4vwv8m33hed9ety83jmv52f', Fallback api_key
	var resultsCache = {
	  dataForQuery: {},
	  nextPageNumberForQuery: {},
	  totalForQuery: {}
	};
	
	var LOADING = {};
	
	var SearchScreen = React.createClass({
	  displayName: 'SearchScreen',
	
	  mixins: [TimerMixin],
	
	  timeoutID: null,
	
	  getInitialState: function getInitialState() {
	    return {
	      isLoading: false,
	      isLoadingTail: false,
	      dataSource: new ListView.DataSource({
	        rowHasChanged: function rowHasChanged(row1, row2) {
	          return row1 !== row2;
	        }
	      }),
	      filter: '',
	      queryNumber: 0
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.searchMovies('');
	  },
	
	  _urlForQueryAndPage: function _urlForQueryAndPage(query, pageNumber) {
	    var apiKey = API_KEYS[this.state.queryNumber % API_KEYS.length];
	    if (query) {
	      return API_URL + 'movies.json?apikey=' + apiKey + '&q=' + encodeURIComponent(query) + '&page_limit=20&page=' + pageNumber;
	    } else {
	      // With no query, load latest movies
	      return API_URL + 'lists/movies/in_theaters.json?apikey=' + apiKey + '&page_limit=20&page=' + pageNumber;
	    }
	  },
	
	  searchMovies: function searchMovies(query) {
	    var _this = this;
	
	    this.timeoutID = null;
	
	    this.setState({ filter: query });
	
	    var cachedResultsForQuery = resultsCache.dataForQuery[query];
	    if (cachedResultsForQuery) {
	      if (!LOADING[query]) {
	        this.setState({
	          dataSource: this.getDataSource(cachedResultsForQuery),
	          isLoading: false
	        });
	      } else {
	        this.setState({ isLoading: true });
	      }
	      return;
	    }
	
	    LOADING[query] = true;
	    resultsCache.dataForQuery[query] = null;
	    this.setState({
	      isLoading: true,
	      queryNumber: this.state.queryNumber + 1,
	      isLoadingTail: false
	    });
	
	    fetch(this._urlForQueryAndPage(query, 1)).then(function (response) {
	      return response.json();
	    })['catch'](function (error) {
	      LOADING[query] = false;
	      resultsCache.dataForQuery[query] = undefined;
	
	      _this.setState({
	        dataSource: _this.getDataSource([]),
	        isLoading: false
	      });
	    }).then(function (responseData) {
	      LOADING[query] = false;
	      resultsCache.totalForQuery[query] = responseData.total;
	      resultsCache.dataForQuery[query] = responseData.movies;
	      resultsCache.nextPageNumberForQuery[query] = 2;
	
	      if (_this.state.filter !== query) {
	        // do not update state if the query is stale
	        return;
	      }
	
	      _this.setState({
	        isLoading: false,
	        dataSource: _this.getDataSource(responseData.movies)
	      });
	    }).done();
	  },
	
	  hasMore: function hasMore() {
	    var query = this.state.filter;
	    if (!resultsCache.dataForQuery[query]) {
	      return true;
	    }
	    return resultsCache.totalForQuery[query] !== resultsCache.dataForQuery[query].length;
	  },
	
	  onEndReached: function onEndReached() {
	    var _this2 = this;
	
	    var query = this.state.filter;
	    if (!this.hasMore() || this.state.isLoadingTail) {
	      // We're already fetching or have all the elements so noop
	      return;
	    }
	
	    if (LOADING[query]) {
	      return;
	    }
	
	    LOADING[query] = true;
	    this.setState({
	      queryNumber: this.state.queryNumber + 1,
	      isLoadingTail: true
	    });
	
	    var page = resultsCache.nextPageNumberForQuery[query];
	    invariant(page != null, 'Next page number for "%s" is missing', query);
	
	    fetch(this._urlForQueryAndPage(query, page)).then(function (response) {
	      return response.json();
	    })['catch'](function (error) {
	      console.error(error);
	      LOADING[query] = false;
	      _this2.setState({
	        isLoadingTail: false
	      });
	    }).then(function (responseData) {
	      var moviesForQuery = resultsCache.dataForQuery[query].slice();
	
	      LOADING[query] = false;
	      // We reached the end of the list before the expected number of results
	      if (!responseData.movies) {
	        resultsCache.totalForQuery[query] = moviesForQuery.length;
	      } else {
	        for (var i in responseData.movies) {
	          moviesForQuery.push(responseData.movies[i]);
	        }
	        resultsCache.dataForQuery[query] = moviesForQuery;
	        resultsCache.nextPageNumberForQuery[query] += 1;
	      }
	
	      if (_this2.state.filter !== query) {
	        // do not update state if the query is stale
	        return;
	      }
	
	      _this2.setState({
	        isLoadingTail: false,
	        dataSource: _this2.getDataSource(resultsCache.dataForQuery[query])
	      });
	    }).done();
	  },
	
	  getDataSource: function getDataSource(movies) {
	    return this.state.dataSource.cloneWithRows(movies);
	  },
	
	  selectMovie: function selectMovie(movie) {
	    if (Platform.OS === 'ios') {
	      this.props.navigator.push({
	        title: movie.title,
	        component: MovieScreen,
	        passProps: { movie: movie }
	      });
	    } else {
	      dismissKeyboard();
	      this.props.navigator.push({
	        title: movie.title,
	        name: 'movie',
	        movie: movie
	      });
	    }
	  },
	
	  onSearchChange: function onSearchChange(event) {
	    var _this3 = this;
	
	    var filter = event.nativeEvent.text.toLowerCase();
	
	    this.clearTimeout(this.timeoutID);
	    this.timeoutID = this.setTimeout(function () {
	      return _this3.searchMovies(filter);
	    }, 100);
	  },
	
	  renderFooter: function renderFooter() {
	    if (!this.hasMore() || !this.state.isLoadingTail) {
	      return React.createElement(View, { style: styles.scrollSpinner });
	    }
	    if (Platform.OS === 'ios') {
	      return React.createElement(ActivityIndicatorIOS, { style: styles.scrollSpinner });
	    } else if (Platform.OS === 'winjs') {
	      return React.createElement(
	        View,
	        { style: { alignItems: 'center' } },
	        React.createElement(ActivityIndicatorIOS, { style: styles.scrollSpinner })
	      );
	    } else {
	      return React.createElement(
	        View,
	        { style: { alignItems: 'center' } },
	        React.createElement(ProgressBarAndroid, { styleAttr: 'Large' })
	      );
	    }
	  },
	
	  renderSeparator: function renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
	    var style = styles.rowSeparator;
	    if (adjacentRowHighlighted) {
	      style = [style, styles.rowSeparatorHide];
	    }
	    return React.createElement(View, { key: 'SEP_' + sectionID + '_' + rowID, style: style });
	  },
	
	  renderRow: function renderRow(movie, sectionID, rowID, highlightRowFunc) {
	    var _this4 = this;
	
	    return React.createElement(MovieCell, {
	      key: movie.id,
	      onSelect: function () {
	        return _this4.selectMovie(movie);
	      },
	      onHighlight: function () {
	        return highlightRowFunc(sectionID, rowID);
	      },
	      onUnhighlight: function () {
	        return highlightRowFunc(null, null);
	      },
	      movie: movie
	    });
	  },
	
	  render: function render() {
	    var _this5 = this;
	
	    var content = this.state.dataSource.getRowCount() === 0 ? React.createElement(NoMovies, {
	      filter: this.state.filter,
	      isLoading: this.state.isLoading
	    }) : React.createElement(ListView, {
	      ref: 'listview',
	      renderSeparator: this.renderSeparator,
	      dataSource: this.state.dataSource,
	      renderFooter: this.renderFooter,
	      renderRow: this.renderRow,
	      onEndReached: this.onEndReached,
	      automaticallyAdjustContentInsets: false,
	      keyboardDismissMode: 'on-drag',
	      keyboardShouldPersistTaps: true,
	      showsVerticalScrollIndicator: false
	    });
	
	    return React.createElement(
	      View,
	      { style: styles.container },
	      React.createElement(SearchBar, {
	        onSearchChange: this.onSearchChange,
	        isLoading: this.state.isLoading,
	        onFocus: function () {
	          return _this5.refs.listview && _this5.refs.listview.getScrollResponder().scrollTo(0, 0);
	        }
	      }),
	      React.createElement(View, { style: styles.separator }),
	      content
	    );
	  }
	});
	
	var NoMovies = React.createClass({
	  displayName: 'NoMovies',
	
	  render: function render() {
	    var text = '';
	    if (this.props.filter) {
	      text = 'No results for "' + this.props.filter + '"';
	    } else if (!this.props.isLoading) {
	      // If we're looking at the latest movies, aren't currently loading, and
	      // still have no results, show a message
	      text = 'No movies found';
	    }
	
	    return React.createElement(
	      View,
	      { style: [styles.container, styles.centerText] },
	      React.createElement(
	        Text,
	        { style: styles.noMoviesText },
	        text
	      )
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    backgroundColor: 'white'
	  },
	  centerText: {
	    alignItems: 'center'
	  },
	  noMoviesText: {
	    marginTop: 80,
	    color: '#888888'
	  },
	  separator: {
	    height: 1,
	    backgroundColor: '#eeeeee'
	  },
	  scrollSpinner: {
	    marginVertical: 20
	  },
	  rowSeparator: {
	    backgroundColor: 'rgba(0, 0, 0, 0.1)',
	    height: 1,
	    marginLeft: 4
	  },
	  rowSeparatorHide: {
	    opacity: 0.0
	  }
	});
	
	module.exports = SearchScreen;

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
	 * All rights reserved.
	 *
	 * @providesModule ReactJsonp
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ReactPromise = __webpack_require__(330);
	
	var _ReactPromise2 = _interopRequireDefault(_ReactPromise);
	
	// From https://github.com/camsong/fetch-jsonp
	var defaultOptions = {
	  timeout: 5000,
	  jsonpCallback: 'callback'
	};
	
	function generateCallbackFunction() {
	  return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
	}
	
	// Known issue: Will throw 'Uncaught ReferenceError: callback_*** is not defined' error if request timeout
	function clearFunction(functionName) {
	  // IE8 throws an exception when you try to delete a property on window
	  // http://stackoverflow.com/a/1824228/751089
	  try {
	    delete window[functionName];
	  } catch (e) {
	    window[functionName] = undefined;
	  }
	}
	
	function removeScript(scriptId) {
	  var script = document.getElementById(scriptId);
	  document.getElementsByTagName("head")[0].removeChild(script);
	}
	
	var fetchJsonp = function fetchJsonp(url) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var timeout = options.timeout != null ? options.timeout : defaultOptions.timeout;
	  var jsonpCallback = options.jsonpCallback != null ? options.jsonpCallback : defaultOptions.jsonpCallback;
	
	  var timeoutId = undefined;
	
	  return new _ReactPromise2['default'](function (resolve, reject) {
	    var callbackFunction = generateCallbackFunction();
	
	    window[callbackFunction] = function (response) {
	      resolve({
	        ok: true,
	        // keep consistent with fetch API
	        json: function json() {
	          return _ReactPromise2['default'].resolve(response);
	        }
	      });
	
	      if (timeoutId) clearTimeout(timeoutId);
	
	      removeScript(jsonpCallback + '_' + callbackFunction);
	
	      clearFunction(callbackFunction);
	    };
	
	    // Check if the user set their own params, and if not add a ? to start a list of params
	    url += url.indexOf('?') === -1 ? '?' : '&';
	
	    var jsonpScript = document.createElement('script');
	    jsonpScript.setAttribute("src", url + jsonpCallback + '=' + callbackFunction);
	    jsonpScript.id = jsonpCallback + '_' + callbackFunction;
	    document.getElementsByTagName("head")[0].appendChild(jsonpScript);
	
	    timeoutId = setTimeout(function () {
	      reject(new Error('JSONP request to ' + url + ' timed out'));
	
	      clearFunction(callbackFunction);
	      removeScript(jsonpCallback + '_' + callbackFunction);
	    }, timeout);
	  });
	};
	
	exports['default'] = fetchJsonp;
	module.exports = exports['default'];

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
	 * All rights reserved.
	 *
	 * @providesModule ReactFetch
	 */
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ReactPromise = __webpack_require__(330);
	
	var _ReactPromise2 = _interopRequireDefault(_ReactPromise);
	
	// https://github.com/github/fetch
	if (!self.fetch) {
	  var support;
	  var methods;
	  var redirectStatuses;
	
	  (function () {
	    var normalizeName = function normalizeName(name) {
	      if (typeof name !== 'string') {
	        name = String(name);
	      }
	      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	        throw new TypeError('Invalid character in header field name');
	      }
	      return name.toLowerCase();
	    };
	
	    var normalizeValue = function normalizeValue(value) {
	      if (typeof value !== 'string') {
	        value = String(value);
	      }
	      return value;
	    };
	
	    var Headers = function Headers(headers) {
	      this.map = {};
	
	      if (headers instanceof Headers) {
	        headers.forEach(function (value, name) {
	          this.append(name, value);
	        }, this);
	      } else if (headers) {
	        Object.getOwnPropertyNames(headers).forEach(function (name) {
	          this.append(name, headers[name]);
	        }, this);
	      }
	    };
	
	    var consumed = function consumed(body) {
	      if (body.bodyUsed) {
	        return _ReactPromise2['default'].reject(new TypeError('Already read'));
	      }
	      body.bodyUsed = true;
	    };
	
	    var fileReaderReady = function fileReaderReady(reader) {
	      return new _ReactPromise2['default'](function (resolve, reject) {
	        reader.onload = function () {
	          resolve(reader.result);
	        };
	        reader.onerror = function () {
	          reject(reader.error);
	        };
	      });
	    };
	
	    var readBlobAsArrayBuffer = function readBlobAsArrayBuffer(blob) {
	      var reader = new FileReader();
	      reader.readAsArrayBuffer(blob);
	      return fileReaderReady(reader);
	    };
	
	    var readBlobAsText = function readBlobAsText(blob) {
	      var reader = new FileReader();
	      reader.readAsText(blob);
	      return fileReaderReady(reader);
	    };
	
	    var Body = function Body() {
	      this.bodyUsed = false;
	
	      this._initBody = function (body) {
	        this._bodyInit = body;
	        if (typeof body === 'string') {
	          this._bodyText = body;
	        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	          this._bodyBlob = body;
	        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	          this._bodyFormData = body;
	        } else if (!body) {
	          this._bodyText = '';
	        } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	          // Only support ArrayBuffers for POST method.
	          // Receiving ArrayBuffers happens via Blobs, instead.
	        } else {
	            throw new Error('unsupported BodyInit type');
	          }
	      };
	
	      if (support.blob) {
	        this.blob = function () {
	          var rejected = consumed(this);
	          if (rejected) {
	            return rejected;
	          }
	
	          if (this._bodyBlob) {
	            return _ReactPromise2['default'].resolve(this._bodyBlob);
	          } else if (this._bodyFormData) {
	            throw new Error('could not read FormData body as blob');
	          } else {
	            return _ReactPromise2['default'].resolve(new Blob([this._bodyText]));
	          }
	        };
	
	        this.arrayBuffer = function () {
	          return this.blob().then(readBlobAsArrayBuffer);
	        };
	
	        this.text = function () {
	          var rejected = consumed(this);
	          if (rejected) {
	            return rejected;
	          }
	
	          if (this._bodyBlob) {
	            return readBlobAsText(this._bodyBlob);
	          } else if (this._bodyFormData) {
	            throw new Error('could not read FormData body as text');
	          } else {
	            return _ReactPromise2['default'].resolve(this._bodyText);
	          }
	        };
	      } else {
	        this.text = function () {
	          var rejected = consumed(this);
	          return rejected ? rejected : _ReactPromise2['default'].resolve(this._bodyText);
	        };
	      }
	
	      if (support.formData) {
	        this.formData = function () {
	          return this.text().then(decode);
	        };
	      }
	
	      this.json = function () {
	        return this.text().then(JSON.parse);
	      };
	
	      return this;
	    }
	
	    // HTTP methods whose capitalization should be normalized
	    ;
	
	    var normalizeMethod = function normalizeMethod(method) {
	      var upcased = method.toUpperCase();
	      return methods.indexOf(upcased) > -1 ? upcased : method;
	    };
	
	    var Request = function Request(input, options) {
	      options = options || {};
	      var body = options.body;
	      if (Request.prototype.isPrototypeOf(input)) {
	        if (input.bodyUsed) {
	          throw new TypeError('Already read');
	        }
	        this.url = input.url;
	        this.credentials = input.credentials;
	        if (!options.headers) {
	          this.headers = new Headers(input.headers);
	        }
	        this.method = input.method;
	        this.mode = input.mode;
	        if (!body) {
	          body = input._bodyInit;
	          input.bodyUsed = true;
	        }
	      } else {
	        this.url = input;
	      }
	
	      this.credentials = options.credentials || this.credentials || 'omit';
	      if (options.headers || !this.headers) {
	        this.headers = new Headers(options.headers);
	      }
	      this.method = normalizeMethod(options.method || this.method || 'GET');
	      this.mode = options.mode || this.mode || null;
	      this.referrer = null;
	
	      if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	        throw new TypeError('Body not allowed for GET or HEAD requests');
	      }
	      this._initBody(body);
	    };
	
	    var decode = function decode(body) {
	      var form = new FormData();
	      body.trim().split('&').forEach(function (bytes) {
	        if (bytes) {
	          var split = bytes.split('=');
	          var name = split.shift().replace(/\+/g, ' ');
	          var value = split.join('=').replace(/\+/g, ' ');
	          form.append(decodeURIComponent(name), decodeURIComponent(value));
	        }
	      });
	      return form;
	    };
	
	    var headers = function headers(xhr) {
	      var head = new Headers();
	      var pairs = xhr.getAllResponseHeaders().trim().split('\n');
	      pairs.forEach(function (header) {
	        var split = header.trim().split(':');
	        var key = split.shift().trim();
	        var value = split.join(':').trim();
	        head.append(key, value);
	      });
	      return head;
	    };
	
	    var Response = function Response(bodyInit, options) {
	      if (!options) {
	        options = {};
	      }
	
	      this._initBody(bodyInit);
	      this.type = 'default';
	      this.status = options.status;
	      this.ok = this.status >= 200 && this.status < 300;
	      this.statusText = options.statusText;
	      this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
	      this.url = options.url || '';
	    };
	
	    Headers.prototype.append = function (name, value) {
	      name = normalizeName(name);
	      value = normalizeValue(value);
	      var list = this.map[name];
	      if (!list) {
	        list = [];
	        this.map[name] = list;
	      }
	      list.push(value);
	    };
	
	    Headers.prototype['delete'] = function (name) {
	      delete this.map[normalizeName(name)];
	    };
	
	    Headers.prototype.get = function (name) {
	      var values = this.map[normalizeName(name)];
	      return values ? values[0] : null;
	    };
	
	    Headers.prototype.getAll = function (name) {
	      return this.map[normalizeName(name)] || [];
	    };
	
	    Headers.prototype.has = function (name) {
	      return this.map.hasOwnProperty(normalizeName(name));
	    };
	
	    Headers.prototype.set = function (name, value) {
	      this.map[normalizeName(name)] = [normalizeValue(value)];
	    };
	
	    Headers.prototype.forEach = function (callback, thisArg) {
	      Object.getOwnPropertyNames(this.map).forEach(function (name) {
	        this.map[name].forEach(function (value) {
	          callback.call(thisArg, value, name, this);
	        }, this);
	      }, this);
	    };
	
	    support = {
	      blob: 'FileReader' in self && 'Blob' in self && (function () {
	        try {
	          new Blob();
	          return true;
	        } catch (e) {
	          return false;
	        }
	      })(),
	      formData: 'FormData' in self,
	      arrayBuffer: 'ArrayBuffer' in self
	    };
	    methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
	
	    Request.prototype.clone = function () {
	      return new Request(this);
	    };
	
	    Body.call(Request.prototype);
	
	    Body.call(Response.prototype);
	
	    Response.prototype.clone = function () {
	      return new Response(this._bodyInit, {
	        status: this.status,
	        statusText: this.statusText,
	        headers: new Headers(this.headers),
	        url: this.url
	      });
	    };
	
	    Response.error = function () {
	      var response = new Response(null, { status: 0, statusText: '' });
	      response.type = 'error';
	      return response;
	    };
	
	    redirectStatuses = [301, 302, 303, 307, 308];
	
	    Response.redirect = function (url, status) {
	      if (redirectStatuses.indexOf(status) === -1) {
	        throw new RangeError('Invalid status code');
	      }
	
	      return new Response(null, { status: status, headers: { location: url } });
	    };
	
	    self.Headers = Headers;
	    self.Request = Request;
	    self.Response = Response;
	
	    self.fetch = function (input, init) {
	      return new _ReactPromise2['default'](function (resolve, reject) {
	        var request;
	        if (Request.prototype.isPrototypeOf(input) && !init) {
	          request = input;
	        } else {
	          request = new Request(input, init);
	        }
	
	        var xhr = new XMLHttpRequest();
	
	        function responseURL() {
	          if ('responseURL' in xhr) {
	            return xhr.responseURL;
	          }
	
	          // Avoid security warnings on getResponseHeader when not allowed by CORS
	          if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	            return xhr.getResponseHeader('X-Request-URL');
	          }
	
	          return;
	        }
	
	        xhr.onload = function () {
	          var status = xhr.status === 1223 ? 204 : xhr.status;
	          if (status < 100 || status > 599) {
	            reject(new TypeError('Network request failed'));
	            return;
	          }
	          var options = {
	            status: status,
	            statusText: xhr.statusText,
	            headers: headers(xhr),
	            url: responseURL()
	          };
	          var body = 'response' in xhr ? xhr.response : xhr.responseText;
	          resolve(new Response(body, options));
	        };
	
	        xhr.onerror = function () {
	          reject(new TypeError('Network request failed'));
	        };
	
	        xhr.open(request.method, request.url, true);
	
	        if (request.credentials === 'include') {
	          xhr.withCredentials = true;
	        }
	
	        if ('responseType' in xhr && support.blob) {
	          xhr.responseType = 'blob';
	        }
	
	        request.headers.forEach(function (value, name) {
	          xhr.setRequestHeader(name, value);
	        });
	
	        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	      });
	    };
	
	    self.fetch.polyfill = true;
	  })();
	}
	
	module.exports = self.fetch;

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The examples provided by Facebook are for non-commercial testing and
	 * evaluation purposes only.
	 *
	 * Facebook reserves all rights not expressly granted.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
	 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
	 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * 
	 */
	'use strict';
	
	var React = __webpack_require__(1);
	var Image = React.Image;
	var PixelRatio = React.PixelRatio;
	var Platform = React.Platform;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var TouchableHighlight = React.TouchableHighlight;
	var TouchableNativeFeedback = React.TouchableNativeFeedback;
	var View = React.View;
	
	var getStyleFromScore = __webpack_require__(341);
	var getImageSource = __webpack_require__(340);
	var getTextFromScore = __webpack_require__(342);
	
	var MovieCell = React.createClass({
	  displayName: 'MovieCell',
	
	  render: function render() {
	    var criticsScore = this.props.movie.ratings.critics_score;
	    var TouchableElement = TouchableHighlight;
	    if (Platform.OS === 'android') {
	      TouchableElement = TouchableNativeFeedback;
	    }
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        TouchableElement,
	        {
	          onPress: this.props.onSelect,
	          onShowUnderlay: this.props.onHighlight,
	          onHideUnderlay: this.props.onUnhighlight },
	        React.createElement(
	          View,
	          { style: styles.row },
	          React.createElement(Image, {
	            source: getImageSource(this.props.movie, 'det'),
	            style: styles.cellImage
	          }),
	          React.createElement(
	            View,
	            { style: styles.textContainer },
	            React.createElement(
	              Text,
	              { style: styles.movieTitle, numberOfLines: 2 },
	              this.props.movie.title
	            ),
	            React.createElement(
	              Text,
	              { style: styles.movieYear, numberOfLines: 1 },
	              this.props.movie.year,
	              ' ',
	              '•',
	              ' ',
	              React.createElement(
	                Text,
	                { style: getStyleFromScore(criticsScore) },
	                'Critics ',
	                getTextFromScore(criticsScore)
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  textContainer: {
	    flex: 1
	  },
	  movieTitle: {
	    flex: 1,
	    fontSize: 16,
	    fontWeight: '500',
	    marginBottom: 2
	  },
	  movieYear: {
	    color: '#999999',
	    fontSize: 12
	  },
	  row: {
	    alignItems: 'center',
	    backgroundColor: 'white',
	    flexDirection: 'row',
	    padding: 5
	  },
	  cellImage: {
	    backgroundColor: '#dddddd',
	    height: 93,
	    marginRight: 10,
	    width: 60
	  },
	  cellBorder: {
	    backgroundColor: 'rgba(0, 0, 0, 0.1)',
	    // Trick to get the thinest line the device can display
	    height: 1 / PixelRatio.get(),
	    marginLeft: 4
	  }
	});
	
	module.exports = MovieCell;
	/* $FlowIssue #7363964 - There's a bug in Flow where you cannot
	 * omit a property or set it to undefined if it's inside a shape,
	 * even if it isn't required */

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The examples provided by Facebook are for non-commercial testing and
	 * evaluation purposes only.
	 *
	 * Facebook reserves all rights not expressly granted.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
	 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
	 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * @providesModule SearchBar
	 * 
	 */
	'use strict';
	
	var React = __webpack_require__(1);
	var ActivityIndicatorIOS = React.ActivityIndicatorIOS;
	var TextInput = React.TextInput;
	var StyleSheet = React.StyleSheet;
	var View = React.View;
	
	var SearchBar = React.createClass({
	  displayName: 'SearchBar',
	
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: styles.searchBar },
	      React.createElement(TextInput, {
	        autoCapitalize: 'none',
	        autoCorrect: false,
	        onChange: this.props.onSearchChange,
	        placeholder: 'Search a movie...',
	        onFocus: this.props.onFocus,
	        style: styles.searchBarInput
	      }),
	      React.createElement(ActivityIndicatorIOS, {
	        animating: this.props.isLoading,
	        style: styles.spinner
	      })
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  searchBar: {
	    marginTop: 0,
	    padding: 3,
	    paddingLeft: 8,
	    flexDirection: 'row',
	    alignItems: 'center'
	  },
	  searchBarInput: {
	    fontSize: 15,
	    flex: 1,
	    height: 30
	  },
	  spinner: {
	    width: 30
	  }
	});
	
	module.exports = SearchBar;

/***/ }

});
//# sourceMappingURL=movies.js.map