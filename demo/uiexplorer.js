webpackJsonp([4],{

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
	 * @providesModule UIExplorerApp
	 * 
	 */
	'use strict';
	
	var React = __webpack_require__(1);
	var UIExplorerList = __webpack_require__(348);
	var AppRegistry = React.AppRegistry;
	var Navigator = React.Navigator;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var View = React.View;
	var TouchableOpacity = React.TouchableOpacity;
	
	var NavigationBarRouteMapper = {
	
	  LeftButton: function LeftButton(route, navigator, index, navState) {
	    if (index === 0) {
	      return null;
	    }
	
	    return React.createElement(
	      TouchableOpacity,
	      {
	        onPress: function () {
	          return navigator.pop();
	        },
	        style: styles.navBarLeftButton },
	      React.createElement(
	        Text,
	        { style: [styles.navBarText, styles.navBarButtonText] },
	        'back'
	      )
	    );
	  },
	
	  RightButton: function RightButton(route, navigator, index, navState) {
	    return React.createElement(View, null);
	  },
	
	  Title: function Title(route, navigator, index, navState) {
	    return React.createElement(
	      Text,
	      { style: [styles.navBarText, styles.navBarTitleText] },
	      route.title
	    );
	  }
	
	};
	
	var UIExplorerApp = React.createClass({
	  displayName: 'UIExplorerApp',
	
	  getInitialState: function getInitialState() {
	    return {
	      openExternalExample: null
	    };
	  },
	
	  renderScene: function renderScene(route, navigationOperations, onComponentRef) {
	    if (route.name === 'list') {
	
	      return React.createElement(UIExplorerList, {
	        navigator: navigationOperations
	      });
	    } else if (route.name == 'example') {
	      return React.createElement(route.example, {
	        navigator: navigationOperations
	      });
	    }
	  },
	
	  render: function render() {
	    var initialRoute = { name: 'list', title: 'UIExplorer' };
	    return React.createElement(Navigator, {
	      style: styles.container,
	      initialRoute: initialRoute,
	      renderScene: this.renderScene,
	      navigationBar: React.createElement(Navigator.NavigationBar, {
	        routeMapper: NavigationBarRouteMapper,
	        style: styles.navBar
	      })
	    });
	  }
	});
	
	var styles = StyleSheet.create({
	  container: {
	    paddingTop: 50,
	    flex: 1
	  },
	  itemWrapper: {
	    backgroundColor: '#eaeaea'
	  },
	  navBar: {
	    backgroundColor: '#efeff4',
	    height: 50,
	    borderBottomWidth: 1,
	    borderBottomColor: '#ddd'
	  },
	  navBarText: {
	    fontSize: 16
	  },
	  navBarTitleText: {
	    color: '#000',
	    fontWeight: 700
	  },
	  navBarLeftButton: {
	    color: '#007aff',
	    paddingLeft: 10
	  }
	});
	
	AppRegistry.registerComponent('UIExplorerApp', function () {
	  return UIExplorerApp;
	});
	
	var app = document.createElement('div');
	document.body.appendChild(app);
	
	AppRegistry.runApplication('UIExplorerApp', {
	  rootTag: app
	});
	
	module.exports = UIExplorerApp;

/***/ },

/***/ 348:
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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var StyleSheet = React.StyleSheet;
	var View = React.View;
	
	var UIExplorerListBase = __webpack_require__(349);
	
	var COMPONENTS = [__webpack_require__(354),
	// require('./DatePickerIOSExample'),
	__webpack_require__(355), __webpack_require__(356), __webpack_require__(357), __webpack_require__(358), __webpack_require__(359), __webpack_require__(360), __webpack_require__(366), __webpack_require__(367), __webpack_require__(368), __webpack_require__(369), __webpack_require__(370), __webpack_require__(371), __webpack_require__(372), __webpack_require__(373), __webpack_require__(374), __webpack_require__(375), __webpack_require__(376), __webpack_require__(377), __webpack_require__(378)];
	
	var APIS = [
	// require('./AccessibilityAndroidExample.android'),
	__webpack_require__(379), __webpack_require__(380), __webpack_require__(382), __webpack_require__(383), __webpack_require__(384), __webpack_require__(385), __webpack_require__(386), __webpack_require__(387), __webpack_require__(388), __webpack_require__(389)];
	
	// require('./XHRExample'),
	
	var UIExplorerList = (function (_React$Component) {
	  _inherits(UIExplorerList, _React$Component);
	
	  function UIExplorerList() {
	    _classCallCheck(this, UIExplorerList);
	
	    _get(Object.getPrototypeOf(UIExplorerList.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(UIExplorerList, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(UIExplorerListBase, {
	        components: COMPONENTS,
	        apis: APIS,
	        searchText: '',
	        renderAdditionalView: this.renderAdditionalView.bind(this),
	        onPressRow: this.onPressRow.bind(this)
	      });
	    }
	  }, {
	    key: 'renderAdditionalView',
	    value: function renderAdditionalView(renderRow, renderTextInput) {
	      if (this.props.isInDrawer) {
	        var homePage = renderRow({
	          title: 'UIExplorer',
	          description: 'List of examples'
	        }, -1);
	        return React.createElement(
	          View,
	          null,
	          homePage
	        );
	      }
	      return renderTextInput(styles.searchTextInput);
	    }
	  }, {
	    key: 'onPressRow',
	    value: function onPressRow(example) {
	      var Component = UIExplorerListBase.makeRenderable(example);
	
	      this.props.navigator.push({
	        name: 'example',
	        example: Component,
	        title: example.title
	      });
	    }
	  }]);
	
	  return UIExplorerList;
	})(React.Component);
	
	var styles = StyleSheet.create({
	  searchTextInput: {
	    padding: 2
	  }
	});
	
	module.exports = UIExplorerList;

/***/ },

/***/ 349:
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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ListView = React.ListView;
	var PixelRatio = React.PixelRatio;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var TextInput = React.TextInput;
	var TouchableHighlight = React.TouchableHighlight;
	var View = React.View;
	var Platform = React.Platform;
	
	var createExamplePage = __webpack_require__(350);
	
	var ds = new ListView.DataSource({
	  rowHasChanged: function rowHasChanged(r1, r2) {
	    return r1 !== r2;
	  },
	  sectionHeaderHasChanged: function sectionHeaderHasChanged(h1, h2) {
	    return h1 !== h2;
	  }
	});
	
	var UIExplorerListBase = (function (_React$Component) {
	  _inherits(UIExplorerListBase, _React$Component);
	
	  function UIExplorerListBase(props) {
	    _classCallCheck(this, UIExplorerListBase);
	
	    _get(Object.getPrototypeOf(UIExplorerListBase.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      dataSource: ds.cloneWithRowsAndSections({
	        components: [],
	        apis: []
	      }),
	      searchText: this.props.searchText
	    };
	  }
	
	  _createClass(UIExplorerListBase, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.search(this.state.searchText);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var topView = this.props.renderAdditionalView && this.props.renderAdditionalView(this.renderRow.bind(this), this.renderTextInput.bind(this));
	
	      return React.createElement(
	        View,
	        { style: styles.listContainer },
	        topView,
	        React.createElement(ListView, {
	          style: styles.list,
	          dataSource: this.state.dataSource,
	          renderRow: this.renderRow.bind(this),
	          renderSectionHeader: this._renderSectionHeader,
	          keyboardShouldPersistTaps: true,
	          automaticallyAdjustContentInsets: false,
	          keyboardDismissMode: 'on-drag'
	        })
	      );
	    }
	  }, {
	    key: 'renderTextInput',
	    value: function renderTextInput(searchTextInputStyle) {
	      return React.createElement(
	        View,
	        { style: styles.searchRow },
	        React.createElement(TextInput, {
	          autoCapitalize: 'none',
	          autoCorrect: false,
	          clearButtonMode: 'always',
	          onChangeText: this.search.bind(this),
	          placeholder: 'Search...',
	          style: [styles.searchTextInput, searchTextInputStyle],
	          testID: 'explorer_search',
	          value: this.state.searchText
	        })
	      );
	    }
	  }, {
	    key: '_renderSectionHeader',
	    value: function _renderSectionHeader(data, section) {
	      return React.createElement(
	        View,
	        { style: styles.sectionHeader },
	        React.createElement(
	          Text,
	          { style: styles.sectionHeaderTitle },
	          section.toUpperCase()
	        )
	      );
	    }
	  }, {
	    key: 'renderRow',
	    value: function renderRow(example, i) {
	      var _this = this;
	
	      return React.createElement(
	        View,
	        { key: i },
	        React.createElement(
	          TouchableHighlight,
	          { onPress: function () {
	              return _this.onPressRow(example);
	            } },
	          React.createElement(
	            View,
	            { style: styles.row },
	            React.createElement(
	              Text,
	              { style: styles.rowTitleText },
	              example.title
	            ),
	            React.createElement(
	              Text,
	              { style: styles.rowDetailText },
	              example.description
	            )
	          )
	        ),
	        React.createElement(View, { style: styles.separator })
	      );
	    }
	  }, {
	    key: 'search',
	    value: function search(text) {
	      this.props.search && this.props.search(text);
	
	      var regex = new RegExp(text, 'i');
	      var filter = function filter(component) {
	        return regex.test(component.title);
	      };
	
	      this.setState({
	        dataSource: ds.cloneWithRowsAndSections({
	          components: this.props.components.filter(filter),
	          apis: this.props.apis.filter(filter)
	        }),
	        searchText: text
	      });
	    }
	  }, {
	    key: 'onPressRow',
	    value: function onPressRow(example) {
	      this.props.onPressRow && this.props.onPressRow(example);
	    }
	  }], [{
	    key: 'makeRenderable',
	    value: function makeRenderable(example) {
	      return example.examples ? createExamplePage(null, example) : example;
	    }
	  }]);
	
	  return UIExplorerListBase;
	})(React.Component);
	
	var styles = StyleSheet.create({
	  listContainer: {
	    flex: 1
	  },
	  list: {
	    backgroundColor: '#eeeeee'
	  },
	  sectionHeader: {
	    padding: 5
	  },
	  group: {
	    backgroundColor: 'white'
	  },
	  sectionHeaderTitle: {
	    fontWeight: '500',
	    fontSize: 11
	  },
	  row: {
	    backgroundColor: 'white',
	    justifyContent: 'center',
	    paddingHorizontal: 15,
	    paddingVertical: 8
	  },
	  separator: {
	    height: 1 / PixelRatio.get(),
	    backgroundColor: '#bbbbbb',
	    marginLeft: 15
	  },
	  rowTitleText: {
	    fontSize: 17,
	    fontWeight: '500'
	  },
	  rowDetailText: {
	    fontSize: 15,
	    color: '#888888',
	    lineHeight: 20
	  },
	  searchRow: {
	    backgroundColor: '#eeeeee',
	    paddingTop: Platform.OS === 'winjs' ? 10 : 75,
	    paddingLeft: 10,
	    paddingRight: 10,
	    paddingBottom: 10
	  },
	  searchTextInput: {
	    backgroundColor: 'white',
	    borderColor: '#cccccc',
	    borderRadius: 3,
	    borderWidth: 1,
	    paddingLeft: 8
	  }
	});
	
	module.exports = UIExplorerListBase;

/***/ },

/***/ 350:
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
	 * @providesModule createExamplePage
	 * 
	 */
	'use strict';
	
	var React = __webpack_require__(1);
	var Platform = React.Platform;
	
	var UIExplorerBlock = __webpack_require__(351);
	var UIExplorerPage = __webpack_require__(352);
	
	var createExamplePage = function createExamplePage(title, exampleModule) {
	
	  var ExamplePage = React.createClass({
	    displayName: 'ExamplePage',
	
	    statics: {
	      title: exampleModule.title,
	      description: exampleModule.description
	    },
	
	    getBlock: function getBlock(example, i) {
	      if (example.platform) {
	        if (Platform.OS !== example.platform) {
	          return;
	        }
	        example.title += ' (' + example.platform + ' only)';
	      }
	
	      var result = example.render(null);
	      if (result) {
	        var renderedComponent = React.cloneElement(result, {
	          navigator: this.props.navigator
	        });
	      }
	
	      return React.createElement(
	        UIExplorerBlock,
	        {
	          key: i,
	          title: example.title,
	          description: example.description },
	        renderedComponent
	      );
	    },
	
	    render: function render() {
	      return React.createElement(
	        UIExplorerPage,
	        null,
	        exampleModule.examples.map(this.getBlock)
	      );
	    }
	  });
	
	  return ExamplePage;
	};
	
	module.exports = createExamplePage;

/***/ },

/***/ 351:
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
	 * @providesModule UIExplorerBlock
	 * 
	 */
	'use strict';
	
	var React = __webpack_require__(1);
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var View = React.View;
	
	var UIExplorerBlock = React.createClass({
	  displayName: 'UIExplorerBlock',
	
	  propTypes: {
	    title: React.PropTypes.string,
	    description: React.PropTypes.string
	  },
	
	  getInitialState: function getInitialState() {
	    return { description: null };
	  },
	
	  render: function render() {
	    var description;
	    if (this.props.description) {
	      description = React.createElement(
	        Text,
	        { style: styles.descriptionText },
	        this.props.description
	      );
	    }
	
	    return React.createElement(
	      View,
	      { style: styles.container },
	      React.createElement(
	        View,
	        { style: styles.titleContainer },
	        React.createElement(
	          Text,
	          { style: styles.titleText },
	          this.props.title
	        ),
	        description
	      ),
	      React.createElement(
	        View,
	        { style: styles.children },
	        this.props.children
	      )
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  container: {
	    borderRadius: 3,
	    borderWidth: 0.5,
	    borderColor: '#d6d7da',
	    backgroundColor: '#ffffff',
	    margin: 10,
	    marginVertical: 5,
	    overflow: 'hidden'
	  },
	  titleContainer: {
	    borderBottomWidth: 0.5,
	    borderTopLeftRadius: 3,
	    borderTopRightRadius: 2.5,
	    borderBottomColor: '#d6d7da',
	    backgroundColor: '#f6f7f8',
	    paddingHorizontal: 10,
	    paddingVertical: 5
	  },
	  titleText: {
	    fontSize: 14,
	    fontWeight: '500'
	  },
	  descriptionText: {
	    fontSize: 14
	  },
	  disclosure: {
	    position: 'absolute',
	    top: 0,
	    right: 0,
	    padding: 10
	  },
	  disclosureIcon: {
	    width: 12,
	    height: 8
	  },
	  children: {
	    margin: 10
	  }
	});
	
	module.exports = UIExplorerBlock;

/***/ },

/***/ 352:
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
	 * @providesModule UIExplorerPage
	 * 
	 */
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(1);
	var ScrollView = React.ScrollView;
	var StyleSheet = React.StyleSheet;
	var View = React.View;
	
	var UIExplorerTitle = __webpack_require__(353);
	
	var UIExplorerPage = React.createClass({
	  displayName: 'UIExplorerPage',
	
	  propTypes: {
	    keyboardShouldPersistTaps: React.PropTypes.bool,
	    noScroll: React.PropTypes.bool,
	    noSpacer: React.PropTypes.bool
	  },
	
	  render: function render() {
	    var ContentWrapper;
	    var wrapperProps = {};
	    if (this.props.noScroll) {
	      ContentWrapper = View;
	    } else {
	      ContentWrapper = ScrollView;
	      wrapperProps.automaticallyAdjustContentInsets = !this.props.title;
	      wrapperProps.keyboardShouldPersistTaps = true;
	      wrapperProps.keyboardDismissMode = 'interactive';
	    }
	    var title = this.props.title ? React.createElement(UIExplorerTitle, { title: this.props.title }) : null;
	    var spacer = this.props.noSpacer ? null : React.createElement(View, { style: styles.spacer });
	    return React.createElement(
	      View,
	      { style: styles.container },
	      title,
	      React.createElement(
	        ContentWrapper,
	        _extends({
	          style: styles.wrapper
	        }, wrapperProps),
	        this.props.children,
	        spacer
	      )
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  container: {
	    backgroundColor: '#e9eaed',
	    flex: 1
	  },
	  spacer: {
	    height: 270
	  },
	  wrapper: {
	    flex: 1,
	    paddingTop: 10
	  }
	});
	
	module.exports = UIExplorerPage;

/***/ },

/***/ 353:
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
	 * @providesModule UIExplorerTitle
	 * 
	 */
	'use strict';
	
	var React = __webpack_require__(1);
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var View = React.View;
	
	var UIExplorerTitle = React.createClass({
	  displayName: 'UIExplorerTitle',
	
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: styles.container },
	      React.createElement(
	        Text,
	        { style: styles.text },
	        this.props.title
	      )
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  container: {
	    borderRadius: 4,
	    borderWidth: 0.5,
	    borderColor: '#d6d7da',
	    margin: 10,
	    marginBottom: 0,
	    height: 45,
	    padding: 10,
	    backgroundColor: 'white'
	  },
	  text: {
	    fontSize: 19,
	    fontWeight: '500'
	  }
	});
	
	module.exports = UIExplorerTitle;

/***/ },

/***/ 354:
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
	var StyleSheet = React.StyleSheet;
	var View = React.View;
	
	var TimerMixin = __webpack_require__(284);
	
	var ToggleAnimatingActivityIndicator = React.createClass({
	  displayName: 'ToggleAnimatingActivityIndicator',
	
	  mixins: [TimerMixin],
	
	  getInitialState: function getInitialState() {
	    return {
	      animating: true
	    };
	  },
	
	  setToggleTimeout: function setToggleTimeout() {
	    var _this = this;
	
	    this.setTimeout(function () {
	      _this.setState({ animating: !_this.state.animating });
	      _this.setToggleTimeout();
	    }, 1200);
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.setToggleTimeout();
	  },
	
	  render: function render() {
	    return React.createElement(ActivityIndicatorIOS, {
	      animating: this.state.animating,
	      style: [styles.centering, { height: 80 }],
	      size: 'large'
	    });
	  }
	});
	
	exports.displayName = undefined;
	exports.framework = 'React';
	exports.title = '<ActivityIndicatorIOS>';
	exports.description = 'Animated loading indicators.';
	
	exports.examples = [{
	  title: 'Default (small, white)',
	  render: function render() {
	    return React.createElement(ActivityIndicatorIOS, {
	      style: [styles.centering, styles.gray, { height: 40 }],
	      color: 'white'
	    });
	  }
	}, {
	  title: 'Gray',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(ActivityIndicatorIOS, {
	        style: [styles.centering, { height: 40 }]
	      }),
	      React.createElement(ActivityIndicatorIOS, {
	        style: [styles.centering, { backgroundColor: '#eeeeee', height: 40 }]
	      })
	    );
	  }
	}, {
	  title: 'Custom colors',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: styles.horizontal },
	      React.createElement(ActivityIndicatorIOS, { color: '#0000ff' }),
	      React.createElement(ActivityIndicatorIOS, { color: '#aa00aa' }),
	      React.createElement(ActivityIndicatorIOS, { color: '#aa3300' }),
	      React.createElement(ActivityIndicatorIOS, { color: '#00aa00' })
	    );
	  }
	}, {
	  title: 'Large',
	  render: function render() {
	    return React.createElement(ActivityIndicatorIOS, {
	      style: [styles.centering, styles.gray, { height: 80 }],
	      color: 'white',
	      size: 'large'
	    });
	  }
	}, {
	  title: 'Large, custom colors',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: styles.horizontal },
	      React.createElement(ActivityIndicatorIOS, {
	        size: 'large',
	        color: '#0000ff'
	      }),
	      React.createElement(ActivityIndicatorIOS, {
	        size: 'large',
	        color: '#aa00aa'
	      }),
	      React.createElement(ActivityIndicatorIOS, {
	        size: 'large',
	        color: '#aa3300'
	      }),
	      React.createElement(ActivityIndicatorIOS, {
	        size: 'large',
	        color: '#00aa00'
	      })
	    );
	  }
	}, {
	  title: 'Start/stop',
	  render: function render() {
	    return React.createElement(ToggleAnimatingActivityIndicator, null);
	  }
	}];
	
	var styles = StyleSheet.create({
	  centering: {
	    alignItems: 'center',
	    justifyContent: 'center'
	  },
	  gray: {
	    backgroundColor: '#cccccc'
	  },
	  horizontal: {
	    flexDirection: 'row',
	    justifyContent: 'space-around'
	  }
	});

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var AppRegistry = React.AppRegistry;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var View = React.View;
	var DrawerLayoutAndroid = React.DrawerLayoutAndroid;
	
	var DrawerLayoutExample = React.createClass({
	  displayName: 'DrawerLayoutExample',
	
	  statics: {
	    title: '<DrawerLayout>',
	    description: 'DrawerLayout'
	  },
	
	  render: function render() {
	    var navigationView = React.createElement(
	      View,
	      { style: { flex: 1, backgroundColor: '#fff' } },
	      React.createElement(
	        Text,
	        { style: { margin: 10, fontSize: 15, textAlign: 'left' } },
	        'I\'m in the Drawer!'
	      )
	    );
	    return React.createElement(
	      DrawerLayoutAndroid,
	      {
	        drawerWidth: 300,
	        drawerPosition: DrawerLayoutAndroid.positions.Right,
	        onDrawerStateChanged: this._onDrawerStateChanged,
	        onDrawerSlide: this._onDrawerSlide,
	        onDrawerClose: this._onDrawerClose,
	        onDrawerOpen: this._onDrawerOpen,
	        renderNavigationView: function () {
	          return navigationView;
	        } },
	      React.createElement(
	        View,
	        { style: { flex: 1, alignItems: 'center' } },
	        React.createElement(
	          Text,
	          { style: { margin: 10, fontSize: 15, textAlign: 'right' } },
	          'drag Drawer from right side'
	        ),
	        React.createElement(
	          Text,
	          { style: { margin: 10, fontSize: 15, textAlign: 'right' } },
	          'Hello World!'
	        )
	      )
	    );
	  },
	  _onDrawerStateChanged: function _onDrawerStateChanged() {
	    console.log('change', arguments);
	  },
	  _onDrawerSlide: function _onDrawerSlide() {
	    console.log('slide', arguments);
	  },
	  _onDrawerClose: function _onDrawerClose() {
	    console.log('close', arguments);
	  },
	  _onDrawerOpen: function _onDrawerOpen() {
	    console.log('open', arguments);
	  }
	});
	
	module.exports = DrawerLayoutExample;

/***/ },

/***/ 356:
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
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var View = React.View;
	var ActivityIndicatorIOS = React.ActivityIndicatorIOS;
	
	var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
	
	// var ImageCapInsetsExample = require('./ImageCapInsetsExample');
	
	var NetworkImageExample = React.createClass({
	  displayName: 'NetworkImageExample',
	
	  watchID: null,
	
	  getInitialState: function getInitialState() {
	    return {
	      error: false,
	      loading: false,
	      progress: 0
	    };
	  },
	  render: function render() {
	    var _this = this;
	
	    var loader = this.state.loading ? React.createElement(
	      View,
	      { style: styles.progress },
	      React.createElement(
	        Text,
	        null,
	        this.state.progress,
	        '%'
	      ),
	      React.createElement(ActivityIndicatorIOS, { style: { marginLeft: 5 } })
	    ) : null;
	    return this.state.error ? React.createElement(
	      Text,
	      null,
	      this.state.error
	    ) : React.createElement(
	      Image,
	      {
	        source: this.props.source,
	        style: [styles.base, { overflow: 'visible' }],
	        onLoadStart: function (e) {
	          return _this.setState({ loading: true });
	        },
	        onError: function (e) {
	          return _this.setState({ error: e.nativeEvent.error, loading: false });
	        },
	        onProgress: function (e) {
	          return _this.setState({ progress: Math.round(100 * e.nativeEvent.loaded / e.nativeEvent.total) });
	        },
	        onLoad: function () {
	          return _this.setState({ loading: false, error: false });
	        } },
	      loader
	    );
	  }
	});
	
	exports.displayName = undefined;
	exports.framework = 'React';
	exports.title = '<Image>';
	exports.description = 'Base component for displaying different types of images.';
	
	exports.examples = [{
	  title: 'Plain Network Image',
	  description: 'If the `source` prop `uri` property is prefixed with ' + '"http", then it will be downloaded from the network.',
	  render: function render() {
	    return React.createElement(Image, {
	      source: { uri: 'http://facebook.github.io/react/img/logo_og.png' },
	      style: styles.base
	    });
	  }
	},
	// {
	//   title: 'Plain Static Image',
	//   description: 'Static assets should be required by prefixing with `image!` ' +
	//     'and are located in the app bundle.',
	//   render: function() {
	//     return (
	//       <View style={styles.horizontal}>
	//         <Image source={require('image!uie_thumb_normal')} style={styles.icon} />
	//         <Image source={require('image!uie_thumb_selected')} style={styles.icon} />
	//         <Image source={require('image!uie_comment_normal')} style={styles.icon} />
	//         <Image source={require('image!uie_comment_highlighted')} style={styles.icon} />
	//       </View>
	//     );
	//   },
	// },
	{
	  title: 'Error Handler',
	  render: function render() {
	    return React.createElement(NetworkImageExample, { source: { uri: 'http://TYPO_ERROR_facebook.github.io/react/img/logo_og.png' } });
	  },
	  platform: 'ios'
	}, {
	  title: 'Image Download Progress',
	  render: function render() {
	    return React.createElement(NetworkImageExample, { source: { uri: 'http://facebook.github.io/origami/public/images/blog-hero.jpg?r=1' } });
	  },
	  platform: 'ios'
	}, {
	  title: 'Border Color',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: styles.horizontal },
	      React.createElement(Image, {
	        source: smallImage,
	        style: [styles.base, styles.background, { borderWidth: 3, borderColor: '#f099f0' }]
	      })
	    );
	  }
	}, {
	  title: 'Border Width',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: styles.horizontal },
	      React.createElement(Image, {
	        source: smallImage,
	        style: [styles.base, styles.background, { borderWidth: 5, borderColor: '#f099f0' }]
	      })
	    );
	  }
	}, {
	  title: 'Border Radius',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: styles.horizontal },
	      React.createElement(Image, {
	        style: [styles.base, { borderRadius: 5 }],
	        source: fullImage
	      }),
	      React.createElement(Image, {
	        style: [styles.base, styles.leftMargin, { borderRadius: 19 }],
	        source: fullImage
	      })
	    );
	  }
	}, {
	  title: 'Background Color',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: styles.horizontal },
	      React.createElement(Image, { source: smallImage, style: styles.base }),
	      React.createElement(Image, {
	        style: [styles.base, styles.leftMargin, { backgroundColor: 'rgba(0, 0, 100, 0.25)' }],
	        source: smallImage
	      }),
	      React.createElement(Image, {
	        style: [styles.base, styles.leftMargin, { backgroundColor: 'red' }],
	        source: smallImage
	      }),
	      React.createElement(Image, {
	        style: [styles.base, styles.leftMargin, { backgroundColor: 'black' }],
	        source: smallImage
	      })
	    );
	  }
	}, {
	  title: 'Opacity',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: styles.horizontal },
	      React.createElement(Image, {
	        style: [styles.base, { opacity: 1 }],
	        source: fullImage
	      }),
	      React.createElement(Image, {
	        style: [styles.base, styles.leftMargin, { opacity: 0.8 }],
	        source: fullImage
	      }),
	      React.createElement(Image, {
	        style: [styles.base, styles.leftMargin, { opacity: 0.6 }],
	        source: fullImage
	      }),
	      React.createElement(Image, {
	        style: [styles.base, styles.leftMargin, { opacity: 0.4 }],
	        source: fullImage
	      }),
	      React.createElement(Image, {
	        style: [styles.base, styles.leftMargin, { opacity: 0.2 }],
	        source: fullImage
	      }),
	      React.createElement(Image, {
	        style: [styles.base, styles.leftMargin, { opacity: 0 }],
	        source: fullImage
	      })
	    );
	  }
	}, {
	  title: 'Nesting',
	  render: function render() {
	    return React.createElement(
	      Image,
	      {
	        style: { width: 60, height: 60, backgroundColor: 'transparent' },
	        source: fullImage },
	      React.createElement(
	        Text,
	        { style: styles.nestedText },
	        'React'
	      )
	    );
	  }
	},
	// {
	//   title: 'Tint Color',
	//   description: 'The `tintColor` style prop changes all the non-alpha ' +
	//     'pixels to the tint color.',
	//   render: function() {
	//     return (
	//       <View>
	//         <View style={styles.horizontal}>
	//           <Image
	//             source={require('image!uie_thumb_normal')}
	//             style={[styles.icon, {borderRadius: 5, tintColor: '#5ac8fa' }]}
	//           />
	//           <Image
	//             source={require('image!uie_thumb_normal')}
	//             style={[styles.icon, styles.leftMargin, {borderRadius: 5, tintColor: '#4cd964' }]}
	//           />
	//           <Image
	//             source={require('image!uie_thumb_normal')}
	//             style={[styles.icon, styles.leftMargin, {borderRadius: 5, tintColor: '#ff2d55' }]}
	//           />
	//           <Image
	//             source={require('image!uie_thumb_normal')}
	//             style={[styles.icon, styles.leftMargin, {borderRadius: 5, tintColor: '#8e8e93' }]}
	//           />
	//         </View>
	//         <Text style={styles.sectionText}>
	//           It also works with downloaded images:
	//         </Text>
	//         <View style={styles.horizontal}>
	//           <Image
	//             source={smallImage}
	//             style={[styles.base, {borderRadius: 5, tintColor: '#5ac8fa' }]}
	//           />
	//           <Image
	//             source={smallImage}
	//             style={[styles.base, styles.leftMargin, {borderRadius: 5, tintColor: '#4cd964' }]}
	//           />
	//           <Image
	//             source={smallImage}
	//             style={[styles.base, styles.leftMargin, {borderRadius: 5, tintColor: '#ff2d55' }]}
	//           />
	//           <Image
	//             source={smallImage}
	//             style={[styles.base, styles.leftMargin, {borderRadius: 5, tintColor: '#8e8e93' }]}
	//           />
	//         </View>
	//       </View>
	//     );
	//   },
	// },
	{
	  title: 'Resize Mode',
	  description: 'The `resizeMode` style prop controls how the image is ' + 'rendered within the frame.',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: styles.horizontal },
	      React.createElement(
	        View,
	        null,
	        React.createElement(
	          Text,
	          { style: [styles.resizeModeText] },
	          'Contain'
	        ),
	        React.createElement(Image, {
	          style: styles.resizeMode,
	          resizeMode: Image.resizeMode.contain,
	          source: fullImage
	        })
	      ),
	      React.createElement(
	        View,
	        { style: styles.leftMargin },
	        React.createElement(
	          Text,
	          { style: [styles.resizeModeText] },
	          'Cover'
	        ),
	        React.createElement(Image, {
	          style: styles.resizeMode,
	          resizeMode: Image.resizeMode.cover,
	          source: fullImage
	        })
	      ),
	      React.createElement(
	        View,
	        { style: styles.leftMargin },
	        React.createElement(
	          Text,
	          { style: [styles.resizeModeText] },
	          'Stretch'
	        ),
	        React.createElement(Image, {
	          style: styles.resizeMode,
	          resizeMode: Image.resizeMode.stretch,
	          source: fullImage
	        })
	      )
	    );
	  }
	}, {
	  title: 'Animated GIF',
	  render: function render() {
	    return React.createElement(Image, {
	      style: styles.gif,
	      source: { uri: 'http://38.media.tumblr.com/9e9bd08c6e2d10561dd1fb4197df4c4e/tumblr_mfqekpMktw1rn90umo1_500.gif' }
	    });
	  },
	  platform: 'ios'
	}, {
	  title: 'Base64 image',
	  render: function render() {
	    return React.createElement(Image, {
	      style: styles.base64,
	      source: { uri: base64Icon, scale: 3 }
	    });
	  },
	  platform: 'ios'
	}];
	
	// {
	//   title: 'Cap Insets',
	//   description:
	//     'When the image is resized, the corners of the size specified ' +
	//     'by capInsets will stay a fixed size, but the center content and ' +
	//     'borders of the image will be stretched. This is useful for creating ' +
	//     'resizable rounded buttons, shadows, and other resizable assets.',
	//   render: function() {
	//     return <ImageCapInsetsExample />;
	//   },
	//   platform: 'ios',
	// },
	var fullImage = { uri: 'http://facebook.github.io/react/img/logo_og.png' };
	var smallImage = { uri: 'http://facebook.github.io/react/img/logo_small_2x.png' };
	
	var styles = StyleSheet.create({
	  base: {
	    width: 38,
	    height: 38
	  },
	  progress: {
	    flex: 1,
	    alignItems: 'center',
	    flexDirection: 'row',
	    width: 100
	  },
	  leftMargin: {
	    marginLeft: 10
	  },
	  background: {
	    backgroundColor: '#222222'
	  },
	  sectionText: {
	    marginVertical: 6
	  },
	  nestedText: {
	    marginLeft: 12,
	    marginTop: 20,
	    backgroundColor: 'transparent',
	    color: 'white'
	  },
	  resizeMode: {
	    width: 90,
	    height: 60,
	    borderWidth: 0.5,
	    borderColor: 'black'
	  },
	  resizeModeText: {
	    fontSize: 11,
	    marginBottom: 3
	  },
	  icon: {
	    width: 15,
	    height: 15
	  },
	  horizontal: {
	    flexDirection: 'row'
	  },
	  gif: {
	    flex: 1,
	    height: 200
	  },
	  base64: {
	    flex: 1,
	    height: 50,
	    resizeMode: 'contain'
	  }
	});

/***/ },

/***/ 357:
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
	var ScrollView = React.ScrollView;
	var StyleSheet = React.StyleSheet;
	var View = React.View;
	var Image = React.Image;
	
	exports.displayName = undefined;
	exports.title = '<ScrollView>';
	exports.description = 'Component that enables scrolling through child components';
	exports.examples = [{
	  title: '<ScrollView>',
	  description: 'To make content scrollable, wrap it within a <ScrollView> component',
	  render: function render() {
	    return React.createElement(
	      ScrollView,
	      {
	        automaticallyAdjustContentInsets: false,
	        onScroll: function () {
	          console.log('onScroll!');
	        },
	        scrollEventThrottle: 200,
	        style: styles.scrollView },
	      THUMBS.map(createThumbRow)
	    );
	  }
	}, {
	  title: '<ScrollView> (horizontal = true)',
	  description: 'You can display <ScrollView>\'s child components horizontally rather than vertically',
	  render: function render() {
	    return React.createElement(
	      ScrollView,
	      {
	        automaticallyAdjustContentInsets: false,
	        horizontal: true,
	        style: [styles.scrollView, styles.horizontalScrollView] },
	      THUMBS.map(createThumbRow)
	    );
	  }
	}];
	
	var Thumb = React.createClass({
	  displayName: 'Thumb',
	
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return false;
	  },
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: styles.button },
	      React.createElement(Image, { style: styles.img, source: { uri: this.props.uri } })
	    );
	  }
	});
	
	var THUMBS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];
	THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
	var createThumbRow = function createThumbRow(uri, i) {
	  return React.createElement(Thumb, { key: i, uri: uri });
	};
	
	var styles = StyleSheet.create({
	  scrollView: {
	    backgroundColor: '#6A85B1',
	    height: 300
	  },
	  horizontalScrollView: {
	    height: 120
	  },
	  containerPage: {
	    height: 50,
	    width: 50,
	    backgroundColor: '#527FE4',
	    padding: 5
	  },
	  text: {
	    fontSize: 20,
	    color: '#888888',
	    left: 80,
	    top: 20,
	    height: 40
	  },
	  button: {
	    margin: 7,
	    padding: 5,
	    alignItems: 'center',
	    backgroundColor: '#eaeaea',
	    borderRadius: 3
	  },
	  buttonContents: {
	    flexDirection: 'row',
	    width: 64,
	    height: 64
	  },
	  img: {
	    width: 64,
	    height: 64
	  }
	});

/***/ },

/***/ 358:
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
	var SegmentedControlIOS = React.SegmentedControlIOS;
	var Text = React.Text;
	var View = React.View;
	var StyleSheet = React.StyleSheet;
	
	var BasicSegmentedControlExample = React.createClass({
	  displayName: 'BasicSegmentedControlExample',
	
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        View,
	        { style: { marginBottom: 10 } },
	        React.createElement(SegmentedControlIOS, { values: ['One', 'Two'] })
	      ),
	      React.createElement(
	        View,
	        null,
	        React.createElement(SegmentedControlIOS, { values: ['One', 'Two', 'Three', 'Four', 'Five'] })
	      )
	    );
	  }
	});
	
	var PreSelectedSegmentedControlExample = React.createClass({
	  displayName: 'PreSelectedSegmentedControlExample',
	
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        View,
	        null,
	        React.createElement(SegmentedControlIOS, { values: ['One', 'Two'], selectedIndex: 0 })
	      )
	    );
	  }
	});
	
	var MomentarySegmentedControlExample = React.createClass({
	  displayName: 'MomentarySegmentedControlExample',
	
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        View,
	        null,
	        React.createElement(SegmentedControlIOS, { values: ['One', 'Two'], momentary: true })
	      )
	    );
	  }
	});
	
	var DisabledSegmentedControlExample = React.createClass({
	  displayName: 'DisabledSegmentedControlExample',
	
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        View,
	        null,
	        React.createElement(SegmentedControlIOS, { enabled: false, values: ['One', 'Two'], selectedIndex: 1 })
	      )
	    );
	  }
	});
	
	var ColorSegmentedControlExample = React.createClass({
	  displayName: 'ColorSegmentedControlExample',
	
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        View,
	        { style: { marginBottom: 10 } },
	        React.createElement(SegmentedControlIOS, { tintColor: '#ff0000', values: ['One', 'Two', 'Three', 'Four'], selectedIndex: 0 })
	      ),
	      React.createElement(
	        View,
	        null,
	        React.createElement(SegmentedControlIOS, { tintColor: '#00ff00', values: ['One', 'Two', 'Three'], selectedIndex: 1 })
	      )
	    );
	  }
	});
	
	var EventSegmentedControlExample = React.createClass({
	  displayName: 'EventSegmentedControlExample',
	
	  getInitialState: function getInitialState() {
	    return {
	      values: ['One', 'Two', 'Three'],
	      value: 'Not selected',
	      selectedIndex: undefined
	    };
	  },
	
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        { style: styles.text },
	        'Value: ',
	        this.state.value
	      ),
	      React.createElement(
	        Text,
	        { style: styles.text },
	        'Index: ',
	        this.state.selectedIndex
	      ),
	      React.createElement(SegmentedControlIOS, {
	        values: this.state.values,
	        selectedIndex: this.state.selectedIndex,
	        onChange: this._onChange,
	        onValueChange: this._onValueChange })
	    );
	  },
	
	  _onChange: function _onChange(event) {
	    this.setState({
	      selectedIndex: event.nativeEvent.selectedSegmentIndex
	    });
	  },
	
	  _onValueChange: function _onValueChange(value) {
	    this.setState({
	      value: value
	    });
	  }
	});
	
	var styles = StyleSheet.create({
	  text: {
	    fontSize: 14,
	    textAlign: 'center',
	    fontWeight: '500',
	    margin: 10
	  }
	});
	
	exports.title = '<SegmentedControlIOS>';
	exports.displayName = 'SegmentedControlExample';
	exports.description = 'Native segmented control';
	exports.examples = [{
	  title: 'Segmented controls can have values',
	  render: function render() {
	    return React.createElement(BasicSegmentedControlExample, null);
	  }
	}, {
	  title: 'Segmented controls can have a pre-selected value',
	  render: function render() {
	    return React.createElement(PreSelectedSegmentedControlExample, null);
	  }
	}, {
	  title: 'Segmented controls can be momentary',
	  render: function render() {
	    return React.createElement(MomentarySegmentedControlExample, null);
	  }
	}, {
	  title: 'Segmented controls can be disabled',
	  render: function render() {
	    return React.createElement(DisabledSegmentedControlExample, null);
	  }
	}, {
	  title: 'Custom colors can be provided',
	  render: function render() {
	    return React.createElement(ColorSegmentedControlExample, null);
	  }
	}, {
	  title: 'Change events can be detected',
	  render: function render() {
	    return React.createElement(EventSegmentedControlExample, null);
	  }
	}];

/***/ },

/***/ 359:
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
	var SwitchIOS = React.SwitchIOS;
	var Text = React.Text;
	var View = React.View;
	
	var BasicSwitchExample = React.createClass({
	  displayName: 'BasicSwitchExample',
	
	  getInitialState: function getInitialState() {
	    return {
	      trueSwitchIsOn: true,
	      falseSwitchIsOn: false
	    };
	  },
	  render: function render() {
	    var _this = this;
	
	    return React.createElement(
	      View,
	      null,
	      React.createElement(SwitchIOS, {
	        onValueChange: function (value) {
	          return _this.setState({ falseSwitchIsOn: value });
	        },
	        style: { marginBottom: 10 },
	        value: this.state.falseSwitchIsOn }),
	      React.createElement(SwitchIOS, {
	        onValueChange: function (value) {
	          return _this.setState({ trueSwitchIsOn: value });
	        },
	        value: this.state.trueSwitchIsOn })
	    );
	  }
	});
	
	var DisabledSwitchExample = React.createClass({
	  displayName: 'DisabledSwitchExample',
	
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(SwitchIOS, {
	        disabled: true,
	        style: { marginBottom: 10 },
	        value: true }),
	      React.createElement(SwitchIOS, {
	        disabled: true,
	        value: false })
	    );
	  }
	});
	
	var ColorSwitchExample = React.createClass({
	  displayName: 'ColorSwitchExample',
	
	  getInitialState: function getInitialState() {
	    return {
	      colorTrueSwitchIsOn: true,
	      colorFalseSwitchIsOn: false
	    };
	  },
	  render: function render() {
	    var _this2 = this;
	
	    return React.createElement(
	      View,
	      null,
	      React.createElement(SwitchIOS, {
	        onValueChange: function (value) {
	          return _this2.setState({ colorFalseSwitchIsOn: value });
	        },
	        onTintColor: '#00ff00',
	        style: { marginBottom: 10 },
	        thumbTintColor: '#0000ff',
	        tintColor: '#ff0000',
	        value: this.state.colorFalseSwitchIsOn }),
	      React.createElement(SwitchIOS, {
	        onValueChange: function (value) {
	          return _this2.setState({ colorTrueSwitchIsOn: value });
	        },
	        onTintColor: '#00ff00',
	        thumbTintColor: '#0000ff',
	        tintColor: '#ff0000',
	        value: this.state.colorTrueSwitchIsOn })
	    );
	  }
	});
	
	var EventSwitchExample = React.createClass({
	  displayName: 'EventSwitchExample',
	
	  getInitialState: function getInitialState() {
	    return {
	      eventSwitchIsOn: false,
	      eventSwitchRegressionIsOn: true
	    };
	  },
	  render: function render() {
	    var _this3 = this;
	
	    return React.createElement(
	      View,
	      { style: { flexDirection: 'row', justifyContent: 'space-around' } },
	      React.createElement(
	        View,
	        null,
	        React.createElement(SwitchIOS, {
	          onValueChange: function (value) {
	            return _this3.setState({ eventSwitchIsOn: value });
	          },
	          style: { marginBottom: 10 },
	          value: this.state.eventSwitchIsOn }),
	        React.createElement(SwitchIOS, {
	          onValueChange: function (value) {
	            return _this3.setState({ eventSwitchIsOn: value });
	          },
	          style: { marginBottom: 10 },
	          value: this.state.eventSwitchIsOn }),
	        React.createElement(
	          Text,
	          null,
	          this.state.eventSwitchIsOn ? 'On' : 'Off'
	        )
	      ),
	      React.createElement(
	        View,
	        null,
	        React.createElement(SwitchIOS, {
	          onValueChange: function (value) {
	            return _this3.setState({ eventSwitchRegressionIsOn: value });
	          },
	          style: { marginBottom: 10 },
	          value: this.state.eventSwitchRegressionIsOn }),
	        React.createElement(SwitchIOS, {
	          onValueChange: function (value) {
	            return _this3.setState({ eventSwitchRegressionIsOn: value });
	          },
	          style: { marginBottom: 10 },
	          value: this.state.eventSwitchRegressionIsOn }),
	        React.createElement(
	          Text,
	          null,
	          this.state.eventSwitchRegressionIsOn ? 'On' : 'Off'
	        )
	      )
	    );
	  }
	});
	
	exports.title = '<SwitchIOS>';
	exports.displayName = 'SwitchExample';
	exports.description = 'Native boolean input';
	exports.examples = [{
	  title: 'Switches can be set to true or false',
	  render: function render() {
	    return React.createElement(BasicSwitchExample, null);
	  }
	}, {
	  title: 'Switches can be disabled',
	  render: function render() {
	    return React.createElement(DisabledSwitchExample, null);
	  }
	}, {
	  title: 'Custom colors can be provided',
	  render: function render() {
	    return React.createElement(ColorSwitchExample, null);
	  }
	}, {
	  title: 'Change events can be detected',
	  render: function render() {
	    return React.createElement(EventSwitchExample, null);
	  }
	}, {
	  title: 'Switches are controlled components',
	  render: function render() {
	    return React.createElement(SwitchIOS, null);
	  }
	}];

/***/ },

/***/ 360:
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
	*/
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var Navigator = React.Navigator;
	var PixelRatio = React.PixelRatio;
	var ScrollView = React.ScrollView;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var TouchableHighlight = React.TouchableHighlight;
	
	var BreadcrumbNavSample = __webpack_require__(361);
	var NavigationBarSample = __webpack_require__(362);
	var JumpingNavSample = __webpack_require__(365);
	
	var NavButton = (function (_React$Component) {
	  _inherits(NavButton, _React$Component);
	
	  function NavButton() {
	    _classCallCheck(this, NavButton);
	
	    _get(Object.getPrototypeOf(NavButton.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(NavButton, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        TouchableHighlight,
	        {
	          style: styles.button,
	          underlayColor: '#B5B5B5',
	          onPress: this.props.onPress },
	        React.createElement(
	          Text,
	          { style: styles.buttonText },
	          this.props.text
	        )
	      );
	    }
	  }]);
	
	  return NavButton;
	})(React.Component);
	
	var NavMenu = (function (_React$Component2) {
	  _inherits(NavMenu, _React$Component2);
	
	  function NavMenu() {
	    _classCallCheck(this, NavMenu);
	
	    _get(Object.getPrototypeOf(NavMenu.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(NavMenu, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      return React.createElement(
	        ScrollView,
	        { style: styles.scene },
	        React.createElement(
	          Text,
	          { style: styles.messageText },
	          this.props.message
	        ),
	        React.createElement(NavButton, {
	          onPress: function () {
	            _this.props.navigator.push({
	              message: 'Swipe right to dismiss',
	              sceneConfig: Navigator.SceneConfigs.FloatFromRight
	            });
	          },
	          text: 'Float in from right'
	        }),
	        React.createElement(NavButton, {
	          onPress: function () {
	            _this.props.navigator.push({
	              message: 'Swipe down to dismiss',
	              sceneConfig: Navigator.SceneConfigs.FloatFromBottom
	            });
	          },
	          text: 'Float in from bottom'
	        }),
	        React.createElement(NavButton, {
	          onPress: function () {
	            _this.props.navigator.pop();
	          },
	          text: 'Pop'
	        }),
	        React.createElement(NavButton, {
	          onPress: function () {
	            _this.props.navigator.popToTop();
	          },
	          text: 'Pop to top'
	        }),
	        React.createElement(NavButton, {
	          onPress: function () {
	            _this.props.navigator.push({ id: 'navbar' });
	          },
	          text: 'Navbar Example'
	        }),
	        React.createElement(NavButton, {
	          onPress: function () {
	            _this.props.navigator.push({ id: 'jumping' });
	          },
	          text: 'Jumping Example'
	        }),
	        React.createElement(NavButton, {
	          onPress: function () {
	            _this.props.navigator.push({ id: 'breadcrumbs' });
	          },
	          text: 'Breadcrumbs Example'
	        }),
	        React.createElement(NavButton, {
	          onPress: function () {
	            _this.props.onExampleExit();
	          },
	          text: 'Exit <Navigator> Example'
	        })
	      );
	    }
	  }]);
	
	  return NavMenu;
	})(React.Component);
	
	var TabBarExample = React.createClass({
	  displayName: 'TabBarExample',
	
	  statics: {
	    title: '<Navigator>',
	    description: 'JS-implemented navigation'
	  },
	
	  renderScene: function renderScene(route, nav) {
	    var _this2 = this;
	
	    switch (route.id) {
	      case 'navbar':
	        return React.createElement(NavigationBarSample, { navigator: nav });
	      case 'breadcrumbs':
	        return React.createElement(BreadcrumbNavSample, { navigator: nav });
	      case 'jumping':
	        return React.createElement(JumpingNavSample, { navigator: nav });
	      default:
	        return React.createElement(NavMenu, {
	          message: route.message,
	          navigator: nav,
	          onExampleExit: function () {
	            _this2.props.navigator.pop();
	          }
	        });
	    }
	  },
	
	  render: function render() {
	    return React.createElement(Navigator, {
	      ref: this._setNavigatorRef,
	      style: styles.container,
	      initialRoute: { message: 'First Scene' },
	      renderScene: this.renderScene,
	      configureScene: function (route) {
	        if (route.sceneConfig) {
	          return route.sceneConfig;
	        }
	        return Navigator.SceneConfigs.FloatFromBottom;
	      }
	    });
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this._listeners && this._listeners.forEach(function (listener) {
	      return listener.remove();
	    });
	  },
	
	  _setNavigatorRef: function _setNavigatorRef(navigator) {
	    if (navigator !== this._navigator) {
	      this._navigator = navigator;
	
	      if (navigator) {
	        var callback = function callback(event) {
	          console.log('TabBarExample: event ' + event.type, {
	            route: JSON.stringify(event.data.route),
	            target: event.target,
	            type: event.type
	          });
	        };
	        // Observe focus change events from the owner.
	        this._listeners = [navigator.navigationContext.addListener('willfocus', callback), navigator.navigationContext.addListener('didfocus', callback)];
	      }
	    }
	  }
	});
	
	var styles = StyleSheet.create({
	  messageText: {
	    fontSize: 17,
	    fontWeight: '500',
	    padding: 15,
	    marginTop: 50,
	    marginLeft: 15
	  },
	  container: {
	    flex: 1
	  },
	  button: {
	    backgroundColor: 'white',
	    padding: 15,
	    borderBottomWidth: 1 / PixelRatio.get(),
	    borderBottomColor: '#CDCDCD'
	  },
	  buttonText: {
	    fontSize: 17,
	    fontWeight: '500'
	  },
	  scene: {
	    flex: 1,
	    paddingTop: 20,
	    backgroundColor: '#EAEAEA'
	  }
	});
	
	TabBarExample.external = true;
	
	module.exports = TabBarExample;

/***/ },

/***/ 361:
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
	*/
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var PixelRatio = React.PixelRatio;
	var Navigator = React.Navigator;
	var StyleSheet = React.StyleSheet;
	var ScrollView = React.ScrollView;
	var Text = React.Text;
	var TouchableHighlight = React.TouchableHighlight;
	var TouchableOpacity = React.TouchableOpacity;
	
	var _getRandomRoute = function _getRandomRoute() {
	  return {
	    title: '#' + Math.ceil(Math.random() * 1000)
	  };
	};
	
	var NavButton = (function (_React$Component) {
	  _inherits(NavButton, _React$Component);
	
	  function NavButton() {
	    _classCallCheck(this, NavButton);
	
	    _get(Object.getPrototypeOf(NavButton.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(NavButton, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        TouchableHighlight,
	        {
	          style: styles.button,
	          underlayColor: '#B5B5B5',
	          onPress: this.props.onPress },
	        React.createElement(
	          Text,
	          { style: styles.buttonText },
	          this.props.text
	        )
	      );
	    }
	  }]);
	
	  return NavButton;
	})(React.Component);
	
	var BreadcrumbNavSample = React.createClass({
	  displayName: 'BreadcrumbNavSample',
	
	  componentWillMount: function componentWillMount() {
	    this._navBarRouteMapper = {
	      rightContentForRoute: function rightContentForRoute(route, navigator) {
	        return null;
	      },
	      titleContentForRoute: function titleContentForRoute(route, navigator) {
	        return React.createElement(
	          TouchableOpacity,
	          {
	            onPress: function () {
	              return navigator.push(_getRandomRoute());
	            } },
	          React.createElement(
	            Text,
	            { style: styles.titleText },
	            route.title
	          )
	        );
	      },
	      iconForRoute: function iconForRoute(route, navigator) {
	        return React.createElement(TouchableOpacity, {
	          onPress: function () {
	            navigator.popToRoute(route);
	          },
	          style: styles.crumbIconPlaceholder
	        });
	      },
	      separatorForRoute: function separatorForRoute(route, navigator) {
	        return React.createElement(TouchableOpacity, {
	          onPress: navigator.pop,
	          style: styles.crumbSeparatorPlaceholder
	        });
	      }
	    };
	  },
	
	  _renderScene: function _renderScene(route, navigator) {
	    var _this = this;
	
	    return React.createElement(
	      ScrollView,
	      { style: styles.scene },
	      React.createElement(NavButton, {
	        onPress: function () {
	          navigator.push(_getRandomRoute());
	        },
	        text: 'Push'
	      }),
	      React.createElement(NavButton, {
	        onPress: function () {
	          navigator.immediatelyResetRouteStack([_getRandomRoute(), _getRandomRoute()]);
	        },
	        text: 'Reset w/ 2 scenes'
	      }),
	      React.createElement(NavButton, {
	        onPress: function () {
	          navigator.popToTop();
	        },
	        text: 'Pop to top'
	      }),
	      React.createElement(NavButton, {
	        onPress: function () {
	          navigator.replace(_getRandomRoute());
	        },
	        text: 'Replace'
	      }),
	      React.createElement(NavButton, {
	        onPress: function () {
	          _this.props.navigator.pop();
	        },
	        text: 'Close breadcrumb example'
	      })
	    );
	  },
	
	  render: function render() {
	    return React.createElement(Navigator, {
	      style: styles.container,
	      initialRoute: _getRandomRoute(),
	      renderScene: this._renderScene,
	      navigationBar: React.createElement(Navigator.BreadcrumbNavigationBar, {
	        routeMapper: this._navBarRouteMapper
	      })
	    });
	  }
	
	});
	
	var styles = StyleSheet.create({
	  scene: {
	    paddingTop: 50,
	    flex: 1
	  },
	  button: {
	    backgroundColor: 'white',
	    padding: 15,
	    borderBottomWidth: 1 / PixelRatio.get(),
	    borderBottomColor: '#CDCDCD'
	  },
	  buttonText: {
	    fontSize: 17,
	    fontWeight: '500'
	  },
	  container: {
	    overflow: 'hidden',
	    backgroundColor: '#dddddd',
	    flex: 1
	  },
	  titleText: {
	    fontSize: 18,
	    color: '#666666',
	    textAlign: 'center',
	    fontWeight: 'bold',
	    lineHeight: 32
	  },
	  crumbIconPlaceholder: {
	    flex: 1,
	    backgroundColor: '#666666'
	  },
	  crumbSeparatorPlaceholder: {
	    flex: 1,
	    backgroundColor: '#aaaaaa'
	  }
	});
	
	module.exports = BreadcrumbNavSample;

/***/ },

/***/ 362:
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
	*/
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var PixelRatio = React.PixelRatio;
	var Navigator = React.Navigator;
	var ScrollView = React.ScrollView;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var TouchableHighlight = React.TouchableHighlight;
	var TouchableOpacity = React.TouchableOpacity;
	
	var cssVar = __webpack_require__(363);
	
	var NavButton = (function (_React$Component) {
	  _inherits(NavButton, _React$Component);
	
	  function NavButton() {
	    _classCallCheck(this, NavButton);
	
	    _get(Object.getPrototypeOf(NavButton.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(NavButton, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        TouchableHighlight,
	        {
	          style: styles.button,
	          underlayColor: '#B5B5B5',
	          onPress: this.props.onPress },
	        React.createElement(
	          Text,
	          { style: styles.buttonText },
	          this.props.text
	        )
	      );
	    }
	  }]);
	
	  return NavButton;
	})(React.Component);
	
	var NavigationBarRouteMapper = {
	
	  LeftButton: function LeftButton(route, navigator, index, navState) {
	    if (index === 0) {
	      return null;
	    }
	
	    var previousRoute = navState.routeStack[index - 1];
	    return React.createElement(
	      TouchableOpacity,
	      {
	        onPress: function () {
	          return navigator.pop();
	        },
	        style: styles.navBarLeftButton },
	      React.createElement(
	        Text,
	        { style: [styles.navBarText, styles.navBarButtonText] },
	        previousRoute.title
	      )
	    );
	  },
	
	  RightButton: function RightButton(route, navigator, index, navState) {
	    return React.createElement(
	      TouchableOpacity,
	      {
	        onPress: function () {
	          return navigator.push(newRandomRoute());
	        },
	        style: styles.navBarRightButton },
	      React.createElement(
	        Text,
	        { style: [styles.navBarText, styles.navBarButtonText] },
	        'Next'
	      )
	    );
	  },
	
	  Title: function Title(route, navigator, index, navState) {
	    return React.createElement(
	      Text,
	      { style: [styles.navBarText, styles.navBarTitleText] },
	      route.title,
	      ' [',
	      index,
	      ']'
	    );
	  }
	
	};
	
	function newRandomRoute() {
	  return {
	    title: '#' + Math.ceil(Math.random() * 1000)
	  };
	}
	
	var NavigationBarSample = React.createClass({
	  displayName: 'NavigationBarSample',
	
	  componentWillMount: function componentWillMount() {
	    var navigator = this.props.navigator;
	
	    var callback = function callback(event) {
	      console.log('NavigationBarSample : event ' + event.type, {
	        route: JSON.stringify(event.data.route),
	        target: event.target,
	        type: event.type
	      });
	    };
	
	    // Observe focus change events from this component.
	    this._listeners = [navigator.navigationContext.addListener('willfocus', callback), navigator.navigationContext.addListener('didfocus', callback)];
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this._listeners && this._listeners.forEach(function (listener) {
	      return listener.remove();
	    });
	  },
	
	  render: function render() {
	    var _this = this;
	
	    return React.createElement(Navigator, {
	      debugOverlay: false,
	      style: styles.appContainer,
	      initialRoute: newRandomRoute(),
	      renderScene: function (route, navigator) {
	        return React.createElement(
	          ScrollView,
	          { style: styles.scene },
	          React.createElement(
	            Text,
	            { style: styles.messageText },
	            route.content
	          ),
	          React.createElement(NavButton, {
	            onPress: function () {
	              navigator.immediatelyResetRouteStack([newRandomRoute(), newRandomRoute(), newRandomRoute()]);
	            },
	            text: 'Reset w/ 3 scenes'
	          }),
	          React.createElement(NavButton, {
	            onPress: function () {
	              _this.props.navigator.pop();
	            },
	            text: 'Exit NavigationBar Example'
	          })
	        );
	      },
	      navigationBar: React.createElement(Navigator.NavigationBar, {
	        routeMapper: NavigationBarRouteMapper,
	        style: styles.navBar
	      })
	    });
	  }
	
	});
	
	var styles = StyleSheet.create({
	  messageText: {
	    fontSize: 17,
	    fontWeight: '500',
	    padding: 15,
	    marginTop: 50,
	    marginLeft: 15
	  },
	  button: {
	    backgroundColor: 'white',
	    padding: 15,
	    borderBottomWidth: 1 / PixelRatio.get(),
	    borderBottomColor: '#CDCDCD'
	  },
	  buttonText: {
	    fontSize: 17,
	    fontWeight: '500'
	  },
	  navBar: {
	    backgroundColor: 'white'
	  },
	  navBarText: {
	    fontSize: 16,
	    marginVertical: 10
	  },
	  navBarTitleText: {
	    color: cssVar('fbui-bluegray-60'),
	    fontWeight: '500',
	    marginVertical: 9
	  },
	  navBarLeftButton: {
	    paddingLeft: 10
	  },
	  navBarRightButton: {
	    paddingRight: 10
	  },
	  navBarButtonText: {
	    color: cssVar('fbui-accent-blue')
	  },
	  scene: {
	    flex: 1,
	    paddingTop: 20,
	    backgroundColor: '#EAEAEA'
	  }
	});
	
	module.exports = NavigationBarSample;

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2004-present Facebook. All Rights Reserved.
	 *
	 * @providesModule cssVar
	 * @typechecks
	 */
	'use strict';
	
	var invariant = __webpack_require__(231);
	var CSSVarConfig = __webpack_require__(364);
	
	var cssVar = function cssVar( /*string*/key) /*string*/{
	  invariant(CSSVarConfig[key], 'invalid css variable ' + key);
	
	  return CSSVarConfig[key];
	};
	
	module.exports = cssVar;

/***/ },

/***/ 364:
/***/ function(module, exports) {

	/**
	 * Copyright 2004-present Facebook. All Rights Reserved.
	 *
	 * @providesModule CSSVarConfig
	 */
	'use strict';
	
	// this a partial list of the contants in CSSConstants:: from PHP that are applicable to mobile
	
	module.exports = {
	  'fbui-accent-blue': '#5890ff',
	  'fbui-blue-90': '#4e69a2',
	  'fbui-blue-80': '#627aad',
	  'fbui-blue-70': '#758ab7',
	  'fbui-blue-60': '#899bc1',
	  'fbui-blue-50': '#9daccb',
	  'fbui-blue-40': '#b1bdd6',
	  'fbui-blue-30': '#c4cde0',
	  'fbui-blue-20': '#d8deea',
	  'fbui-blue-10': '#ebeef4',
	  'fbui-blue-5': '#f5f7fa',
	  'fbui-blue-2': '#fbfcfd',
	  'fbui-blueblack-90': '#06090f',
	  'fbui-blueblack-80': '#0c121e',
	  'fbui-blueblack-70': '#121b2e',
	  'fbui-blueblack-60': '#18243d',
	  'fbui-blueblack-50': '#1e2d4c',
	  'fbui-blueblack-40': '#23355b',
	  'fbui-blueblack-30': '#293e6b',
	  'fbui-blueblack-20': '#2f477a',
	  'fbui-blueblack-10': '#355089',
	  'fbui-blueblack-5': '#385490',
	  'fbui-blueblack-2': '#3a5795',
	  'fbui-bluegray-90': '#080a10',
	  'fbui-bluegray-80': '#141823',
	  'fbui-bluegray-70': '#232937',
	  'fbui-bluegray-60': '#373e4d',
	  'fbui-bluegray-50': '#4e5665',
	  'fbui-bluegray-40': '#6a7180',
	  'fbui-bluegray-30': '#9197a3',
	  'fbui-bluegray-20': '#bdc1c9',
	  'fbui-bluegray-10': '#dcdee3',
	  'fbui-bluegray-5': '#e9eaed',
	  'fbui-bluegray-2': '#f6f7f8',
	  'fbui-gray-90': '#191919',
	  'fbui-gray-80': '#333333',
	  'fbui-gray-70': '#4c4c4c',
	  'fbui-gray-60': '#666666',
	  'fbui-gray-50': '#7f7f7f',
	  'fbui-gray-40': '#999999',
	  'fbui-gray-30': '#b2b2b2',
	  'fbui-gray-20': '#cccccc',
	  'fbui-gray-10': '#e5e5e5',
	  'fbui-gray-5': '#f2f2f2',
	  'fbui-gray-2': '#fafafa',
	  'fbui-red': '#da2929',
	  'fbui-error': '#ce0d24',
	  'x-mobile-dark-text': '#4e5665',
	  'x-mobile-medium-text': '#6a7180',
	  'x-mobile-light-text': '#9197a3',
	  'x-mobile-base-wash': '#dcdee3'
	};

/***/ },

/***/ 365:
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
	*/
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var Navigator = React.Navigator;
	var PixelRatio = React.PixelRatio;
	var StyleSheet = React.StyleSheet;
	var ScrollView = React.ScrollView;
	var TabBarIOS = React.TabBarIOS;
	var Text = React.Text;
	var TouchableHighlight = React.TouchableHighlight;
	var View = React.View;
	
	var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
	
	var _getRandomRoute = function _getRandomRoute() {
	  return {
	    randNumber: Math.ceil(Math.random() * 1000)
	  };
	};
	
	var NavButton = (function (_React$Component) {
	  _inherits(NavButton, _React$Component);
	
	  function NavButton() {
	    _classCallCheck(this, NavButton);
	
	    _get(Object.getPrototypeOf(NavButton.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(NavButton, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        TouchableHighlight,
	        {
	          style: styles.button,
	          underlayColor: '#B5B5B5',
	          onPress: this.props.onPress },
	        React.createElement(
	          Text,
	          { style: styles.buttonText },
	          this.props.text
	        )
	      );
	    }
	  }]);
	
	  return NavButton;
	})(React.Component);
	
	var ROUTE_STACK = [_getRandomRoute(), _getRandomRoute(), _getRandomRoute()];
	var INIT_ROUTE_INDEX = 1;
	
	var JumpingNavBar = (function (_React$Component2) {
	  _inherits(JumpingNavBar, _React$Component2);
	
	  function JumpingNavBar(props) {
	    _classCallCheck(this, JumpingNavBar);
	
	    _get(Object.getPrototypeOf(JumpingNavBar.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      tabIndex: props.initTabIndex
	    };
	  }
	
	  _createClass(JumpingNavBar, [{
	    key: 'handleWillFocus',
	    value: function handleWillFocus(route) {
	      var tabIndex = ROUTE_STACK.indexOf(route);
	      this.setState({ tabIndex: tabIndex });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      return React.createElement(
	        View,
	        { style: styles.tabs },
	        React.createElement(
	          TabBarIOS,
	          null,
	          React.createElement(
	            TabBarIOS.Item,
	            {
	              icon: { uri: base64Icon, scale: 3 },
	              selected: this.state.tabIndex === 0,
	              onPress: function () {
	                _this.props.onTabIndex(0);
	                _this.setState({ tabIndex: 0 });
	              } },
	            React.createElement(View, null)
	          ),
	          React.createElement(
	            TabBarIOS.Item,
	            {
	              icon: { uri: base64Icon, scale: 3 },
	              selected: this.state.tabIndex === 1,
	              onPress: function () {
	                _this.props.onTabIndex(1);
	                _this.setState({ tabIndex: 1 });
	              } },
	            React.createElement(View, null)
	          ),
	          React.createElement(
	            TabBarIOS.Item,
	            {
	              icon: { uri: base64Icon, scale: 3 },
	              selected: this.state.tabIndex === 2,
	              onPress: function () {
	                _this.props.onTabIndex(2);
	                _this.setState({ tabIndex: 2 });
	              } },
	            React.createElement(View, null)
	          )
	        )
	      );
	    }
	  }]);
	
	  return JumpingNavBar;
	})(React.Component);
	
	var JumpingNavSample = React.createClass({
	  displayName: 'JumpingNavSample',
	
	  render: function render() {
	    var _this2 = this;
	
	    return React.createElement(Navigator, {
	      debugOverlay: false,
	      style: styles.appContainer,
	      ref: function (navigator) {
	        _this2._navigator = navigator;
	      },
	      initialRoute: ROUTE_STACK[INIT_ROUTE_INDEX],
	      initialRouteStack: ROUTE_STACK,
	      renderScene: this.renderScene,
	      configureScene: function () {
	        return _extends({}, Navigator.SceneConfigs.HorizontalSwipeJump);
	      },
	      navigationBar: React.createElement(JumpingNavBar, {
	        ref: function (navBar) {
	          _this2.navBar = navBar;
	        },
	        initTabIndex: INIT_ROUTE_INDEX,
	        routeStack: ROUTE_STACK,
	        onTabIndex: function (index) {
	          _this2._navigator.jumpTo(ROUTE_STACK[index]);
	        }
	      })
	    });
	  },
	
	  renderScene: function renderScene(route, navigator) {
	    var _this3 = this;
	
	    var backBtn;
	    var forwardBtn;
	    if (ROUTE_STACK.indexOf(route) !== 0) {
	      backBtn = React.createElement(NavButton, {
	        onPress: function () {
	          navigator.jumpBack();
	        },
	        text: 'jumpBack'
	      });
	    }
	    if (ROUTE_STACK.indexOf(route) !== ROUTE_STACK.length - 1) {
	      forwardBtn = React.createElement(NavButton, {
	        onPress: function () {
	          navigator.jumpForward();
	        },
	        text: 'jumpForward'
	      });
	    }
	    return React.createElement(
	      ScrollView,
	      { style: styles.scene },
	      React.createElement(
	        Text,
	        { style: styles.messageText },
	        '#',
	        route.randNumber
	      ),
	      backBtn,
	      forwardBtn,
	      React.createElement(NavButton, {
	        onPress: function () {
	          navigator.jumpTo(ROUTE_STACK[1]);
	        },
	        text: 'jumpTo middle route'
	      }),
	      React.createElement(NavButton, {
	        onPress: function () {
	          _this3.props.navigator.pop();
	        },
	        text: 'Exit Navigation Example'
	      }),
	      React.createElement(NavButton, {
	        onPress: function () {
	          _this3.props.navigator.push({
	            message: 'Came from jumping example'
	          });
	        },
	        text: 'Nav Menu'
	      })
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  button: {
	    backgroundColor: 'white',
	    padding: 15,
	    borderBottomWidth: 1 / PixelRatio.get(),
	    borderBottomColor: '#CDCDCD'
	  },
	  buttonText: {
	    fontSize: 17,
	    fontWeight: '500'
	  },
	  appContainer: {
	    overflow: 'hidden',
	    backgroundColor: '#dddddd',
	    flex: 1
	  },
	  messageText: {
	    fontSize: 17,
	    fontWeight: '500',
	    padding: 15,
	    marginTop: 50,
	    marginLeft: 15
	  },
	  scene: {
	    flex: 1,
	    paddingTop: 20,
	    backgroundColor: '#EAEAEA'
	  },
	  tabs: {
	    height: 50
	  }
	});
	
	module.exports = JumpingNavSample;

/***/ },

/***/ 366:
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
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var View = React.View;
	
	var Entity = React.createClass({
	  displayName: 'Entity',
	
	  render: function render() {
	    return React.createElement(
	      Text,
	      { style: { fontWeight: '500', color: '#527fe4' } },
	      this.props.children
	    );
	  }
	});
	
	var AttributeToggler = React.createClass({
	  displayName: 'AttributeToggler',
	
	  getInitialState: function getInitialState() {
	    return { fontWeight: 'bold', fontSize: 15 };
	  },
	  toggleWeight: function toggleWeight() {
	    this.setState({
	      fontWeight: this.state.fontWeight === 'bold' ? 'normal' : 'bold'
	    });
	  },
	  increaseSize: function increaseSize() {
	    this.setState({
	      fontSize: this.state.fontSize + 1
	    });
	  },
	  render: function render() {
	    var curStyle = { fontWeight: this.state.fontWeight, fontSize: this.state.fontSize };
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        { style: curStyle },
	        'Tap the controls below to change attributes.'
	      ),
	      React.createElement(
	        Text,
	        null,
	        React.createElement(
	          Text,
	          null,
	          'See how it will even work on ',
	          React.createElement(
	            Text,
	            { style: curStyle },
	            'this nested text'
	          )
	        )
	      ),
	      React.createElement(
	        Text,
	        {
	          style: { backgroundColor: '#ffaaaa', marginTop: 5 },
	          onPress: this.toggleWeight },
	        'Toggle Weight'
	      ),
	      React.createElement(
	        Text,
	        {
	          style: { backgroundColor: '#aaaaff', marginTop: 5 },
	          onPress: this.increaseSize },
	        'Increase Size'
	      )
	    );
	  }
	});
	
	exports.title = '<Text>';
	exports.description = 'Base component for rendering styled text.';
	exports.displayName = 'TextExample';
	exports.examples = [{
	  title: 'Wrap',
	  render: function render() {
	    return React.createElement(
	      Text,
	      null,
	      'The text should wrap if it goes on multiple lines. See, this is going to the next line.'
	    );
	  }
	}, {
	  title: 'Padding',
	  render: function render() {
	    return React.createElement(
	      Text,
	      { style: { padding: 10 } },
	      'This text is indented by 10px padding on all sides.'
	    );
	  }
	}, {
	  title: 'Font Family',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        { style: { fontFamily: 'Cochin' } },
	        'Cochin'
	      ),
	      React.createElement(
	        Text,
	        { style: { fontFamily: 'Cochin', fontWeight: 'bold' } },
	        'Cochin bold'
	      ),
	      React.createElement(
	        Text,
	        { style: { fontFamily: 'Helvetica' } },
	        'Helvetica'
	      ),
	      React.createElement(
	        Text,
	        { style: { fontFamily: 'Helvetica', fontWeight: 'bold' } },
	        'Helvetica bold'
	      ),
	      React.createElement(
	        Text,
	        { style: { fontFamily: 'Verdana' } },
	        'Verdana'
	      ),
	      React.createElement(
	        Text,
	        { style: { fontFamily: 'Verdana', fontWeight: 'bold' } },
	        'Verdana bold'
	      )
	    );
	  }
	}, {
	  title: 'Font Size',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        { style: { fontSize: 23 } },
	        'Size 23'
	      ),
	      React.createElement(
	        Text,
	        { style: { fontSize: 8 } },
	        'Size 8'
	      )
	    );
	  }
	}, {
	  title: 'Color',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        { style: { color: 'red' } },
	        'Red color'
	      ),
	      React.createElement(
	        Text,
	        { style: { color: 'blue' } },
	        'Blue color'
	      )
	    );
	  }
	}, {
	  title: 'Font Weight',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        { style: { fontWeight: '100' } },
	        'Move fast and be ultralight'
	      ),
	      React.createElement(
	        Text,
	        { style: { fontWeight: '200' } },
	        'Move fast and be light'
	      ),
	      React.createElement(
	        Text,
	        { style: { fontWeight: 'normal' } },
	        'Move fast and be normal'
	      ),
	      React.createElement(
	        Text,
	        { style: { fontWeight: 'bold' } },
	        'Move fast and be bold'
	      ),
	      React.createElement(
	        Text,
	        { style: { fontWeight: '900' } },
	        'Move fast and be ultrabold'
	      )
	    );
	  }
	}, {
	  title: 'Font Style',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        { style: { fontStyle: 'normal' } },
	        'Normal text'
	      ),
	      React.createElement(
	        Text,
	        { style: { fontStyle: 'italic' } },
	        'Italic text'
	      )
	    );
	  }
	}, {
	  title: 'Text Decoration',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        { style: { textDecorationLine: 'underline', textDecorationStyle: 'solid' } },
	        'Solid underline'
	      ),
	      React.createElement(
	        Text,
	        { style: { textDecorationLine: 'underline', textDecorationStyle: 'double', textDecorationColor: '#ff0000' } },
	        'Double underline with custom color'
	      ),
	      React.createElement(
	        Text,
	        { style: { textDecorationLine: 'underline', textDecorationStyle: 'dashed', textDecorationColor: '#9CDC40' } },
	        'Dashed underline with custom color'
	      ),
	      React.createElement(
	        Text,
	        { style: { textDecorationLine: 'underline', textDecorationStyle: 'dotted', textDecorationColor: 'blue' } },
	        'Dotted underline with custom color'
	      ),
	      React.createElement(
	        Text,
	        { style: { textDecorationLine: 'none' } },
	        'None textDecoration'
	      ),
	      React.createElement(
	        Text,
	        { style: { textDecorationLine: 'line-through', textDecorationStyle: 'solid' } },
	        'Solid line-through'
	      ),
	      React.createElement(
	        Text,
	        { style: { textDecorationLine: 'line-through', textDecorationStyle: 'double', textDecorationColor: '#ff0000' } },
	        'Double line-through with custom color'
	      ),
	      React.createElement(
	        Text,
	        { style: { textDecorationLine: 'line-through', textDecorationStyle: 'dashed', textDecorationColor: '#9CDC40' } },
	        'Dashed line-through with custom color'
	      ),
	      React.createElement(
	        Text,
	        { style: { textDecorationLine: 'line-through', textDecorationStyle: 'dotted', textDecorationColor: 'blue' } },
	        'Dotted line-through with custom color'
	      ),
	      React.createElement(
	        Text,
	        { style: { textDecorationLine: 'underline line-through' } },
	        'Both underline and line-through'
	      )
	    );
	  }
	}, {
	  title: 'Nested',
	  description: 'Nested text components will inherit the styles of their ' + 'parents (only backgroundColor is inherited from non-Text parents).  ' + '<Text> only supports other <Text> and raw text (strings) as children.',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        null,
	        '(Normal text,',
	        React.createElement(
	          Text,
	          { style: { fontWeight: 'bold' } },
	          '(and bold',
	          React.createElement(
	            Text,
	            { style: { fontSize: 11, color: '#527fe4' } },
	            '(and tiny inherited bold blue)'
	          ),
	          ')'
	        ),
	        ')'
	      ),
	      React.createElement(
	        Text,
	        { style: { fontSize: 12 } },
	        React.createElement(
	          Entity,
	          null,
	          'Entity Name'
	        )
	      )
	    );
	  }
	}, {
	  title: 'Text Align',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        null,
	        'auto (default) - english LTR'
	      ),
	      React.createElement(
	        Text,
	        null,
	        'أحب اللغة العربية auto (default) - arabic RTL'
	      ),
	      React.createElement(
	        Text,
	        { style: { textAlign: 'left' } },
	        'left left left left left left left left left left left left left left left'
	      ),
	      React.createElement(
	        Text,
	        { style: { textAlign: 'center' } },
	        'center center center center center center center center center center center'
	      ),
	      React.createElement(
	        Text,
	        { style: { textAlign: 'right' } },
	        'right right right right right right right right right right right right right'
	      ),
	      React.createElement(
	        Text,
	        { style: { textAlign: 'justify' } },
	        'justify: this text component',
	        "'",
	        's contents are laid out with "textAlign: justify" and as you can see all of the lines except the last one span the available width of the parent container.'
	      )
	    );
	  }
	}, {
	  title: 'Letter Spacing',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        { style: { letterSpacing: 0 } },
	        'letterSpacing = 0'
	      ),
	      React.createElement(
	        Text,
	        { style: { letterSpacing: 2, marginTop: 5 } },
	        'letterSpacing = 2'
	      ),
	      React.createElement(
	        Text,
	        { style: { letterSpacing: 9, marginTop: 5 } },
	        'letterSpacing = 9'
	      ),
	      React.createElement(
	        Text,
	        { style: { letterSpacing: -1, marginTop: 5 } },
	        'letterSpacing = -1'
	      )
	    );
	  }
	}, {
	  title: 'Spaces',
	  render: function render() {
	    return React.createElement(
	      Text,
	      null,
	      'A ',
	      'generated',
	      ' ',
	      ' ',
	      ' ',
	      'string',
	      ' and    some     spaces'
	    );
	  }
	}, {
	  title: 'Line Height',
	  render: function render() {
	    return React.createElement(
	      Text,
	      null,
	      React.createElement(
	        Text,
	        { style: { lineHeight: 35 } },
	        'A lot of space between the lines of this long passage that should wrap once.'
	      )
	    );
	  }
	}, {
	  title: 'Empty Text',
	  description: 'It\'s ok to have Text with zero or null children.',
	  render: function render() {
	    return React.createElement(Text, null);
	  }
	}, {
	  title: 'Toggling Attributes',
	  render: function render() {
	    return React.createElement(AttributeToggler, null);
	  }
	}, {
	  title: 'backgroundColor attribute',
	  description: 'backgroundColor is inherited from all types of views.',
	  render: function render() {
	    return React.createElement(
	      Text,
	      { style: { backgroundColor: 'yellow' } },
	      'Yellow container background,',
	      React.createElement(
	        Text,
	        { style: { backgroundColor: '#ffaaaa' } },
	        ' ',
	        'red background,',
	        React.createElement(
	          Text,
	          { style: { backgroundColor: '#aaaaff' } },
	          ' ',
	          'blue background,',
	          React.createElement(
	            Text,
	            null,
	            ' ',
	            'inherited blue background,',
	            React.createElement(
	              Text,
	              { style: { backgroundColor: '#aaffaa' } },
	              ' ',
	              'nested green background.'
	            )
	          )
	        )
	      )
	    );
	  }
	}, {
	  title: 'numberOfLines attribute',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        { numberOfLines: 1 },
	        'Maximum of one line, no matter how much I write here. If I keep writing, it',
	        "'",
	        'll just truncate after one line.'
	      ),
	      React.createElement(
	        Text,
	        { numberOfLines: 2, style: { marginTop: 20 } },
	        'Maximum of two lines, no matter how much I write here. If I keep writing, it',
	        "'",
	        'll just truncate after two lines.'
	      ),
	      React.createElement(
	        Text,
	        { style: { marginTop: 20 } },
	        'No maximum lines specified, no matter how much I write here. If I keep writing, it',
	        "'",
	        'll just keep going and going.'
	      )
	    );
	  }
	}, {
	  title: 'Text highlighting (tap the link to see highlight)',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        null,
	        'Lorem ipsum dolor sit amet, ',
	        React.createElement(
	          Text,
	          { suppressHighlighting: false, style: { backgroundColor: 'white', textDecorationLine: 'underline', color: 'blue' }, onPress: function () {
	              return null;
	            } },
	          'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
	        ),
	        ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	      )
	    );
	  }
	}, {
	  title: 'allowFontScaling attribute',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        null,
	        'By default, text will respect Text Size accessibility setting on iOS. It means that all font sizes will be increased or descreased depending on the value of Text Size setting in',
	        " ",
	        React.createElement(
	          Text,
	          { style: { fontWeight: 'bold' } },
	          'Settings.app - Display & Brightness - Text Size'
	        )
	      ),
	      React.createElement(
	        Text,
	        { style: { marginTop: 10 } },
	        'You can disable scaling for your Text component by passing ',
	        "\"",
	        'allowFontScaling=',
	        "{",
	        'false',
	        "}\"",
	        ' prop.'
	      ),
	      React.createElement(
	        Text,
	        { allowFontScaling: false, style: { marginTop: 20 } },
	        'This text will not scale.'
	      )
	    );
	  }
	}, {
	  title: 'Inline images',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        null,
	        'This text contains an inline image ',
	        React.createElement(Image, { source: { uri: 'http://facebook.github.io/react/img/logo_small_2x.png' } }),
	        '. Neat, huh?'
	      )
	    );
	  }
	}];
	
	var styles = StyleSheet.create({
	  backgroundColorText: {
	    margin: 5,
	    marginBottom: 0,
	    backgroundColor: 'rgba(100, 100, 100, 0.3)'
	  }
	});

/***/ },

/***/ 367:
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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var Text = React.Text;
	var TextInput = React.TextInput;
	var View = React.View;
	var StyleSheet = React.StyleSheet;
	
	var WithLabel = React.createClass({
	  displayName: 'WithLabel',
	
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: styles.labelContainer },
	      React.createElement(
	        View,
	        { style: styles.label },
	        React.createElement(
	          Text,
	          null,
	          this.props.label
	        )
	      ),
	      this.props.children
	    );
	  }
	});
	
	var TextEventsExample = React.createClass({
	  displayName: 'TextEventsExample',
	
	  getInitialState: function getInitialState() {
	    return {
	      curText: '<No Event>',
	      prevText: '<No Event>',
	      prev2Text: '<No Event>'
	    };
	  },
	
	  updateText: function updateText(text) {
	    this.setState(function (state) {
	      return {
	        curText: text,
	        prevText: state.curText,
	        prev2Text: state.prevText
	      };
	    });
	  },
	
	  render: function render() {
	    var _this = this;
	
	    return React.createElement(
	      View,
	      null,
	      React.createElement(TextInput, {
	        autoCapitalize: 'none',
	        placeholder: 'Enter text to see events',
	        autoCorrect: false,
	        onFocus: function () {
	          return _this.updateText('onFocus');
	        },
	        onBlur: function () {
	          return _this.updateText('onBlur');
	        },
	        onChange: function (event) {
	          return _this.updateText('onChange text: ' + event.nativeEvent.text);
	        },
	        onEndEditing: function (event) {
	          return _this.updateText('onEndEditing text: ' + event.nativeEvent.text);
	        },
	        onSubmitEditing: function (event) {
	          return _this.updateText('onSubmitEditing text: ' + event.nativeEvent.text);
	        },
	        style: styles['default']
	      }),
	      React.createElement(
	        Text,
	        { style: styles.eventLabel },
	        this.state.curText,
	        '\n',
	        '(prev: ',
	        this.state.prevText,
	        ')',
	        '\n',
	        '(prev2: ',
	        this.state.prev2Text,
	        ')'
	      )
	    );
	  }
	});
	
	var RewriteExample = (function (_React$Component) {
	  _inherits(RewriteExample, _React$Component);
	
	  function RewriteExample(props) {
	    _classCallCheck(this, RewriteExample);
	
	    _get(Object.getPrototypeOf(RewriteExample.prototype), 'constructor', this).call(this, props);
	    this.state = { text: '' };
	  }
	
	  _createClass(RewriteExample, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var limit = 20;
	      var remainder = limit - this.state.text.length;
	      var remainderColor = remainder > 5 ? 'blue' : 'red';
	      return React.createElement(
	        View,
	        { style: styles.rewriteContainer },
	        React.createElement(TextInput, {
	          multiline: false,
	          maxLength: limit,
	          onChangeText: function (text) {
	            text = text.replace(/ /g, '_');
	            _this2.setState({ text: text });
	          },
	          style: styles['default'],
	          value: this.state.text
	        }),
	        React.createElement(
	          Text,
	          { style: [styles.remainder, { color: remainderColor }] },
	          remainder
	        )
	      );
	    }
	  }]);
	
	  return RewriteExample;
	})(React.Component);
	
	var styles = StyleSheet.create({
	  page: {
	    paddingBottom: 300
	  },
	  'default': {
	    height: 26,
	    borderWidth: 0.5,
	    borderColor: '#0f0f0f',
	    flex: 1,
	    fontSize: 13,
	    padding: 4
	  },
	  multiline: {
	    borderWidth: 0.5,
	    borderColor: '#0f0f0f',
	    flex: 1,
	    fontSize: 13,
	    height: 50,
	    padding: 4,
	    marginBottom: 4
	  },
	  multilineWithFontStyles: {
	    color: 'blue',
	    fontWeight: 'bold',
	    fontSize: 18,
	    fontFamily: 'Cochin',
	    height: 60
	  },
	  multilineChild: {
	    width: 50,
	    height: 40,
	    position: 'absolute',
	    right: 5,
	    backgroundColor: 'red'
	  },
	  eventLabel: {
	    margin: 3,
	    fontSize: 12
	  },
	  labelContainer: {
	    flexDirection: 'row',
	    marginVertical: 2,
	    flex: 1
	  },
	  label: {
	    width: 115,
	    alignItems: 'flex-end',
	    marginRight: 10,
	    paddingTop: 2
	  },
	  rewriteContainer: {
	    flexDirection: 'row',
	    alignItems: 'center'
	  },
	  remainder: {
	    textAlign: 'right',
	    width: 24
	  }
	});
	
	exports.displayName = undefined;
	exports.title = '<TextInput>';
	exports.description = 'Single and multi-line text inputs.';
	exports.examples = [{
	  title: 'Auto-focus',
	  render: function render() {
	    return React.createElement(TextInput, { autoFocus: true, style: styles['default'] });
	  }
	}, {
	  title: "Live Re-Write (<sp>  ->  '_') + maxLength",
	  render: function render() {
	    return React.createElement(RewriteExample, null);
	  }
	}, {
	  title: 'Auto-capitalize',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        WithLabel,
	        { label: 'none' },
	        React.createElement(TextInput, {
	          autoCapitalize: 'none',
	          style: styles['default']
	        })
	      ),
	      React.createElement(
	        WithLabel,
	        { label: 'sentences' },
	        React.createElement(TextInput, {
	          autoCapitalize: 'sentences',
	          style: styles['default']
	        })
	      ),
	      React.createElement(
	        WithLabel,
	        { label: 'words' },
	        React.createElement(TextInput, {
	          autoCapitalize: 'words',
	          style: styles['default']
	        })
	      ),
	      React.createElement(
	        WithLabel,
	        { label: 'characters' },
	        React.createElement(TextInput, {
	          autoCapitalize: 'characters',
	          style: styles['default']
	        })
	      )
	    );
	  }
	}, {
	  title: 'Auto-correct',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        WithLabel,
	        { label: 'true' },
	        React.createElement(TextInput, { autoCorrect: true, style: styles['default'] })
	      ),
	      React.createElement(
	        WithLabel,
	        { label: 'false' },
	        React.createElement(TextInput, { autoCorrect: false, style: styles['default'] })
	      )
	    );
	  }
	}, {
	  title: 'Keyboard types',
	  render: function render() {
	    var keyboardTypes = ['default', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'email-address', 'decimal-pad', 'twitter', 'web-search', 'numeric'];
	    var examples = keyboardTypes.map(function (type) {
	      return React.createElement(
	        WithLabel,
	        { key: type, label: type },
	        React.createElement(TextInput, {
	          keyboardType: type,
	          style: styles['default']
	        })
	      );
	    });
	    return React.createElement(
	      View,
	      null,
	      examples
	    );
	  }
	}, {
	  title: 'Return key types',
	  render: function render() {
	    var returnKeyTypes = ['default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call'];
	    var examples = returnKeyTypes.map(function (type) {
	      return React.createElement(
	        WithLabel,
	        { key: type, label: type },
	        React.createElement(TextInput, {
	          returnKeyType: type,
	          style: styles['default']
	        })
	      );
	    });
	    return React.createElement(
	      View,
	      null,
	      examples
	    );
	  }
	}, {
	  title: 'Enable return key automatically',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        WithLabel,
	        { label: 'true' },
	        React.createElement(TextInput, { enablesReturnKeyAutomatically: true, style: styles['default'] })
	      )
	    );
	  }
	}, {
	  title: 'Secure text entry',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        WithLabel,
	        { label: 'true' },
	        React.createElement(TextInput, { password: true, style: styles['default'], defaultValue: 'abc' })
	      )
	    );
	  }
	}, {
	  title: 'Event handling',
	  render: function render() {
	    return React.createElement(TextEventsExample, null);
	  }
	}, {
	  title: 'Colored input text',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(TextInput, {
	        style: [styles['default'], { color: 'blue' }],
	        defaultValue: 'Blue'
	      }),
	      React.createElement(TextInput, {
	        style: [styles['default'], { color: 'green' }],
	        defaultValue: 'Green'
	      })
	    );
	  }
	}, {
	  title: 'Clear button mode',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        WithLabel,
	        { label: 'never' },
	        React.createElement(TextInput, {
	          style: styles['default'],
	          clearButtonMode: 'never'
	        })
	      ),
	      React.createElement(
	        WithLabel,
	        { label: 'while editing' },
	        React.createElement(TextInput, {
	          style: styles['default'],
	          clearButtonMode: 'while-editing'
	        })
	      ),
	      React.createElement(
	        WithLabel,
	        { label: 'unless editing' },
	        React.createElement(TextInput, {
	          style: styles['default'],
	          clearButtonMode: 'unless-editing'
	        })
	      ),
	      React.createElement(
	        WithLabel,
	        { label: 'always' },
	        React.createElement(TextInput, {
	          style: styles['default'],
	          clearButtonMode: 'always'
	        })
	      )
	    );
	  }
	}, {
	  title: 'Clear and select',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        WithLabel,
	        { label: 'clearTextOnFocus' },
	        React.createElement(TextInput, {
	          placeholder: 'text is cleared on focus',
	          defaultValue: 'text is cleared on focus',
	          style: styles['default'],
	          clearTextOnFocus: true
	        })
	      ),
	      React.createElement(
	        WithLabel,
	        { label: 'selectTextOnFocus' },
	        React.createElement(TextInput, {
	          placeholder: 'text is selected on focus',
	          defaultValue: 'text is selected on focus',
	          style: styles['default'],
	          selectTextOnFocus: true
	        })
	      )
	    );
	  }
	}, {
	  title: 'Multiline',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(TextInput, {
	        placeholder: 'multiline text input',
	        multiline: true,
	        style: styles.multiline
	      }),
	      React.createElement(TextInput, {
	        placeholder: 'multiline text input with font styles and placeholder',
	        multiline: true,
	        clearTextOnFocus: true,
	        autoCorrect: true,
	        autoCapitalize: 'words',
	        placeholderTextColor: 'red',
	        keyboardType: 'url',
	        style: [styles.multiline, styles.multilineWithFontStyles]
	      }),
	      React.createElement(TextInput, {
	        placeholder: 'uneditable multiline text input',
	        editable: false,
	        multiline: true,
	        style: styles.multiline
	      }),
	      React.createElement(
	        TextInput,
	        {
	          placeholder: 'multiline with children',
	          multiline: true,
	          enablesReturnKeyAutomatically: true,
	          returnKeyType: 'go',
	          style: styles.multiline },
	        React.createElement(View, { style: styles.multilineChild })
	      )
	    );
	  }
	}];

/***/ },

/***/ 368:
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
	var TabBarIOS = React.TabBarIOS;
	var Text = React.Text;
	var View = React.View;
	
	var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
	
	var TabBarExample = React.createClass({
	  statics: {
	    title: '<TabBarIOS>',
	    description: 'Tab-based navigation.'
	  },
	
	  displayName: 'TabBarExample',
	
	  getInitialState: function getInitialState() {
	    return {
	      selectedTab: 'redTab',
	      notifCount: 0,
	      presses: 0
	    };
	  },
	
	  _renderContent: function _renderContent(color, pageText, num) {
	    return React.createElement(
	      View,
	      { style: [styles.tabContent, { backgroundColor: color }] },
	      React.createElement(
	        Text,
	        { style: styles.tabText },
	        pageText
	      ),
	      React.createElement(
	        Text,
	        { style: styles.tabText },
	        num,
	        ' re-renders of the ',
	        pageText
	      )
	    );
	  },
	
	  render: function render() {
	    var _this = this;
	
	    return React.createElement(
	      TabBarIOS,
	      {
	        tintColor: 'white',
	        barTintColor: 'darkslateblue' },
	      React.createElement(
	        TabBarIOS.Item,
	        {
	          title: 'Blue Tab',
	          icon: { uri: base64Icon, scale: 3 },
	          selected: this.state.selectedTab === 'blueTab',
	          onPress: function () {
	            _this.setState({
	              selectedTab: 'blueTab'
	            });
	          } },
	        this._renderContent('#414A8C', 'Blue Tab')
	      ),
	      React.createElement(
	        TabBarIOS.Item,
	        {
	          title: 'Red Tab',
	          icon: { uri: base64Icon, scale: 3 },
	          badge: this.state.notifCount > 0 ? this.state.notifCount : undefined,
	          selected: this.state.selectedTab === 'redTab',
	          onPress: function () {
	            _this.setState({
	              selectedTab: 'redTab',
	              notifCount: _this.state.notifCount + 1
	            });
	          } },
	        this._renderContent('#783E33', 'Red Tab', this.state.notifCount)
	      ),
	      React.createElement(
	        TabBarIOS.Item,
	        {
	          icon: { uri: base64Icon, scale: 3 },
	          title: 'Green Tab',
	          selected: this.state.selectedTab === 'greenTab',
	          onPress: function () {
	            _this.setState({
	              selectedTab: 'greenTab',
	              presses: _this.state.presses + 1
	            });
	          } },
	        this._renderContent('#21551C', 'Green Tab', this.state.presses)
	      )
	    );
	  }
	
	});
	
	var styles = StyleSheet.create({
	  tabContent: {
	    flex: 1,
	    alignItems: 'center'
	  },
	  tabText: {
	    color: 'white',
	    margin: 50
	  }
	});
	
	module.exports = TabBarExample;

/***/ },

/***/ 369:
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
	var PixelRatio = React.PixelRatio;
	var Image = React.Image;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var TouchableHighlight = React.TouchableHighlight;
	var TouchableOpacity = React.TouchableOpacity;
	var View = React.View;
	
	exports.displayName = undefined;
	exports.description = 'Touchable and onPress examples.';
	exports.title = '<Touchable*> and onPress';
	exports.examples = [{
	  title: '<TouchableHighlight>',
	  description: 'TouchableHighlight works by adding an extra view with a ' + 'black background under the single child view.  This works best when the ' + 'child view is fully opaque, although it can be made to work as a simple ' + 'background color change as well with the activeOpacity and ' + 'underlayColor props.',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        View,
	        { style: styles.row },
	        React.createElement(
	          TouchableHighlight,
	          {
	            style: styles.wrapper,
	            onPress: function () {
	              return console.log('stock THW image - highlight');
	            } },
	          React.createElement(Image, {
	            source: heartImage,
	            style: styles.image
	          })
	        ),
	        React.createElement(
	          TouchableHighlight,
	          {
	            style: styles.wrapper,
	            activeOpacity: 1,
	            animationVelocity: 0,
	            underlayColor: 'rgb(210, 230, 255)',
	            onPress: function () {
	              return console.log('custom THW text - hightlight');
	            } },
	          React.createElement(
	            View,
	            { style: styles.wrapperCustom },
	            React.createElement(
	              Text,
	              { style: styles.text },
	              'Tap Here For Custom Highlight!'
	            )
	          )
	        )
	      )
	    );
	  }
	}, {
	  title: '<Text onPress={fn}> with highlight',
	  render: function render() {
	    return React.createElement(TextOnPressBox, null);
	  }
	}, {
	  title: 'Touchable feedback events',
	  description: '<Touchable*> components accept onPress, onPressIn, ' + 'onPressOut, and onLongPress as props.',
	  render: function render() {
	    return React.createElement(TouchableFeedbackEvents, null);
	  }
	}, {
	  title: 'Touchable delay for events',
	  description: '<Touchable*> components also accept delayPressIn, ' + 'delayPressOut, and delayLongPress as props. These props impact the ' + 'timing of feedback events.',
	  render: function render() {
	    return React.createElement(TouchableDelayEvents, null);
	  }
	}];
	
	var TextOnPressBox = React.createClass({
	  displayName: 'TextOnPressBox',
	
	  getInitialState: function getInitialState() {
	    return {
	      timesPressed: 0
	    };
	  },
	  textOnPress: function textOnPress() {
	    this.setState({
	      timesPressed: this.state.timesPressed + 1
	    });
	  },
	  render: function render() {
	    var textLog = '';
	    if (this.state.timesPressed > 1) {
	      textLog = this.state.timesPressed + 'x text onPress';
	    } else if (this.state.timesPressed > 0) {
	      textLog = 'text onPress';
	    }
	
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        {
	          style: styles.textBlock,
	          onPress: this.textOnPress },
	        'Text has built-in onPress handling'
	      ),
	      React.createElement(
	        View,
	        { style: styles.logBox },
	        React.createElement(
	          Text,
	          null,
	          textLog
	        )
	      )
	    );
	  }
	});
	
	var TouchableFeedbackEvents = React.createClass({
	  displayName: 'TouchableFeedbackEvents',
	
	  getInitialState: function getInitialState() {
	    return {
	      eventLog: []
	    };
	  },
	  render: function render() {
	    var _this = this;
	
	    return React.createElement(
	      View,
	      { testID: 'touchable_feedback_events' },
	      React.createElement(
	        View,
	        { style: [styles.row, { justifyContent: 'center' }] },
	        React.createElement(
	          TouchableOpacity,
	          {
	            style: styles.wrapper,
	            testID: 'touchable_feedback_events_button',
	            onPress: function () {
	              return _this._appendEvent('press');
	            },
	            onPressIn: function () {
	              return _this._appendEvent('pressIn');
	            },
	            onPressOut: function () {
	              return _this._appendEvent('pressOut');
	            },
	            onLongPress: function () {
	              return _this._appendEvent('longPress');
	            } },
	          React.createElement(
	            Text,
	            { style: styles.button },
	            'Press Me'
	          )
	        )
	      ),
	      React.createElement(
	        View,
	        { testID: 'touchable_feedback_events_console', style: styles.eventLogBox },
	        this.state.eventLog.map(function (e, ii) {
	          return React.createElement(
	            Text,
	            { key: ii },
	            e
	          );
	        })
	      )
	    );
	  },
	  _appendEvent: function _appendEvent(eventName) {
	    var limit = 6;
	    var eventLog = this.state.eventLog.slice(0, limit - 1);
	    eventLog.unshift(eventName);
	    this.setState({ eventLog: eventLog });
	  }
	});
	
	var TouchableDelayEvents = React.createClass({
	  displayName: 'TouchableDelayEvents',
	
	  getInitialState: function getInitialState() {
	    return {
	      eventLog: []
	    };
	  },
	  render: function render() {
	    var _this2 = this;
	
	    return React.createElement(
	      View,
	      { testID: 'touchable_delay_events' },
	      React.createElement(
	        View,
	        { style: [styles.row, { justifyContent: 'center' }] },
	        React.createElement(
	          TouchableOpacity,
	          {
	            style: styles.wrapper,
	            testID: 'touchable_delay_events_button',
	            onPress: function () {
	              return _this2._appendEvent('press');
	            },
	            delayPressIn: 400,
	            onPressIn: function () {
	              return _this2._appendEvent('pressIn - 400ms delay');
	            },
	            delayPressOut: 1000,
	            onPressOut: function () {
	              return _this2._appendEvent('pressOut - 1000ms delay');
	            },
	            delayLongPress: 800,
	            onLongPress: function () {
	              return _this2._appendEvent('longPress - 800ms delay');
	            } },
	          React.createElement(
	            Text,
	            { style: styles.button },
	            'Press Me'
	          )
	        )
	      ),
	      React.createElement(
	        View,
	        { style: styles.eventLogBox, testID: 'touchable_delay_events_console' },
	        this.state.eventLog.map(function (e, ii) {
	          return React.createElement(
	            Text,
	            { key: ii },
	            e
	          );
	        })
	      )
	    );
	  },
	  _appendEvent: function _appendEvent(eventName) {
	    var limit = 6;
	    var eventLog = this.state.eventLog.slice(0, limit - 1);
	    eventLog.unshift(eventName);
	    this.setState({ eventLog: eventLog });
	  }
	});
	
	var heartImage = { uri: 'https://pbs.twimg.com/media/BlXBfT3CQAA6cVZ.png:small' };
	
	var styles = StyleSheet.create({
	  row: {
	    justifyContent: 'center',
	    flexDirection: 'row'
	  },
	  icon: {
	    width: 24,
	    height: 24
	  },
	  image: {
	    width: 50,
	    height: 50
	  },
	  text: {
	    fontSize: 16
	  },
	  button: {
	    color: '#007AFF'
	  },
	  wrapper: {
	    borderRadius: 8
	  },
	  wrapperCustom: {
	    borderRadius: 8,
	    padding: 6
	  },
	  logBox: {
	    padding: 20,
	    margin: 10,
	    borderWidth: 1 / PixelRatio.get(),
	    borderColor: '#f0f0f0',
	    backgroundColor: '#f9f9f9'
	  },
	  eventLogBox: {
	    padding: 10,
	    margin: 10,
	    height: 120,
	    borderWidth: 1 / PixelRatio.get(),
	    borderColor: '#f0f0f0',
	    backgroundColor: '#f9f9f9'
	  },
	  textBlock: {
	    fontWeight: '500',
	    color: 'blue'
	  }
	});

/***/ },

/***/ 370:
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
	var ListView = React.ListView;
	var TouchableHighlight = React.TouchableHighlight;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var View = React.View;
	
	var UIExplorerPage = __webpack_require__(352);
	
	var ListViewSimpleExample = React.createClass({
	  displayName: 'ListViewSimpleExample',
	
	  statics: {
	    title: '<ListView> - Simple',
	    description: 'Performant, scrollable list of data.'
	  },
	
	  getInitialState: function getInitialState() {
	    var ds = new ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
	        return r1 !== r2;
	      } });
	    return {
	      dataSource: ds.cloneWithRows(this._genRows({}))
	    };
	  },
	
	  _pressData: {},
	
	  componentWillMount: function componentWillMount() {
	    this._pressData = {};
	  },
	
	  render: function render() {
	    return React.createElement(
	      UIExplorerPage,
	      {
	        title: this.props.navigator ? null : '<ListView> - Simple',
	        noSpacer: true,
	        noScroll: true },
	      React.createElement(ListView, {
	        dataSource: this.state.dataSource,
	        renderRow: this._renderRow
	      })
	    );
	  },
	
	  _renderRow: function _renderRow(rowData, sectionID, rowID) {
	    var _this = this;
	
	    var rowHash = Math.abs(hashCode(rowData));
	    var imgSource = {
	      uri: THUMB_URLS[rowHash % THUMB_URLS.length]
	    };
	    return React.createElement(
	      TouchableHighlight,
	      { onPress: function () {
	          return _this._pressRow(rowID);
	        } },
	      React.createElement(
	        View,
	        null,
	        React.createElement(
	          View,
	          { style: styles.row },
	          React.createElement(Image, { style: styles.thumb, source: imgSource }),
	          React.createElement(
	            Text,
	            { style: styles.text },
	            rowData + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)
	          )
	        ),
	        React.createElement(View, { style: styles.separator })
	      )
	    );
	  },
	
	  _genRows: function _genRows(pressData) {
	    var dataBlob = [];
	    for (var ii = 0; ii < 100; ii++) {
	      var pressedText = pressData[ii] ? ' (pressed)' : '';
	      dataBlob.push('Row ' + ii + pressedText);
	    }
	    return dataBlob;
	  },
	
	  _pressRow: function _pressRow(rowID) {
	    this._pressData[rowID] = !this._pressData[rowID];
	    this.setState({ dataSource: this.state.dataSource.cloneWithRows(this._genRows(this._pressData)) });
	  }
	});
	
	var THUMB_URLS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];
	var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';
	
	/* eslint no-bitwise: 0 */
	var hashCode = function hashCode(str) {
	  var hash = 15;
	  for (var ii = str.length - 1; ii >= 0; ii--) {
	    hash = (hash << 5) - hash + str.charCodeAt(ii);
	  }
	  return hash;
	};
	
	var styles = StyleSheet.create({
	  row: {
	    flexDirection: 'row',
	    justifyContent: 'center',
	    padding: 10,
	    backgroundColor: '#F6F6F6'
	  },
	  separator: {
	    height: 1,
	    backgroundColor: '#CCCCCC'
	  },
	  thumb: {
	    width: 64,
	    height: 64
	  },
	  text: {
	    flex: 1
	  }
	});
	
	module.exports = ListViewSimpleExample;

/***/ },

/***/ 371:
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
	var ListView = React.ListView;
	var TouchableHighlight = React.TouchableHighlight;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var View = React.View;
	
	var THUMB_URLS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];
	
	var ListViewGridLayoutExample = React.createClass({
	  displayName: 'ListViewGridLayoutExample',
	
	  statics: {
	    title: '<ListView> - Grid Layout',
	    description: 'Flexbox grid layout.'
	  },
	
	  getInitialState: function getInitialState() {
	    var ds = new ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
	        return r1 !== r2;
	      } });
	    return {
	      dataSource: ds.cloneWithRows(this._genRows({}))
	    };
	  },
	
	  _pressData: {},
	
	  componentWillMount: function componentWillMount() {
	    this._pressData = {};
	  },
	
	  render: function render() {
	    return(
	      // ListView wraps ScrollView and so takes on its properties.
	      // With that in mind you can use the ScrollView's contentContainerStyle prop to style the items.
	      React.createElement(ListView, {
	        contentContainerStyle: styles.list,
	        dataSource: this.state.dataSource,
	        renderRow: this._renderRow
	      })
	    );
	  },
	
	  _renderRow: function _renderRow(rowData, sectionID, rowID) {
	    var _this = this;
	
	    var rowHash = Math.abs(hashCode(rowData));
	    var imgSource = {
	      uri: THUMB_URLS[rowHash % THUMB_URLS.length]
	    };
	    return React.createElement(
	      TouchableHighlight,
	      { onPress: function () {
	          return _this._pressRow(rowID);
	        }, underlayColor: 'transparent' },
	      React.createElement(
	        View,
	        null,
	        React.createElement(
	          View,
	          { style: styles.row },
	          React.createElement(Image, { style: styles.thumb, source: imgSource }),
	          React.createElement(
	            Text,
	            { style: styles.text },
	            rowData
	          )
	        )
	      )
	    );
	  },
	
	  _genRows: function _genRows(pressData) {
	    var dataBlob = [];
	    for (var ii = 0; ii < 100; ii++) {
	      var pressedText = pressData[ii] ? ' (X)' : '';
	      dataBlob.push('Cell ' + ii + pressedText);
	    }
	    return dataBlob;
	  },
	
	  _pressRow: function _pressRow(rowID) {
	    this._pressData[rowID] = !this._pressData[rowID];
	    this.setState({ dataSource: this.state.dataSource.cloneWithRows(this._genRows(this._pressData)) });
	  }
	});
	
	/* eslint no-bitwise: 0 */
	var hashCode = function hashCode(str) {
	  var hash = 15;
	  for (var ii = str.length - 1; ii >= 0; ii--) {
	    hash = (hash << 5) - hash + str.charCodeAt(ii);
	  }
	  return hash;
	};
	
	var styles = StyleSheet.create({
	  list: {
	    justifyContent: 'space-around',
	    flexDirection: 'row',
	    flexWrap: 'wrap'
	  },
	  row: {
	    justifyContent: 'center',
	    padding: 5,
	    margin: 3,
	    width: 100,
	    height: 100,
	    backgroundColor: '#F6F6F6',
	    alignItems: 'center',
	    borderWidth: 1,
	    borderRadius: 5,
	    borderColor: '#CCC'
	  },
	  thumb: {
	    width: 64,
	    height: 64
	  },
	  text: {
	    flex: 1,
	    marginTop: 5,
	    fontWeight: 'bold'
	  }
	});
	
	module.exports = ListViewGridLayoutExample;

/***/ },

/***/ 372:
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
	var
	// LayoutAnimation,
	ListView = React.ListView;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var TouchableOpacity = React.TouchableOpacity;
	var View = React.View;
	
	var PAGE_SIZE = 4;
	var THUMB_URLS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];
	var NUM_SECTIONS = 100;
	var NUM_ROWS_PER_SECTION = 10;
	
	var Thumb = React.createClass({
	  displayName: 'Thumb',
	
	  getInitialState: function getInitialState() {
	    return { thumbIndex: this._getThumbIdx(), dir: 'row' };
	  },
	  _getThumbIdx: function _getThumbIdx() {
	    return Math.floor(Math.random() * THUMB_URLS.length);
	  },
	  _onPressThumb: function _onPressThumb() {
	    var config = layoutAnimationConfigs[this.state.thumbIndex % layoutAnimationConfigs.length];
	    // LayoutAnimation.configureNext(config);
	    // this.setState({
	    //   thumbIndex: this._getThumbIdx(),
	    //   dir: this.state.dir === 'row' ? 'column' : 'row',
	    // });
	  },
	  render: function render() {
	    return React.createElement(
	      TouchableOpacity,
	      {
	        onPress: this._onPressThumb,
	        style: [styles.buttonContents, { flexDirection: this.state.dir }] },
	      React.createElement(Image, { style: styles.img, source: { uri: THUMB_URLS[this.state.thumbIndex] } }),
	      React.createElement(Image, { style: styles.img, source: { uri: THUMB_URLS[this.state.thumbIndex] } }),
	      React.createElement(Image, { style: styles.img, source: { uri: THUMB_URLS[this.state.thumbIndex] } }),
	      this.state.dir === 'column' ? React.createElement(
	        Text,
	        null,
	        'Oooo, look at this new text!  So awesome it may just be crazy. Let me keep typing here so it wraps at least one line.'
	      ) : React.createElement(Text, null)
	    );
	  }
	});
	
	var ListViewPagingExample = React.createClass({
	  displayName: 'ListViewPagingExample',
	
	  statics: {
	    title: '<ListView> - Paging',
	    description: 'Floating headers & layout animations.'
	  },
	
	  getInitialState: function getInitialState() {
	    var getSectionData = function getSectionData(dataBlob, sectionID) {
	      return dataBlob[sectionID];
	    };
	    var getRowData = function getRowData(dataBlob, sectionID, rowID) {
	      return dataBlob[rowID];
	    };
	
	    var dataSource = new ListView.DataSource({
	      getRowData: getRowData,
	      getSectionHeaderData: getSectionData,
	      rowHasChanged: function rowHasChanged(row1, row2) {
	        return row1 !== row2;
	      },
	      sectionHeaderHasChanged: function sectionHeaderHasChanged(s1, s2) {
	        return s1 !== s2;
	      }
	    });
	
	    var dataBlob = {};
	    var sectionIDs = [];
	    var rowIDs = [];
	    for (var ii = 0; ii < NUM_SECTIONS; ii++) {
	      var sectionName = 'Section ' + ii;
	      sectionIDs.push(sectionName);
	      dataBlob[sectionName] = sectionName;
	      rowIDs[ii] = [];
	
	      for (var jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
	        var rowName = 'S' + ii + ', R' + jj;
	        rowIDs[ii].push(rowName);
	        dataBlob[rowName] = rowName;
	      }
	    }
	    return {
	      dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
	      headerPressCount: 0
	    };
	  },
	
	  renderRow: function renderRow(rowData, sectionID, rowID) {
	    return React.createElement(Thumb, { text: rowData });
	  },
	
	  renderSectionHeader: function renderSectionHeader(sectionData, sectionID) {
	    return React.createElement(
	      View,
	      { style: styles.section },
	      React.createElement(
	        Text,
	        { style: styles.text },
	        sectionData
	      )
	    );
	  },
	
	  renderHeader: function renderHeader() {
	    var headerLikeText = this.state.headerPressCount % 2 ? React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        { style: styles.text },
	        '1 Like'
	      )
	    ) : null;
	    return React.createElement(
	      TouchableOpacity,
	      { onPress: this._onPressHeader, style: styles.header },
	      headerLikeText,
	      React.createElement(
	        View,
	        null,
	        React.createElement(
	          Text,
	          { style: styles.text },
	          'Table Header (click me)'
	        )
	      )
	    );
	  },
	
	  renderFooter: function renderFooter() {
	    return React.createElement(
	      View,
	      { style: styles.header },
	      React.createElement(
	        Text,
	        { onPress: function () {
	            return console.log('Footer!');
	          }, style: styles.text },
	        'Table Footer'
	      )
	    );
	  },
	
	  render: function render() {
	    return React.createElement(ListView, {
	      style: styles.listview,
	      dataSource: this.state.dataSource,
	      onChangeVisibleRows: function (visibleRows, changedRows) {
	        return console.log({ visibleRows: visibleRows, changedRows: changedRows });
	      },
	      renderHeader: this.renderHeader,
	      renderFooter: this.renderFooter,
	      renderSectionHeader: this.renderSectionHeader,
	      renderRow: this.renderRow,
	      initialListSize: 10,
	      pageSize: PAGE_SIZE,
	      scrollRenderAheadDistance: 2000
	    });
	  },
	
	  _onPressHeader: function _onPressHeader() {
	    var config = layoutAnimationConfigs[Math.floor(this.state.headerPressCount / 2) % layoutAnimationConfigs.length];
	    // LayoutAnimation.configureNext(config);
	    this.setState({ headerPressCount: this.state.headerPressCount + 1 });
	  }
	
	});
	
	var styles = StyleSheet.create({
	  listview: {
	    backgroundColor: '#B0C4DE'
	  },
	  header: {
	    height: 40,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#3B5998',
	    flexDirection: 'row'
	  },
	  text: {
	    color: 'white',
	    paddingHorizontal: 8
	  },
	  rowText: {
	    color: '#888888'
	  },
	  thumbText: {
	    fontSize: 20,
	    color: '#888888'
	  },
	  buttonContents: {
	    flexDirection: 'row',
	    justifyContent: 'center',
	    alignItems: 'center',
	    marginHorizontal: 5,
	    marginVertical: 3,
	    padding: 5,
	    backgroundColor: '#EAEAEA',
	    borderRadius: 3,
	    paddingVertical: 10
	  },
	  img: {
	    width: 64,
	    height: 64,
	    marginHorizontal: 10,
	    backgroundColor: 'transparent'
	  },
	  section: {
	    flexDirection: 'column',
	    justifyContent: 'center',
	    alignItems: 'flex-start',
	    padding: 6,
	    backgroundColor: '#5890ff'
	  }
	});
	
	var animations = {
	  layout: {
	    spring: {
	      duration: 750,
	      create: {
	        duration: 300
	      },
	      // type: LayoutAnimation.Types.easeInEaseOut,
	      // property: LayoutAnimation.Properties.opacity,
	      update: {
	        // type: LayoutAnimation.Types.spring,
	        springDamping: 0.4
	      }
	    },
	    easeInEaseOut: {
	      duration: 300,
	      create: {
	        // type: LayoutAnimation.Types.easeInEaseOut,
	        // property: LayoutAnimation.Properties.scaleXY,
	      },
	      update: {
	        delay: 100
	      }
	    }
	  }
	};
	
	// type: LayoutAnimation.Types.easeInEaseOut,
	var layoutAnimationConfigs = [animations.layout.spring, animations.layout.easeInEaseOut];
	
	module.exports = ListViewPagingExample;

/***/ },

/***/ 373:
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
	var PickerIOS = React.PickerIOS;
	var Text = React.Text;
	var View = React.View;
	
	var PickerItemIOS = PickerIOS.Item;
	
	var CAR_MAKES_AND_MODELS = {
	  amc: {
	    name: 'AMC',
	    models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer']
	  },
	  alfa: {
	    name: 'Alfa-Romeo',
	    models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider']
	  },
	  aston: {
	    name: 'Aston Martin',
	    models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage']
	  },
	  audi: {
	    name: 'Audi',
	    models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7']
	  },
	  austin: {
	    name: 'Austin',
	    models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess']
	  },
	  borgward: {
	    name: 'Borgward',
	    models: ['Hansa', 'Isabella', 'P100']
	  },
	  buick: {
	    name: 'Buick',
	    models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal', 'Roadmaster', 'Skylark']
	  },
	  cadillac: {
	    name: 'Cadillac',
	    models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville']
	  },
	  chevrolet: {
	    name: 'Chevrolet',
	    models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle', 'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt']
	  }
	};
	
	var PickerExample = React.createClass({
	  displayName: 'PickerExample',
	
	  getInitialState: function getInitialState() {
	    return {
	      carMake: 'cadillac',
	      modelIndex: 3
	    };
	  },
	
	  render: function render() {
	    var _this = this;
	
	    var make = CAR_MAKES_AND_MODELS[this.state.carMake];
	    var selectionString = make.name + ' ' + make.models[this.state.modelIndex];
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        null,
	        'Please choose a make for your car:'
	      ),
	      React.createElement(
	        PickerIOS,
	        {
	          selectedValue: this.state.carMake,
	          onValueChange: function (carMake) {
	            return _this.setState({ carMake: carMake, modelIndex: 0 });
	          } },
	        Object.keys(CAR_MAKES_AND_MODELS).map(function (carMake) {
	          return React.createElement(PickerItemIOS, {
	            key: carMake,
	            value: carMake,
	            label: CAR_MAKES_AND_MODELS[carMake].name
	          });
	        })
	      ),
	      React.createElement(
	        Text,
	        null,
	        'Please choose a model of ',
	        make.name,
	        ':'
	      ),
	      React.createElement(
	        PickerIOS,
	        {
	          selectedValue: this.state.modelIndex,
	          key: this.state.carMake,
	          onValueChange: function (modelIndex) {
	            return _this.setState({ modelIndex: modelIndex });
	          } },
	        CAR_MAKES_AND_MODELS[this.state.carMake].models.map(function (modelName, modelIndex) {
	          return React.createElement(PickerItemIOS, {
	            key: _this.state.carmake + '_' + modelIndex,
	            value: modelIndex,
	            label: modelName
	          });
	        })
	      ),
	      React.createElement(
	        Text,
	        null,
	        'You selected: ',
	        selectionString
	      )
	    );
	  }
	});
	
	exports.displayName = undefined;
	exports.title = '<PickerIOS>';
	exports.description = 'Render lists of selectable options with UIPickerView.';
	exports.examples = [{
	  title: '<PickerIOS>',
	  render: function render() {
	    return React.createElement(PickerExample, null);
	  }
	}];

/***/ },

/***/ 374:
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
	var Modal = React.Modal;
	var StyleSheet = React.StyleSheet;
	var SwitchIOS = React.SwitchIOS;
	var Text = React.Text;
	var TouchableHighlight = React.TouchableHighlight;
	var View = React.View;
	
	exports.displayName = undefined;
	exports.framework = 'React';
	exports.title = '<Modal>';
	exports.description = 'Component for presenting modal views.';
	
	var Button = React.createClass({
	  displayName: 'Button',
	
	  getInitialState: function getInitialState() {
	    return {
	      active: false
	    };
	  },
	
	  _onHighlight: function _onHighlight() {
	    this.setState({ active: true });
	  },
	
	  _onUnhighlight: function _onUnhighlight() {
	    this.setState({ active: false });
	  },
	
	  render: function render() {
	    var colorStyle = {
	      color: this.state.active ? '#fff' : '#000'
	    };
	    return React.createElement(
	      TouchableHighlight,
	      {
	        onHideUnderlay: this._onUnhighlight,
	        onPress: this.props.onPress,
	        onShowUnderlay: this._onHighlight,
	        style: [styles.button, this.props.style],
	        underlayColor: '#a9d9d4' },
	      React.createElement(
	        Text,
	        { style: [styles.buttonText, colorStyle] },
	        this.props.children
	      )
	    );
	  }
	});
	
	var ModalExample = React.createClass({
	  displayName: 'ModalExample',
	
	  getInitialState: function getInitialState() {
	    return {
	      animated: true,
	      modalVisible: false,
	      transparent: false
	    };
	  },
	
	  _setModalVisible: function _setModalVisible(visible) {
	    this.setState({ modalVisible: visible });
	  },
	
	  _toggleAnimated: function _toggleAnimated() {
	    this.setState({ animated: !this.state.animated });
	  },
	
	  _toggleTransparent: function _toggleTransparent() {
	    this.setState({ transparent: !this.state.transparent });
	  },
	
	  render: function render() {
	    var modalBackgroundStyle = {
	      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff'
	    };
	    var innerContainerTransparentStyle = this.state.transparent ? { backgroundColor: '#fff', padding: 20 } : null;
	
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Modal,
	        {
	          animated: this.state.animated,
	          transparent: this.state.transparent,
	          visible: this.state.modalVisible },
	        React.createElement(
	          View,
	          { style: [styles.container, modalBackgroundStyle] },
	          React.createElement(
	            View,
	            { style: [styles.innerContainer, innerContainerTransparentStyle] },
	            React.createElement(
	              Text,
	              null,
	              'This modal was presented ',
	              this.state.animated ? 'with' : 'without',
	              ' animation.'
	            ),
	            React.createElement(
	              Button,
	              {
	                onPress: this._setModalVisible.bind(this, false),
	                style: styles.modalButton },
	              'Close'
	            )
	          )
	        )
	      ),
	      React.createElement(
	        View,
	        { style: styles.row },
	        React.createElement(
	          Text,
	          { style: styles.rowTitle },
	          'Animated'
	        ),
	        React.createElement(SwitchIOS, { value: this.state.animated, onValueChange: this._toggleAnimated })
	      ),
	      React.createElement(
	        View,
	        { style: styles.row },
	        React.createElement(
	          Text,
	          { style: styles.rowTitle },
	          'Transparent'
	        ),
	        React.createElement(SwitchIOS, { value: this.state.transparent, onValueChange: this._toggleTransparent })
	      ),
	      React.createElement(
	        Button,
	        { onPress: this._setModalVisible.bind(this, true) },
	        'Present'
	      )
	    );
	  }
	});
	
	exports.examples = [{
	  title: 'Modal Presentation',
	  description: 'Modals can be presented with or without animation',
	  render: function render() {
	    return React.createElement(ModalExample, null);
	  }
	}];
	
	var styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    justifyContent: 'center',
	    padding: 20
	  },
	  innerContainer: {
	    borderRadius: 10
	  },
	  row: {
	    alignItems: 'center',
	    flex: 1,
	    flexDirection: 'row',
	    marginBottom: 20
	  },
	  rowTitle: {
	    flex: 1,
	    fontWeight: 'bold'
	  },
	  button: {
	    borderRadius: 5,
	    flex: 1,
	    height: 44,
	    justifyContent: 'center',
	    overflow: 'hidden'
	  },
	  buttonText: {
	    fontSize: 18,
	    margin: 5,
	    textAlign: 'center'
	  },
	  modalButton: {
	    marginTop: 10
	  }
	});

/***/ },

/***/ 375:
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
	var Text = React.Text;
	var View = React.View;
	var Platform = React.Platform;
	var TouchableWithoutFeedback = React.TouchableWithoutFeedback;
	
	var styles = StyleSheet.create({
	  box: {
	    backgroundColor: '#527FE4',
	    borderColor: '#000033',
	    borderWidth: 1
	  }
	});
	
	var ViewBorderStyleExample = React.createClass({
	  displayName: 'ViewBorderStyleExample',
	
	  getInitialState: function getInitialState() {
	    return {
	      showBorder: true
	    };
	  },
	
	  render: function render() {
	    if (Platform.OS !== 'android') {
	      return React.createElement(
	        View,
	        { style: { backgroundColor: 'red' } },
	        React.createElement(
	          Text,
	          { style: { color: 'white' } },
	          'borderStyle is only supported on android for now.'
	        )
	      );
	    }
	
	    return React.createElement(
	      TouchableWithoutFeedback,
	      { onPress: this._handlePress },
	      React.createElement(
	        View,
	        null,
	        React.createElement(
	          View,
	          { style: {
	              borderWidth: 1,
	              borderRadius: 5,
	              borderStyle: this.state.showBorder ? 'dashed' : null,
	              padding: 5
	            } },
	          React.createElement(
	            Text,
	            { style: { fontSize: 11 } },
	            'Dashed border style'
	          )
	        ),
	        React.createElement(
	          View,
	          { style: {
	              marginTop: 5,
	              borderWidth: 1,
	              borderRadius: 5,
	              borderStyle: this.state.showBorder ? 'dotted' : null,
	              padding: 5
	            } },
	          React.createElement(
	            Text,
	            { style: { fontSize: 11 } },
	            'Dotted border style'
	          )
	        )
	      )
	    );
	  },
	
	  _handlePress: function _handlePress() {
	    this.setState({ showBorder: !this.state.showBorder });
	  }
	});
	
	exports.title = '<View>';
	exports.description = 'Basic building block of all UI, examples that ' + 'demonstrate some of the many styles available.';
	
	exports.displayName = 'ViewExample';
	exports.examples = [{
	  title: 'Background Color',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: { backgroundColor: '#527FE4', padding: 5 } },
	      React.createElement(
	        Text,
	        { style: { fontSize: 11 } },
	        'Blue background'
	      )
	    );
	  }
	}, {
	  title: 'Border',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: { borderColor: '#527FE4', borderWidth: 5, padding: 10 } },
	      React.createElement(
	        Text,
	        { style: { fontSize: 11 } },
	        '5px blue border'
	      )
	    );
	  }
	}, {
	  title: 'Padding/Margin',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: { borderColor: '#bb0000', borderWidth: 0.5 } },
	      React.createElement(
	        View,
	        { style: [styles.box, { padding: 5 }] },
	        React.createElement(
	          Text,
	          { style: { fontSize: 11 } },
	          '5px padding'
	        )
	      ),
	      React.createElement(
	        View,
	        { style: [styles.box, { margin: 5 }] },
	        React.createElement(
	          Text,
	          { style: { fontSize: 11 } },
	          '5px margin'
	        )
	      ),
	      React.createElement(
	        View,
	        { style: [styles.box, { margin: 5, padding: 5, alignSelf: 'flex-start' }] },
	        React.createElement(
	          Text,
	          { style: { fontSize: 11 } },
	          '5px margin and padding,'
	        ),
	        React.createElement(
	          Text,
	          { style: { fontSize: 11 } },
	          'widthAutonomous=true'
	        )
	      )
	    );
	  }
	}, {
	  title: 'Border Radius',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: { borderWidth: 0.5, borderRadius: 5, padding: 5 } },
	      React.createElement(
	        Text,
	        { style: { fontSize: 11 } },
	        'Too much use of `borderRadius` (especially large radii) on anything which is scrolling may result in dropped frames. Use sparingly.'
	      )
	    );
	  }
	}, {
	  title: 'Border Style',
	  render: function render() {
	    return React.createElement(ViewBorderStyleExample, null);
	  }
	}, {
	  title: 'Circle with Border Radius',
	  render: function render() {
	    return React.createElement(View, { style: { borderRadius: 10, borderWidth: 1, width: 20, height: 20 } });
	  }
	}, {
	  title: 'Overflow',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: { flexDirection: 'row' } },
	      React.createElement(
	        View,
	        {
	          style: {
	            width: 95,
	            height: 10,
	            marginRight: 10,
	            marginBottom: 5,
	            overflow: 'hidden',
	            borderWidth: 0.5
	          } },
	        React.createElement(
	          View,
	          { style: { width: 200, height: 20 } },
	          React.createElement(
	            Text,
	            null,
	            'Overflow hidden'
	          )
	        )
	      ),
	      React.createElement(
	        View,
	        { style: { width: 95, height: 10, marginBottom: 5, borderWidth: 0.5 } },
	        React.createElement(
	          View,
	          { style: { width: 200, height: 20 } },
	          React.createElement(
	            Text,
	            null,
	            'Overflow visible'
	          )
	        )
	      )
	    );
	  }
	}, {
	  title: 'Opacity',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        View,
	        { style: { opacity: 0 } },
	        React.createElement(
	          Text,
	          null,
	          'Opacity 0'
	        )
	      ),
	      React.createElement(
	        View,
	        { style: { opacity: 0.1 } },
	        React.createElement(
	          Text,
	          null,
	          'Opacity 0.1'
	        )
	      ),
	      React.createElement(
	        View,
	        { style: { opacity: 0.3 } },
	        React.createElement(
	          Text,
	          null,
	          'Opacity 0.3'
	        )
	      ),
	      React.createElement(
	        View,
	        { style: { opacity: 0.5 } },
	        React.createElement(
	          Text,
	          null,
	          'Opacity 0.5'
	        )
	      ),
	      React.createElement(
	        View,
	        { style: { opacity: 0.7 } },
	        React.createElement(
	          Text,
	          null,
	          'Opacity 0.7'
	        )
	      ),
	      React.createElement(
	        View,
	        { style: { opacity: 0.9 } },
	        React.createElement(
	          Text,
	          null,
	          'Opacity 0.9'
	        )
	      ),
	      React.createElement(
	        View,
	        { style: { opacity: 1 } },
	        React.createElement(
	          Text,
	          null,
	          'Opacity 1'
	        )
	      )
	    );
	  }
	}];

/***/ },

/***/ 376:
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
	 */
	'use strict';
	
	var React = __webpack_require__(1);
	var Image = React.Image;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var TouchableWithoutFeedback = React.TouchableWithoutFeedback;
	var TouchableOpacity = React.TouchableOpacity;
	var View = React.View;
	var ViewPagerAndroid = React.ViewPagerAndroid;
	
	var PAGES = 5;
	var BGCOLOR = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];
	var IMAGE_URIS = ['http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg', 'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg', 'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg', 'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg', 'http://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg'];
	
	var LikeCount = React.createClass({
	  displayName: 'LikeCount',
	
	  getInitialState: function getInitialState() {
	    return {
	      likes: 7
	    };
	  },
	  onClick: function onClick() {
	    this.setState({ likes: this.state.likes + 1 });
	  },
	  render: function render() {
	    var thumbsUp = '👍';
	    return React.createElement(
	      View,
	      { style: styles.likeContainer },
	      React.createElement(
	        TouchableOpacity,
	        { onPress: this.onClick, style: styles.likeButton },
	        React.createElement(
	          Text,
	          { style: styles.likesText },
	          thumbsUp + ' Like'
	        )
	      ),
	      React.createElement(
	        Text,
	        { style: styles.likesText },
	        this.state.likes + ' likes'
	      )
	    );
	  }
	});
	
	var Button = React.createClass({
	  displayName: 'Button',
	
	  _handlePress: function _handlePress() {
	    if (this.props.enabled && this.props.onPress) {
	      this.props.onPress();
	    }
	  },
	  render: function render() {
	    return React.createElement(
	      TouchableWithoutFeedback,
	      { onPress: this._handlePress },
	      React.createElement(
	        View,
	        { style: [styles.button, this.props.enabled ? {} : styles.buttonDisabled] },
	        React.createElement(
	          Text,
	          { style: styles.buttonText },
	          this.props.text
	        )
	      )
	    );
	  }
	});
	
	var ProgressBar = React.createClass({
	  displayName: 'ProgressBar',
	
	  render: function render() {
	    var fractionalPosition = this.props.progress.position + this.props.progress.offset;
	    var progressBarSize = fractionalPosition / (PAGES - 1) * this.props.size;
	    return React.createElement(
	      View,
	      { style: [styles.progressBarContainer, { width: this.props.size }] },
	      React.createElement(View, { style: [styles.progressBar, { width: progressBarSize }] })
	    );
	  }
	});
	
	var ViewPagerAndroidExample = React.createClass({
	  displayName: 'ViewPagerAndroidExample',
	
	  statics: {
	    title: '<ViewPagerAndroid>',
	    description: 'Container that allows to flip left and right between child views.'
	  },
	  getInitialState: function getInitialState() {
	    return { page: 0, progress: { position: 0, offset: 0 } };
	  },
	  onPageSelected: function onPageSelected(e) {
	    this.setState({ page: e.nativeEvent.position });
	  },
	  onPageScroll: function onPageScroll(e) {
	    this.setState({ progress: e.nativeEvent });
	  },
	  move: function move(delta) {
	    var page = this.state.page + delta;
	    this.viewPager && this.viewPager.setPage(page);
	    this.setState({ page: page });
	  },
	  go: function go(page) {
	    this.viewPager && this.viewPager.setPage(page);
	    this.setState({ page: page });
	  },
	  render: function render() {
	    var _this = this;
	
	    var pages = [];
	    for (var i = 0; i < PAGES; i++) {
	      var pageStyle = {
	        backgroundColor: BGCOLOR[i % BGCOLOR.length],
	        alignItems: 'center',
	        padding: 20
	      };
	      pages.push(React.createElement(
	        View,
	        { key: i, style: pageStyle, collapsable: false },
	        React.createElement(Image, {
	          style: styles.image,
	          source: { uri: IMAGE_URIS[i % BGCOLOR.length] }
	        }),
	        React.createElement(LikeCount, null)
	      ));
	    }
	    var page = this.state.page;
	    return React.createElement(
	      View,
	      { style: styles.container },
	      React.createElement(
	        ViewPagerAndroid,
	        {
	          style: styles.viewPager,
	          initialPage: 0,
	          onPageScroll: this.onPageScroll,
	          onPageSelected: this.onPageSelected,
	          ref: function (viewPager) {
	            _this.viewPager = viewPager;
	          } },
	        pages
	      ),
	      React.createElement(
	        View,
	        { style: styles.buttons },
	        React.createElement(Button, { text: 'Start', enabled: page > 0, onPress: function () {
	            return _this.go(0);
	          } }),
	        React.createElement(Button, { text: 'Prev', enabled: page > 0, onPress: function () {
	            return _this.move(-1);
	          } }),
	        React.createElement(
	          Text,
	          { style: styles.buttonText },
	          'Page ',
	          page + 1,
	          ' / ',
	          PAGES
	        ),
	        React.createElement(ProgressBar, { size: 100, progress: this.state.progress }),
	        React.createElement(Button, { text: 'Next', enabled: page < PAGES - 1, onPress: function () {
	            return _this.move(1);
	          } }),
	        React.createElement(Button, { text: 'Last', enabled: page < PAGES - 1, onPress: function () {
	            return _this.go(PAGES - 1);
	          } })
	      )
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  buttons: {
	    flexDirection: 'row',
	    height: 30,
	    backgroundColor: 'black',
	    alignItems: 'center',
	    justifyContent: 'space-between'
	  },
	  button: {
	    flex: 1,
	    margin: 5,
	    borderColor: 'gray',
	    borderWidth: 1,
	    backgroundColor: 'gray'
	  },
	  buttonDisabled: {
	    backgroundColor: 'black',
	    opacity: 0.5
	  },
	  buttonText: {
	    color: 'white'
	  },
	  container: {
	    flex: 1,
	    backgroundColor: 'white'
	  },
	  image: {
	    width: 300,
	    height: 200,
	    padding: 20
	  },
	  likeButton: {
	    backgroundColor: 'rgba(0, 0, 0, 0.1)',
	    borderColor: '#333333',
	    borderWidth: 1,
	    borderRadius: 5,
	    flex: 1,
	    margin: 8,
	    padding: 8
	  },
	  likeContainer: {
	    flexDirection: 'row'
	  },
	  likesText: {
	    flex: 1,
	    fontSize: 18,
	    alignSelf: 'center'
	  },
	  progressBarContainer: {
	    height: 10,
	    margin: 10,
	    borderColor: '#eeeeee',
	    borderWidth: 2
	  },
	  progressBar: {
	    alignSelf: 'flex-start',
	    flex: 1,
	    backgroundColor: '#eeeeee'
	  },
	  viewPager: {
	    flex: 1
	  }
	});
	
	module.exports = ViewPagerAndroidExample;

/***/ },

/***/ 377:
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
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(1);
	var SliderIOS = React.SliderIOS;
	var Text = React.Text;
	var StyleSheet = React.StyleSheet;
	var View = React.View;
	
	var SliderExample = React.createClass({
	  displayName: 'SliderExample',
	
	  getInitialState: function getInitialState() {
	    return {
	      value: 0.2
	    };
	  },
	
	  render: function render() {
	    var _this = this;
	
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        Text,
	        { style: styles.text },
	        this.state.value
	      ),
	      React.createElement(SliderIOS, _extends({}, this.props, {
	        value: this.state.value,
	        onValueChange: function (value) {
	          return _this.setState({ value: value });
	        } }))
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  slider: {
	    height: 10,
	    margin: 10
	  },
	  text: {
	    fontSize: 14,
	    textAlign: 'center',
	    fontWeight: '500',
	    margin: 10
	  }
	});
	
	exports.title = '<SliderIOS>';
	exports.displayName = 'SliderExample';
	exports.description = 'Slider input for numeric values';
	exports.examples = [{
	  title: 'Default settings',
	  render: function render() {
	    return React.createElement(SliderExample, null);
	  }
	}, {
	  title: 'minimumValue: -1, maximumValue: 2',
	  render: function render() {
	    return React.createElement(SliderExample, {
	      minimumValue: -1,
	      maximumValue: 2
	    });
	  }
	}, {
	  title: 'step: 0.25',
	  render: function render() {
	    return React.createElement(SliderExample, { step: 0.25 });
	  }
	}, {
	  title: 'Custom thumb image',
	  render: function render() {
	    return React.createElement(SliderExample, { thumbImage: { uri: 'http://facebook.github.io/react/img/logo_og.png' } });
	  }
	}];

/***/ },

/***/ 378:
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
	var ProgressViewIOS = React.ProgressViewIOS;
	var StyleSheet = React.StyleSheet;
	var View = React.View;
	
	var TimerMixin = __webpack_require__(284);
	
	var ProgressViewExample = React.createClass({
	  displayName: 'ProgressViewExample',
	
	  mixins: [TimerMixin],
	
	  getInitialState: function getInitialState() {
	    return {
	      progress: 0
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.updateProgress();
	  },
	
	  updateProgress: function updateProgress() {
	    var _this = this;
	
	    var progress = this.state.progress + 0.01;
	    this.setState({ progress: progress });
	    this.requestAnimationFrame(function () {
	      return _this.updateProgress();
	    });
	  },
	
	  getProgress: function getProgress(offset) {
	    var progress = this.state.progress + offset;
	    return Math.sin(progress % Math.PI) % 1;
	  },
	
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: styles.container },
	      React.createElement(ProgressViewIOS, { style: styles.progressView, progress: this.getProgress(0) }),
	      React.createElement(ProgressViewIOS, { style: styles.progressView, progressTintColor: 'purple', progress: this.getProgress(0.2) }),
	      React.createElement(ProgressViewIOS, { style: styles.progressView, progressTintColor: 'red', progress: this.getProgress(0.4) }),
	      React.createElement(ProgressViewIOS, { style: styles.progressView, progressTintColor: 'orange', progress: this.getProgress(0.6) }),
	      React.createElement(ProgressViewIOS, { style: styles.progressView, progressTintColor: 'yellow', progress: this.getProgress(0.8) })
	    );
	  }
	});
	
	exports.displayName = undefined;
	exports.framework = 'React';
	exports.title = '<ProgressViewIOS>';
	exports.description = 'ProgressViewIOS';
	exports.examples = [{
	  title: '<ProgressViewIOS>',
	  render: function render() {
	    return React.createElement(ProgressViewExample, null);
	  }
	}];
	
	var styles = StyleSheet.create({
	  container: {
	    marginTop: -20,
	    backgroundColor: 'transparent'
	  },
	  progressView: {
	    marginTop: 20
	  }
	});

/***/ },

/***/ 379:
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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var StyleSheet = React.StyleSheet;
	var View = React.View;
	var Text = React.Text;
	var TouchableHighlight = React.TouchableHighlight;
	var AlertIOS = React.AlertIOS;
	
	exports.framework = 'React';
	exports.title = 'AlertIOS';
	exports.description = 'iOS alerts and action sheets';
	exports.examples = [{
	  title: 'Alerts',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        TouchableHighlight,
	        { style: styles.wrapper,
	          onPress: function () {
	            return AlertIOS.alert('Foo Title', 'My Alert Msg');
	          } },
	        React.createElement(
	          View,
	          { style: styles.button },
	          React.createElement(
	            Text,
	            null,
	            'Alert with message and default button'
	          )
	        )
	      ),
	      React.createElement(
	        TouchableHighlight,
	        { style: styles.wrapper,
	          onPress: function () {
	            return AlertIOS.alert(null, null, [{ text: 'Button', onPress: function onPress() {
	                return console.log('Button Pressed!');
	              } }]);
	          } },
	        React.createElement(
	          View,
	          { style: styles.button },
	          React.createElement(
	            Text,
	            null,
	            'Alert with only one button'
	          )
	        )
	      ),
	      React.createElement(
	        TouchableHighlight,
	        { style: styles.wrapper,
	          onPress: function () {
	            return AlertIOS.alert('Foo Title', 'My Alert Msg', [{ text: 'Foo', onPress: function onPress() {
	                return console.log('Foo Pressed!');
	              } }, { text: 'Bar', onPress: function onPress() {
	                return console.log('Bar Pressed!');
	              } }]);
	          } },
	        React.createElement(
	          View,
	          { style: styles.button },
	          React.createElement(
	            Text,
	            null,
	            'Alert with two buttons'
	          )
	        )
	      ),
	      React.createElement(
	        TouchableHighlight,
	        { style: styles.wrapper,
	          onPress: function () {
	            return AlertIOS.alert('Foo Title', null, [{ text: 'Foo', onPress: function onPress() {
	                return console.log('Foo Pressed!');
	              } }, { text: 'Bar', onPress: function onPress() {
	                return console.log('Bar Pressed!');
	              } }, { text: 'Baz', onPress: function onPress() {
	                return console.log('Baz Pressed!');
	              } }]);
	          } },
	        React.createElement(
	          View,
	          { style: styles.button },
	          React.createElement(
	            Text,
	            null,
	            'Alert with 3 buttons'
	          )
	        )
	      ),
	      React.createElement(
	        TouchableHighlight,
	        { style: styles.wrapper,
	          onPress: function () {
	            return AlertIOS.alert('Foo Title', 'My Alert Msg', '..............'.split('').map(function (dot, index) {
	              return {
	                text: 'Button ' + index,
	                onPress: function onPress() {
	                  return console.log('Pressed ' + index);
	                }
	              };
	            }));
	          } },
	        React.createElement(
	          View,
	          { style: styles.button },
	          React.createElement(
	            Text,
	            null,
	            'Alert with too many buttons'
	          )
	        )
	      )
	    );
	  }
	}, {
	  title: 'Prompt',
	  render: function render() {
	    return React.createElement(PromptExample, null);
	  }
	}];
	
	var PromptExample = (function (_React$Component) {
	  _inherits(PromptExample, _React$Component);
	
	  function PromptExample(props) {
	    _classCallCheck(this, PromptExample);
	
	    _get(Object.getPrototypeOf(PromptExample.prototype), 'constructor', this).call(this, props);
	
	    this.promptResponse = this.promptResponse.bind(this);
	    this.state = {
	      promptValue: undefined
	    };
	
	    this.title = 'Type a value';
	    this.defaultValue = 'Default value';
	    this.buttons = [{
	      text: 'Custom cancel'
	    }, {
	      text: 'Custom OK',
	      onPress: this.promptResponse
	    }];
	  }
	
	  _createClass(PromptExample, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        View,
	        null,
	        React.createElement(
	          Text,
	          { style: { marginBottom: 10 } },
	          React.createElement(
	            Text,
	            { style: { fontWeight: 'bold' } },
	            'Prompt value:'
	          ),
	          ' ',
	          this.state.promptValue
	        ),
	        React.createElement(
	          TouchableHighlight,
	          {
	            style: styles.wrapper,
	            onPress: this.prompt.bind(this, this.title, this.promptResponse) },
	          React.createElement(
	            View,
	            { style: styles.button },
	            React.createElement(
	              Text,
	              null,
	              'prompt with title & callback'
	            )
	          )
	        ),
	        React.createElement(
	          TouchableHighlight,
	          {
	            style: styles.wrapper,
	            onPress: this.prompt.bind(this, this.title, this.buttons) },
	          React.createElement(
	            View,
	            { style: styles.button },
	            React.createElement(
	              Text,
	              null,
	              'prompt with title & custom buttons'
	            )
	          )
	        ),
	        React.createElement(
	          TouchableHighlight,
	          {
	            style: styles.wrapper,
	            onPress: this.prompt.bind(this, this.title, this.defaultValue, this.promptResponse) },
	          React.createElement(
	            View,
	            { style: styles.button },
	            React.createElement(
	              Text,
	              null,
	              'prompt with title, default value & callback'
	            )
	          )
	        ),
	        React.createElement(
	          TouchableHighlight,
	          {
	            style: styles.wrapper,
	            onPress: this.prompt.bind(this, this.title, this.defaultValue, this.buttons) },
	          React.createElement(
	            View,
	            { style: styles.button },
	            React.createElement(
	              Text,
	              null,
	              'prompt with title, default value & custom buttons'
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'prompt',
	    value: function prompt() {
	      // Flow's apply support is broken: #7035621
	      AlertIOS.prompt.apply(AlertIOS, arguments);
	    }
	  }, {
	    key: 'promptResponse',
	    value: function promptResponse(promptValue) {
	      this.setState({ promptValue: promptValue });
	    }
	  }]);
	
	  return PromptExample;
	})(React.Component);
	
	var styles = StyleSheet.create({
	  wrapper: {
	    borderRadius: 5,
	    marginBottom: 5
	  },
	  button: {
	    backgroundColor: '#eeeeee',
	    padding: 10
	  }
	});

/***/ },

/***/ 380:
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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var Animated = React.Animated;
	var Easing = React.Easing;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var View = React.View;
	
	var UIExplorerButton = __webpack_require__(381);
	
	exports.framework = 'React';
	exports.title = 'Animated - Examples';
	exports.description = 'Animated provides a powerful ' + 'and easy-to-use API for building modern, ' + 'interactive user experiences.';
	
	exports.examples = [{
	  title: 'FadeInView',
	  description: 'Uses a simple timing animation to ' + 'bring opacity from 0 to 1 when the component ' + 'mounts.',
	  render: function render() {
	    var FadeInView = (function (_React$Component) {
	      _inherits(FadeInView, _React$Component);
	
	      function FadeInView(props) {
	        _classCallCheck(this, FadeInView);
	
	        _get(Object.getPrototypeOf(FadeInView.prototype), 'constructor', this).call(this, props);
	        this.state = {
	          fadeAnim: new Animated.Value(0) };
	      }
	
	      _createClass(FadeInView, [{
	        key: 'componentDidMount',
	        // opacity 0
	        value: function componentDidMount() {
	          Animated.timing( // Uses easing functions
	          this.state.fadeAnim, // The value to drive
	          {
	            toValue: 1, // Target
	            duration: 2000 }). // Configuration
	          start(); // Don't forget start!
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return React.createElement(
	            Animated.View,
	            // Special animatable View
	            { style: {
	                opacity: this.state.fadeAnim } },
	            this.props.children
	          );
	        }
	      }]);
	
	      return FadeInView;
	    })(React.Component);
	
	    var FadeInExample = (function (_React$Component2) {
	      _inherits(FadeInExample, _React$Component2);
	
	      function FadeInExample(props) {
	        _classCallCheck(this, FadeInExample);
	
	        _get(Object.getPrototypeOf(FadeInExample.prototype), 'constructor', this).call(this, props);
	        this.state = {
	          show: true
	        };
	      }
	
	      _createClass(FadeInExample, [{
	        key: 'render',
	        value: function render() {
	          var _this = this;
	
	          return React.createElement(
	            View,
	            null,
	            React.createElement(
	              UIExplorerButton,
	              { onPress: function () {
	                  _this.setState(function (state) {
	                    return { show: !state.show };
	                  });
	                } },
	              'Press to ',
	              this.state.show ? 'Hide' : 'Show'
	            ),
	            this.state.show && React.createElement(
	              FadeInView,
	              null,
	              React.createElement(
	                View,
	                { style: styles.content },
	                React.createElement(
	                  Text,
	                  null,
	                  'FadeInView'
	                )
	              )
	            )
	          );
	        }
	      }]);
	
	      return FadeInExample;
	    })(React.Component);
	
	    return React.createElement(FadeInExample, null);
	  }
	}, {
	  title: 'Transform Bounce',
	  description: 'One `Animated.Value` is driven by a ' + 'spring with custom constants and mapped to an ' + 'ordered set of transforms.  Each transform has ' + 'an interpolation to convert the value into the ' + 'right range and units.',
	  render: function render() {
	    var _this2 = this;
	
	    this.anim = this.anim || new Animated.Value(0);
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        UIExplorerButton,
	        { onPress: function () {
	            Animated.spring(_this2.anim, {
	              toValue: 0, // Returns to the start
	              velocity: 3, // Velocity makes it move
	              tension: -10, // Slow
	              friction: 1 }). // Oscillate a lot
	            start();
	          } },
	        'Press to Fling it!'
	      ),
	      React.createElement(
	        Animated.View,
	        {
	          style: [styles.content, {
	            transform: [// Array order matters
	            { scale: this.anim.interpolate({
	                inputRange: [0, 1],
	                outputRange: [1, 4]
	              }) }, { translateX: this.anim.interpolate({
	                inputRange: [0, 1],
	                outputRange: [0, 500]
	              }) }, { rotate: this.anim.interpolate({
	                inputRange: [0, 1],
	                outputRange: ['0deg', '360deg' // 'deg' or 'rad'
	                ]
	              }) }] }] },
	        React.createElement(
	          Text,
	          null,
	          'Transforms!'
	        )
	      )
	    );
	  }
	}, {
	  title: 'Composite Animations with Easing',
	  description: 'Sequence, parallel, delay, and ' + 'stagger with different easing functions.',
	  render: function render() {
	    var _this3 = this;
	
	    this.anims = this.anims || [1, 2, 3].map(function () {
	      return new Animated.Value(0);
	    });
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        UIExplorerButton,
	        { onPress: function () {
	            var timing = Animated.timing;
	            Animated.sequence([// One after the other
	            timing(_this3.anims[0], {
	              toValue: 200,
	              easing: Easing.linear
	            }), Animated.delay(400), // Use with sequence
	            timing(_this3.anims[0], {
	              toValue: 0,
	              easing: Easing.elastic(2) }), // Springy
	            Animated.delay(400), Animated.stagger(200, _this3.anims.map(function (anim) {
	              return timing(anim, { toValue: 200 });
	            }).concat(_this3.anims.map(function (anim) {
	              return timing(anim, { toValue: 0 });
	            }))), Animated.delay(400), Animated.parallel([Easing.inOut(Easing.quad), // Symmetric
	            Easing.back(1.5), // Goes backwards first
	            Easing.ease // Default bezier
	            ].map(function (easing, ii) {
	              return timing(_this3.anims[ii], {
	                toValue: 320, easing: easing, duration: 3000
	              });
	            })), Animated.delay(400), Animated.stagger(200, _this3.anims.map(function (anim) {
	              return timing(anim, {
	                toValue: 0,
	                easing: Easing.bounce, // Like a ball
	                duration: 2000
	              });
	            }))]).start();
	          } },
	        'Press to Animate'
	      ),
	      ['Composite', 'Easing', 'Animations!'].map(function (text, ii) {
	        return React.createElement(
	          Animated.View,
	          {
	            style: [styles.content, {
	              left: _this3.anims[ii]
	            }] },
	          React.createElement(
	            Text,
	            null,
	            text
	          )
	        );
	      })
	    );
	  }
	}, {
	  title: 'Continuous Interactions',
	  description: 'Gesture events, chaining, 2D ' + 'values, interrupting and transitioning ' + 'animations, etc.',
	  render: function render() {
	    return React.createElement(
	      Text,
	      null,
	      'Checkout the Gratuitous Animation App!'
	    );
	  }
	}];
	
	var styles = StyleSheet.create({
	  content: {
	    backgroundColor: 'deepskyblue',
	    borderWidth: 1,
	    borderColor: 'dodgerblue',
	    padding: 20,
	    margin: 20,
	    borderRadius: 10,
	    alignItems: 'center'
	  }
	});
	// Binds

/***/ },

/***/ 381:
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
	var Text = React.Text;
	var TouchableHighlight = React.TouchableHighlight;
	
	var UIExplorerButton = React.createClass({
	  displayName: 'UIExplorerButton',
	
	  propTypes: {
	    onPress: React.PropTypes.func
	  },
	  render: function render() {
	    return React.createElement(
	      TouchableHighlight,
	      {
	        onPress: this.props.onPress,
	        style: styles.button,
	        underlayColor: 'grey' },
	      React.createElement(
	        Text,
	        null,
	        this.props.children
	      )
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  button: {
	    borderColor: '#696969',
	    borderRadius: 8,
	    borderWidth: 1,
	    padding: 10,
	    margin: 5,
	    alignItems: 'center',
	    justifyContent: 'center',
	    backgroundColor: '#d3d3d3'
	  }
	});
	
	module.exports = UIExplorerButton;

/***/ },

/***/ 382:
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
	var AsyncStorage = React.AsyncStorage;
	var PickerIOS = React.PickerIOS;
	var Text = React.Text;
	var View = React.View;
	
	var PickerItemIOS = PickerIOS.Item;
	
	var STORAGE_KEY = '@AsyncStorageExample:key';
	var COLORS = ['red', 'orange', 'yellow', 'green', 'blue'];
	
	var BasicStorageExample = React.createClass({
	  displayName: 'BasicStorageExample',
	
	  componentDidMount: function componentDidMount() {
	    this._loadInitialState().done();
	  },
	
	  _loadInitialState: function _loadInitialState() {
	
	    return AsyncStorage.getItem(STORAGE_KEY).then((function (value) {
	      if (value !== null) {
	        this.setState({ selectedValue: value });
	        this._appendMessage('Recovered selection from disk: ' + value);
	      } else {
	        this._appendMessage('Initialized with no selection on disk.');
	      }
	    }).bind(this))['catch']((function (error) {
	      this._appendMessage('AsyncStorage error: ' + error.message);
	    }).bind(this));
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      selectedValue: COLORS[0],
	      messages: []
	    };
	  },
	
	  render: function render() {
	    var color = this.state.selectedValue;
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        PickerIOS,
	        {
	          selectedValue: color,
	          onValueChange: this._onValueChange },
	        COLORS.map(function (value) {
	          return React.createElement(PickerItemIOS, {
	            key: value,
	            value: value,
	            label: value
	          });
	        })
	      ),
	      React.createElement(
	        Text,
	        null,
	        'Selected: ',
	        React.createElement(
	          Text,
	          { style: { color: color } },
	          this.state.selectedValue
	        )
	      ),
	      React.createElement(
	        Text,
	        null,
	        ' '
	      ),
	      React.createElement(
	        Text,
	        { onPress: this._removeStorage },
	        'Press here to remove from storage.'
	      ),
	      React.createElement(
	        Text,
	        null,
	        ' '
	      ),
	      React.createElement(
	        Text,
	        null,
	        'Messages:'
	      ),
	      this.state.messages.map(function (m) {
	        return React.createElement(
	          Text,
	          null,
	          m
	        );
	      })
	    );
	  },
	
	  _onValueChange: function _onValueChange(selectedValue) {
	    this.setState({ selectedValue: selectedValue });
	
	    AsyncStorage.setItem(STORAGE_KEY, selectedValue).then((function () {
	      this._appendMessage('Saved selection to disk: ' + selectedValue);
	    }).bind(this))['catch']((function (error) {
	      this._appendMessage('AsyncStorage error: ' + error.message);
	    }).bind(this));
	  },
	
	  _removeStorage: function _removeStorage() {
	
	    AsyncStorage.removeItem(STORAGE_KEY).then((function () {
	      this._appendMessage('Selection removed from disk.');
	    }).bind(this))['catch']((function (error) {
	      this._appendMessage('AsyncStorage error: ' + error.message);
	    }).bind(this));
	  },
	
	  _appendMessage: function _appendMessage(message) {
	    this.setState({ messages: this.state.messages.concat(message) });
	  }
	});
	
	exports.title = 'AsyncStorage';
	exports.description = 'Asynchronous local disk storage.';
	exports.examples = [{
	  title: 'Basics - getItem, setItem, removeItem',
	  render: function render() {
	    return React.createElement(BasicStorageExample, null);
	  }
	}];

/***/ },

/***/ 383:
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
	 */
	'use strict';
	
	var React = __webpack_require__(1);
	var StyleSheet = React.StyleSheet;
	var View = React.View;
	
	var styles = StyleSheet.create({
	  box: {
	    width: 100,
	    height: 100
	  },
	  border1: {
	    borderWidth: 10,
	    borderColor: 'brown'
	  },
	  borderRadius: {
	    borderWidth: 10,
	    borderRadius: 10,
	    borderColor: 'cyan'
	  },
	  border2: {
	    borderWidth: 10,
	    borderTopColor: 'red',
	    borderRightColor: 'yellow',
	    borderBottomColor: 'green',
	    borderLeftColor: 'blue'
	  },
	  border3: {
	    borderColor: 'purple',
	    borderTopWidth: 10,
	    borderRightWidth: 20,
	    borderBottomWidth: 30,
	    borderLeftWidth: 40
	  },
	  border4: {
	    borderTopWidth: 10,
	    borderTopColor: 'red',
	    borderRightWidth: 20,
	    borderRightColor: 'yellow',
	    borderBottomWidth: 30,
	    borderBottomColor: 'green',
	    borderLeftWidth: 40,
	    borderLeftColor: 'blue'
	  },
	  border5: {
	    borderRadius: 50,
	    borderTopWidth: 10,
	    borderTopColor: 'red',
	    borderRightWidth: 20,
	    borderRightColor: 'yellow',
	    borderBottomWidth: 30,
	    borderBottomColor: 'green',
	    borderLeftWidth: 40,
	    borderLeftColor: 'blue'
	  },
	  border6: {
	    borderTopWidth: 10,
	    borderTopColor: 'red',
	    borderRightWidth: 20,
	    borderRightColor: 'yellow',
	    borderBottomWidth: 30,
	    borderBottomColor: 'green',
	    borderLeftWidth: 40,
	    borderLeftColor: 'blue',
	
	    borderTopLeftRadius: 100
	  },
	  border7: {
	    borderWidth: 10,
	    borderColor: 'rgba(255,0,0,0.5)',
	    borderRadius: 30,
	    overflow: 'hidden'
	  },
	  border7_inner: {
	    backgroundColor: 'blue',
	    width: 100,
	    height: 100
	  }
	});
	
	exports.title = 'Border';
	exports.description = 'Demonstrates some of the border styles available to Views.';
	exports.examples = [{
	  title: 'Equal-Width / Same-Color',
	  description: 'borderWidth & borderColor',
	  render: function render() {
	    return React.createElement(View, { style: [styles.box, styles.border1] });
	  }
	}, {
	  title: 'Equal-Width / Same-Color',
	  description: 'borderWidth & borderColor & borderRadius',
	  render: function render() {
	    return React.createElement(View, { style: [styles.box, styles.borderRadius] });
	  }
	}, {
	  title: 'Equal-Width Borders',
	  description: 'borderWidth & border*Color',
	  render: function render() {
	    return React.createElement(View, { style: [styles.box, styles.border2] });
	  }
	}, {
	  title: 'Same-Color Borders',
	  description: 'border*Width & borderColor',
	  render: function render() {
	    return React.createElement(View, { style: [styles.box, styles.border3] });
	  }
	}, {
	  title: 'Custom Borders',
	  description: 'border*Width & border*Color',
	  render: function render() {
	    return React.createElement(View, { style: [styles.box, styles.border4] });
	  }
	}, {
	  title: 'Custom Borders',
	  description: 'border*Width & border*Color',
	  platform: 'ios',
	  render: function render() {
	    return React.createElement(View, { style: [styles.box, styles.border5] });
	  }
	}, {
	  title: 'Custom Borders',
	  description: 'border*Width & border*Color',
	  platform: 'ios',
	  render: function render() {
	    return React.createElement(View, { style: [styles.box, styles.border6] });
	  }
	}, {
	  title: 'Custom Borders',
	  description: 'borderRadius & clipping',
	  platform: 'ios',
	  render: function render() {
	    return React.createElement(
	      View,
	      { style: [styles.box, styles.border7] },
	      React.createElement(View, { style: styles.border7_inner })
	    );
	  }
	}];

/***/ },

/***/ 384:
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
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var View = React.View;
	
	var LayoutEventExample = React.createClass({
	  displayName: 'LayoutEventExample',
	
	  getInitialState: function getInitialState() {
	    return {
	      viewStyle: {
	        margin: 20
	      }
	    };
	  },
	  animateViewLayout: function animateViewLayout() {
	    // LayoutAnimation.configureNext(
	    //   LayoutAnimation.Presets.spring,
	    //   () => {
	    //     console.log('layout animation done.');
	    //     this.addWrapText();
	    //   }
	    // );
	    this.setState({
	      viewStyle: {
	        margin: this.state.viewStyle.margin > 20 ? 20 : 60
	      }
	    }, this.addWrapText);
	  },
	  addWrapText: function addWrapText() {
	    this.setState({ extraText: '  And a bunch more text to wrap around a few lines.' }, this.changeContainer);
	  },
	  changeContainer: function changeContainer() {
	    this.setState({ containerStyle: { width: 280 } });
	  },
	  onViewLayout: function onViewLayout(e) {
	    console.log('received view layout event\n', e.nativeEvent);
	    this.setState({ viewLayout: e.nativeEvent.layout });
	  },
	  onTextLayout: function onTextLayout(e) {
	    console.log('received text layout event\n', e.nativeEvent);
	    this.setState({ textLayout: e.nativeEvent.layout });
	  },
	  onImageLayout: function onImageLayout(e) {
	    console.log('received image layout event\n', e.nativeEvent);
	    this.setState({ imageLayout: e.nativeEvent.layout });
	  },
	  render: function render() {
	    var viewStyle = [styles.view, this.state.viewStyle];
	    var textLayout = this.state.textLayout || { width: '?', height: '?' };
	    var imageLayout = this.state.imageLayout || { x: '?', y: '?' };
	    return React.createElement(
	      View,
	      { style: this.state.containerStyle },
	      React.createElement(
	        Text,
	        null,
	        'layout events are called on mount and whenever layout is recalculated. Note that the layout event will typically be received ',
	        React.createElement(
	          Text,
	          { style: styles.italicText },
	          'before'
	        ),
	        ' the layout has updated on screen, especially when using layout animations.',
	        '  ',
	        React.createElement(
	          Text,
	          { style: styles.pressText, onPress: this.animateViewLayout },
	          'Press here to change layout.'
	        )
	      ),
	      React.createElement(
	        View,
	        { ref: 'view', onLayout: this.onViewLayout, style: viewStyle },
	        React.createElement(Image, {
	          ref: 'img',
	          onLayout: this.onImageLayout,
	          style: styles.image,
	          source: { uri: 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png' }
	        }),
	        React.createElement(
	          Text,
	          null,
	          'ViewLayout: ',
	          JSON.stringify(this.state.viewLayout, null, '  ') + '\n\n'
	        ),
	        React.createElement(
	          Text,
	          { ref: 'txt', onLayout: this.onTextLayout, style: styles.text },
	          'A simple piece of text.',
	          this.state.extraText
	        ),
	        React.createElement(
	          Text,
	          null,
	          '\n',
	          'Text w/h: ',
	          textLayout.width,
	          '/',
	          textLayout.height + '\n',
	          'Image x/y: ',
	          imageLayout.x,
	          '/',
	          imageLayout.y
	        )
	      )
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  view: {
	    padding: 12,
	    borderColor: 'black',
	    borderWidth: 0.5,
	    backgroundColor: 'transparent'
	  },
	  text: {
	    alignSelf: 'flex-start',
	    borderColor: 'rgba(0, 0, 255, 0.2)',
	    borderWidth: 0.5
	  },
	  image: {
	    width: 50,
	    height: 50,
	    marginBottom: 10,
	    alignSelf: 'center'
	  },
	  pressText: {
	    fontWeight: 'bold'
	  },
	  italicText: {
	    fontStyle: 'italic'
	  }
	});
	
	exports.title = 'Layout Events';
	exports.description = 'Examples that show how Layout events can be used to ' + 'measure view size and position.';
	exports.examples = [{
	  title: 'LayoutEventExample',
	  render: function render() {
	    return React.createElement(LayoutEventExample, null);
	  }
	}];

/***/ },

/***/ 385:
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
	var Text = React.Text;
	var View = React.View;
	
	var UIExplorerBlock = __webpack_require__(351);
	var UIExplorerPage = __webpack_require__(352);
	
	var Circle = React.createClass({
	  displayName: 'Circle',
	
	  render: function render() {
	    var size = this.props.size || 20;
	    return React.createElement(View, {
	      style: {
	        borderRadius: size / 2,
	        backgroundColor: '#527fe4',
	        width: size,
	        height: size,
	        margin: 1
	      }
	    });
	  }
	});
	
	var CircleBlock = React.createClass({
	  displayName: 'CircleBlock',
	
	  render: function render() {
	    var circleStyle = {
	      flexDirection: 'row',
	      backgroundColor: '#f6f7f8',
	      borderWidth: 0.5,
	      borderColor: '#d6d7da',
	      marginBottom: 2
	    };
	    return React.createElement(
	      View,
	      { style: [circleStyle, this.props.style] },
	      this.props.children
	    );
	  }
	});
	
	var LayoutExample = React.createClass({
	  statics: {
	    title: 'Layout - Flexbox',
	    description: 'Examples of using the flexbox API to layout views.'
	  },
	
	  displayName: 'LayoutExample',
	
	  render: function render() {
	    return React.createElement(
	      UIExplorerPage,
	      { title: this.props.navigator ? null : 'Layout' },
	      React.createElement(
	        UIExplorerBlock,
	        { title: 'Flex Direction' },
	        React.createElement(
	          Text,
	          null,
	          'row'
	        ),
	        React.createElement(
	          CircleBlock,
	          { style: { flexDirection: 'row' } },
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null)
	        ),
	        React.createElement(
	          Text,
	          null,
	          'column'
	        ),
	        React.createElement(
	          CircleBlock,
	          { style: { flexDirection: 'column' } },
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null)
	        ),
	        React.createElement(
	          View,
	          { style: [styles.overlay, { position: 'absolute', top: 15, left: 160 }] },
	          React.createElement(
	            Text,
	            null,
	            'top: 15, left: 160'
	          )
	        )
	      ),
	      React.createElement(
	        UIExplorerBlock,
	        { title: 'Justify Content - Main Direction' },
	        React.createElement(
	          Text,
	          null,
	          'flex-start'
	        ),
	        React.createElement(
	          CircleBlock,
	          { style: { justifyContent: 'flex-start' } },
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null)
	        ),
	        React.createElement(
	          Text,
	          null,
	          'center'
	        ),
	        React.createElement(
	          CircleBlock,
	          { style: { justifyContent: 'center' } },
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null)
	        ),
	        React.createElement(
	          Text,
	          null,
	          'flex-end'
	        ),
	        React.createElement(
	          CircleBlock,
	          { style: { justifyContent: 'flex-end' } },
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null)
	        ),
	        React.createElement(
	          Text,
	          null,
	          'space-between'
	        ),
	        React.createElement(
	          CircleBlock,
	          { style: { justifyContent: 'space-between' } },
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null)
	        ),
	        React.createElement(
	          Text,
	          null,
	          'space-around'
	        ),
	        React.createElement(
	          CircleBlock,
	          { style: { justifyContent: 'space-around' } },
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null),
	          React.createElement(Circle, null)
	        )
	      ),
	      React.createElement(
	        UIExplorerBlock,
	        { title: 'Align Items - Other Direction' },
	        React.createElement(
	          Text,
	          null,
	          'flex-start'
	        ),
	        React.createElement(
	          CircleBlock,
	          { style: { alignItems: 'flex-start', height: 30 } },
	          React.createElement(Circle, { size: 15 }),
	          React.createElement(Circle, { size: 10 }),
	          React.createElement(Circle, { size: 20 }),
	          React.createElement(Circle, { size: 17 }),
	          React.createElement(Circle, { size: 12 }),
	          React.createElement(Circle, { size: 15 }),
	          React.createElement(Circle, { size: 10 }),
	          React.createElement(Circle, { size: 20 }),
	          React.createElement(Circle, { size: 17 }),
	          React.createElement(Circle, { size: 12 }),
	          React.createElement(Circle, { size: 15 }),
	          React.createElement(Circle, { size: 10 }),
	          React.createElement(Circle, { size: 20 }),
	          React.createElement(Circle, { size: 17 }),
	          React.createElement(Circle, { size: 12 }),
	          React.createElement(Circle, { size: 15 }),
	          React.createElement(Circle, { size: 8 })
	        ),
	        React.createElement(
	          Text,
	          null,
	          'center'
	        ),
	        React.createElement(
	          CircleBlock,
	          { style: { alignItems: 'center', height: 30 } },
	          React.createElement(Circle, { size: 15 }),
	          React.createElement(Circle, { size: 10 }),
	          React.createElement(Circle, { size: 20 }),
	          React.createElement(Circle, { size: 17 }),
	          React.createElement(Circle, { size: 12 }),
	          React.createElement(Circle, { size: 15 }),
	          React.createElement(Circle, { size: 10 }),
	          React.createElement(Circle, { size: 20 }),
	          React.createElement(Circle, { size: 17 }),
	          React.createElement(Circle, { size: 12 }),
	          React.createElement(Circle, { size: 15 }),
	          React.createElement(Circle, { size: 10 }),
	          React.createElement(Circle, { size: 20 }),
	          React.createElement(Circle, { size: 17 }),
	          React.createElement(Circle, { size: 12 }),
	          React.createElement(Circle, { size: 15 }),
	          React.createElement(Circle, { size: 8 })
	        ),
	        React.createElement(
	          Text,
	          null,
	          'flex-end'
	        ),
	        React.createElement(
	          CircleBlock,
	          { style: { alignItems: 'flex-end', height: 30 } },
	          React.createElement(Circle, { size: 15 }),
	          React.createElement(Circle, { size: 10 }),
	          React.createElement(Circle, { size: 20 }),
	          React.createElement(Circle, { size: 17 }),
	          React.createElement(Circle, { size: 12 }),
	          React.createElement(Circle, { size: 15 }),
	          React.createElement(Circle, { size: 10 }),
	          React.createElement(Circle, { size: 20 }),
	          React.createElement(Circle, { size: 17 }),
	          React.createElement(Circle, { size: 12 }),
	          React.createElement(Circle, { size: 15 }),
	          React.createElement(Circle, { size: 10 }),
	          React.createElement(Circle, { size: 20 }),
	          React.createElement(Circle, { size: 17 }),
	          React.createElement(Circle, { size: 12 }),
	          React.createElement(Circle, { size: 15 }),
	          React.createElement(Circle, { size: 8 })
	        )
	      ),
	      React.createElement(
	        UIExplorerBlock,
	        { title: 'Flex Wrap' },
	        React.createElement(
	          CircleBlock,
	          { style: { flexWrap: 'wrap' } },
	          'oooooooooooooooo'.split('').map(function (char, i) {
	            return React.createElement(Circle, { key: i });
	          })
	        )
	      )
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  overlay: {
	    backgroundColor: '#aaccff',
	    borderRadius: 10,
	    borderWidth: 0.5,
	    opacity: 0.5,
	    padding: 5
	  }
	});
	
	module.exports = LayoutExample;

/***/ },

/***/ 386:
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
	 * -weak
	 */
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(1);
	var setNativeProps = __webpack_require__(279);
	var PanResponder = React.PanResponder;
	var StyleSheet = React.StyleSheet;
	var View = React.View;
	var processColor = React.processColor;
	var Platform = React.Platform;
	
	var CIRCLE_SIZE = 80;
	var CIRCLE_COLOR = 'blue';
	var CIRCLE_HIGHLIGHT_COLOR = 'green';
	
	var PanResponderExample = React.createClass({
	  displayName: 'PanResponderExample',
	
	  statics: {
	    title: 'PanResponder Sample',
	    description: 'Shows the use of PanResponder to provide basic gesture handling.'
	  },
	
	  _panResponder: {},
	  _previousLeft: 0,
	  _previousTop: 0,
	  _circleStyles: {},
	  circle: null,
	
	  componentWillMount: function componentWillMount() {
	    this._panResponder = PanResponder.create({
	      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
	      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
	      onPanResponderGrant: this._handlePanResponderGrant,
	      onPanResponderMove: this._handlePanResponderMove,
	      onPanResponderRelease: this._handlePanResponderEnd,
	      onPanResponderTerminate: this._handlePanResponderEnd
	    });
	    this._previousLeft = 20;
	    this._previousTop = 84;
	    this._circleStyles = {
	      style: {
	        left: this._previousLeft,
	        top: this._previousTop
	      }
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._updatePosition();
	  },
	
	  render: function render() {
	    var _this = this;
	
	    return React.createElement(
	      View,
	      {
	        style: styles.container },
	      React.createElement(View, _extends({
	        ref: function (circle) {
	          _this.circle = circle;
	        },
	        style: styles.circle
	      }, this._panResponder.panHandlers))
	    );
	  },
	
	  _highlight: function _highlight() {
	
	    // this.circle && this.circle.setNativeProps({
	    //   style: {
	    //     backgroundColor: processColor(CIRCLE_HIGHLIGHT_COLOR)
	    //   }
	    // });
	
	    if (this.circle) {
	      setNativeProps(this.circle, {
	        style: {
	          backgroundColor: processColor(CIRCLE_HIGHLIGHT_COLOR)
	        }
	      });
	    }
	  },
	
	  _unHighlight: function _unHighlight() {
	    // this.circle && this.circle.setNativeProps({
	    //   style: {
	    //     backgroundColor: processColor(CIRCLE_COLOR)
	    //   }
	    // });
	
	    if (this.circle) {
	      setNativeProps(this.circle, {
	        style: {
	          backgroundColor: processColor(CIRCLE_COLOR)
	        }
	      });
	    }
	  },
	
	  _updatePosition: function _updatePosition() {
	    // this.circle && this.circle.setNativeProps(this._circleStyles);
	
	    if (this.circle) {
	      setNativeProps(this.circle, this._circleStyles);
	    }
	  },
	
	  _handleStartShouldSetPanResponder: function _handleStartShouldSetPanResponder(e, gestureState) {
	    // Should we become active when the user presses down on the circle?
	    return true;
	  },
	
	  _handleMoveShouldSetPanResponder: function _handleMoveShouldSetPanResponder(e, gestureState) {
	    // Should we become active when the user moves a touch over the circle?
	    return true;
	  },
	
	  _handlePanResponderGrant: function _handlePanResponderGrant(e, gestureState) {
	    this._highlight();
	  },
	  _handlePanResponderMove: function _handlePanResponderMove(e, gestureState) {
	    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
	    this._circleStyles.style.top = this._previousTop + gestureState.dy;
	    this._updatePosition();
	  },
	  _handlePanResponderEnd: function _handlePanResponderEnd(e, gestureState) {
	    this._unHighlight();
	    this._previousLeft += gestureState.dx;
	    this._previousTop += gestureState.dy;
	  }
	});
	
	var styles = StyleSheet.create({
	  circle: {
	    width: CIRCLE_SIZE,
	    height: CIRCLE_SIZE,
	    borderRadius: CIRCLE_SIZE / 2,
	    backgroundColor: CIRCLE_COLOR,
	    position: 'absolute',
	    left: 0,
	    top: 0
	  },
	  container: {
	    flex: 1,
	    paddingTop: 64
	  }
	});
	
	module.exports = PanResponderExample;

/***/ },

/***/ 387:
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
	var Text = React.Text;
	var View = React.View;
	
	var ExampleBox = React.createClass({
	  displayName: 'ExampleBox',
	
	  getInitialState: function getInitialState() {
	    return {
	      log: []
	    };
	  },
	  handleLog: function handleLog(msg) {
	    this.state.log = this.state.log.concat([msg]);
	  },
	  flushReactChanges: function flushReactChanges() {
	    this.forceUpdate();
	  },
	  /**
	   * Capture phase of bubbling to append separator before any of the bubbling
	   * happens.
	   */
	  handleTouchCapture: function handleTouchCapture() {
	    this.state.log = this.state.log.concat(['---']);
	  },
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(
	        View,
	        {
	          onTouchEndCapture: this.handleTouchCapture,
	          onTouchStart: this.flushReactChanges },
	        React.createElement(this.props.Component, { onLog: this.handleLog })
	      ),
	      React.createElement(
	        View,
	        {
	          style: styles.logBox },
	        React.createElement(
	          DemoText,
	          { style: styles.logText },
	          this.state.log.join('\n')
	        )
	      )
	    );
	  }
	});
	
	var NoneExample = React.createClass({
	  displayName: 'NoneExample',
	
	  render: function render() {
	    var _this = this;
	
	    return React.createElement(
	      View,
	      {
	        onTouchStart: function () {
	          return _this.props.onLog('A unspecified touched');
	        },
	        style: styles.box },
	      React.createElement(
	        DemoText,
	        { style: styles.text },
	        'A: unspecified'
	      ),
	      React.createElement(
	        View,
	        {
	          pointerEvents: 'none',
	          onTouchStart: function () {
	            return _this.props.onLog('B none touched');
	          },
	          style: [styles.box, styles.boxPassedThrough] },
	        React.createElement(
	          DemoText,
	          { style: [styles.text, styles.textPassedThrough] },
	          'B: none'
	        ),
	        React.createElement(
	          View,
	          {
	            onTouchStart: function () {
	              return _this.props.onLog('C unspecified touched');
	            },
	            style: [styles.box, styles.boxPassedThrough] },
	          React.createElement(
	            DemoText,
	            { style: [styles.text, styles.textPassedThrough] },
	            'C: unspecified'
	          )
	        )
	      )
	    );
	  }
	});
	
	/**
	 * Special demo text that makes itself untouchable so that it doesn't destroy
	 * the experiment and confuse the output.
	 */
	var DemoText = React.createClass({
	  displayName: 'DemoText',
	
	  render: function render() {
	    return React.createElement(
	      View,
	      { pointerEvents: 'none' },
	      React.createElement(
	        Text,
	        {
	          style: this.props.style },
	        this.props.children
	      )
	    );
	  }
	});
	
	var BoxNoneExample = React.createClass({
	  displayName: 'BoxNoneExample',
	
	  render: function render() {
	    var _this2 = this;
	
	    return React.createElement(
	      View,
	      {
	        onTouchStart: function () {
	          return _this2.props.onLog('A unspecified touched');
	        },
	        style: styles.box },
	      React.createElement(
	        DemoText,
	        { style: styles.text },
	        'A: unspecified'
	      ),
	      React.createElement(
	        View,
	        {
	          pointerEvents: 'box-none',
	          onTouchStart: function () {
	            return _this2.props.onLog('B box-none touched');
	          },
	          style: [styles.box, styles.boxPassedThrough] },
	        React.createElement(
	          DemoText,
	          { style: [styles.text, styles.textPassedThrough] },
	          'B: box-none'
	        ),
	        React.createElement(
	          View,
	          {
	            onTouchStart: function () {
	              return _this2.props.onLog('C unspecified touched');
	            },
	            style: styles.box },
	          React.createElement(
	            DemoText,
	            { style: styles.text },
	            'C: unspecified'
	          )
	        ),
	        React.createElement(
	          View,
	          {
	            pointerEvents: 'auto',
	            onTouchStart: function () {
	              return _this2.props.onLog('C explicitly unspecified touched');
	            },
	            style: [styles.box] },
	          React.createElement(
	            DemoText,
	            { style: [styles.text] },
	            'C: explicitly unspecified'
	          )
	        )
	      )
	    );
	  }
	});
	
	var BoxOnlyExample = React.createClass({
	  displayName: 'BoxOnlyExample',
	
	  render: function render() {
	    var _this3 = this;
	
	    return React.createElement(
	      View,
	      {
	        onTouchStart: function () {
	          return _this3.props.onLog('A unspecified touched');
	        },
	        style: styles.box },
	      React.createElement(
	        DemoText,
	        { style: styles.text },
	        'A: unspecified'
	      ),
	      React.createElement(
	        View,
	        {
	          pointerEvents: 'box-only',
	          onTouchStart: function () {
	            return _this3.props.onLog('B box-only touched');
	          },
	          style: styles.box },
	        React.createElement(
	          DemoText,
	          { style: styles.text },
	          'B: box-only'
	        ),
	        React.createElement(
	          View,
	          {
	            onTouchStart: function () {
	              return _this3.props.onLog('C unspecified touched');
	            },
	            style: [styles.box, styles.boxPassedThrough] },
	          React.createElement(
	            DemoText,
	            { style: [styles.text, styles.textPassedThrough] },
	            'C: unspecified'
	          )
	        ),
	        React.createElement(
	          View,
	          {
	            pointerEvents: 'auto',
	            onTouchStart: function () {
	              return _this3.props.onLog('C explicitly unspecified touched');
	            },
	            style: [styles.box, styles.boxPassedThrough] },
	          React.createElement(
	            DemoText,
	            { style: [styles.text, styles.textPassedThrough] },
	            'C: explicitly unspecified'
	          )
	        )
	      )
	    );
	  }
	});
	
	var exampleClasses = [{
	  Component: NoneExample,
	  title: '`none`',
	  description: '`none` causes touch events on the container and its child components to pass through to the parent container.'
	}, {
	  Component: BoxNoneExample,
	  title: '`box-none`',
	  description: '`box-none` causes touch events on the container to pass through and will only detect touch events on its child components.'
	}, {
	  Component: BoxOnlyExample,
	  title: '`box-only`',
	  description: '`box-only` causes touch events on the container\'s child components to pass through and will only detect touch events on the container itself.'
	}];
	
	var infoToExample = function infoToExample(info) {
	  return {
	    title: info.title,
	    description: info.description,
	    render: function render() {
	      return React.createElement(ExampleBox, { key: info.title, Component: info.Component });
	    }
	  };
	};
	
	var styles = StyleSheet.create({
	  text: {
	    fontSize: 10,
	    color: '#5577cc'
	  },
	  textPassedThrough: {
	    color: '#88aadd'
	  },
	  box: {
	    backgroundColor: '#aaccff',
	    borderWidth: 1,
	    borderColor: '#7799cc',
	    padding: 10,
	    margin: 5
	  },
	  boxPassedThrough: {
	    borderColor: '#99bbee'
	  },
	  logText: {
	    fontSize: 9
	  },
	  logBox: {
	    padding: 20,
	    margin: 10,
	    borderWidth: 0.5,
	    borderColor: '#f0f0f0',
	    backgroundColor: '#f9f9f9'
	  },
	  bottomSpacer: {
	    marginBottom: 100
	  }
	});
	
	exports.framework = 'React';
	exports.title = 'Pointer Events';
	exports.description = 'Demonstrates the use of the pointerEvents prop of a ' + 'View to control how touches should be handled.';
	exports.examples = exampleClasses.map(infoToExample);

/***/ },

/***/ 388:
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
	var AlertIOS = React.AlertIOS;
	var Platform = React.Platform;
	var ToastAndroid = React.ToastAndroid;
	var View = React.View;
	
	var TimerMixin = __webpack_require__(284);
	var UIExplorerButton = __webpack_require__(381);
	
	var TimerTester = React.createClass({
	  displayName: 'TimerTester',
	
	  mixins: [TimerMixin],
	
	  _ii: 0,
	  _iters: 0,
	  _start: 0,
	  _timerFn: null,
	  _handle: null,
	
	  render: function render() {
	    var args = 'fn' + (this.props.dt !== undefined ? ', ' + this.props.dt : '');
	    return React.createElement(
	      UIExplorerButton,
	      { onPress: this._run },
	      'Measure: ',
	      this.props.type,
	      '(',
	      args,
	      ') - ',
	      this._ii || 0
	    );
	  },
	
	  _run: function _run() {
	    var _this = this;
	
	    if (!this._start) {
	      var d = new Date();
	      this._start = d.getTime();
	      this._iters = 100;
	      this._ii = 0;
	      if (this.props.type === 'setTimeout') {
	        if (this.props.dt < 1) {
	          this._iters = 5000;
	        } else if (this.props.dt > 20) {
	          this._iters = 10;
	        }
	        this._timerFn = function () {
	          return _this.setTimeout(_this._run, _this.props.dt);
	        };
	      } else if (this.props.type === 'requestAnimationFrame') {
	        this._timerFn = function () {
	          return _this.requestAnimationFrame(_this._run);
	        };
	      } else if (this.props.type === 'setImmediate') {
	        this._iters = 5000;
	        this._timerFn = function () {
	          return _this.setImmediate(_this._run);
	        };
	      } else if (this.props.type === 'setInterval') {
	        this._iters = 30; // Only used for forceUpdate periodicidy
	        this._timerFn = null;
	        this._handle = this.setInterval(this._run, this.props.dt);
	      }
	    }
	    if (this._ii >= this._iters && !this._handle) {
	      var d = new Date();
	      var e = d.getTime() - this._start;
	      var msg = 'Finished ' + this._ii + ' ' + this.props.type + ' calls.\n' + 'Elapsed time: ' + e + ' ms\n' + e / this._ii + ' ms / iter';
	      console.log(msg);
	      if (Platform.OS === 'ios') {
	        AlertIOS.alert(msg);
	      } else if (Platform.OS === 'android') {
	        ToastAndroid.show(msg, ToastAndroid.SHORT);
	      }
	      this._start = 0;
	      this.forceUpdate(function () {
	        _this._ii = 0;
	      });
	      return;
	    }
	    this._ii++;
	    // Only re-render occasionally so we don't slow down timers.
	    if (this._ii % (this._iters / 5) === 0) {
	      this.forceUpdate();
	    }
	    this._timerFn && this._timerFn();
	  },
	
	  clear: function clear() {
	    this.clearInterval(this._handle); // invalid handles are ignored
	    if (this._handle) {
	      // Configure things so we can do a final run to update UI and reset state.
	      this._handle = null;
	      this._iters = this._ii;
	      this._run();
	    }
	  }
	});
	
	exports.framework = 'React';
	exports.title = 'Timers, TimerMixin';
	exports.description = 'The TimerMixin provides timer functions for executing ' + 'code in the future that are safely cleaned up when the component unmounts.';
	
	exports.examples = [{
	  title: 'this.setTimeout(fn, t)',
	  description: 'Execute function fn t milliseconds in the future.  If ' + 't === 0, it will be enqueued immediately in the next event loop.  ' + 'Larger values will fire on the closest frame.',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(TimerTester, { type: 'setTimeout', dt: 0 }),
	      React.createElement(TimerTester, { type: 'setTimeout', dt: 1 }),
	      React.createElement(TimerTester, { type: 'setTimeout', dt: 100 })
	    );
	  }
	}, {
	  title: 'this.requestAnimationFrame(fn)',
	  description: 'Execute function fn on the next frame.',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(TimerTester, { type: 'requestAnimationFrame' })
	    );
	  }
	}, {
	  title: 'this.setImmediate(fn)',
	  description: 'Execute function fn at the end of the current JS event loop.',
	  render: function render() {
	    return React.createElement(
	      View,
	      null,
	      React.createElement(TimerTester, { type: 'setImmediate' })
	    );
	  }
	}, {
	  title: 'this.setInterval(fn, t)',
	  description: 'Execute function fn every t milliseconds until cancelled ' + 'or component is unmounted.',
	  render: function render() {
	    var IntervalExample = React.createClass({
	      displayName: 'IntervalExample',
	
	      getInitialState: function getInitialState() {
	        return {
	          showTimer: true
	        };
	      },
	
	      render: function render() {
	        var _this2 = this;
	
	        if (this.state.showTimer) {
	          var timer = [React.createElement(TimerTester, { ref: 'interval', dt: 25, type: 'setInterval' }), React.createElement(
	            UIExplorerButton,
	            { onPress: function () {
	                return _this2.refs.interval.clear();
	              } },
	            'Clear interval'
	          )];
	          var toggleText = 'Unmount timer';
	        } else {
	          var timer = null;
	          var toggleText = 'Mount new timer';
	        }
	        return React.createElement(
	          View,
	          null,
	          timer,
	          React.createElement(
	            UIExplorerButton,
	            { onPress: this._toggleTimer },
	            toggleText
	          )
	        );
	      },
	
	      _toggleTimer: function _toggleTimer() {
	        this.setState({ showTimer: !this.state.showTimer });
	      }
	    });
	    return React.createElement(IntervalExample, null);
	  }
	}];

/***/ },

/***/ 389:
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
	var Text = React.Text;
	var ToastAndroid = React.ToastAndroid;
	var TouchableWithoutFeedback = React.TouchableWithoutFeedback;
	
	var UIExplorerBlock = __webpack_require__(351);
	var UIExplorerPage = __webpack_require__(352);
	
	var ToastExample = React.createClass({
	  displayName: 'ToastExample',
	
	  statics: {
	    title: 'Toast Example',
	    description: 'Example that demonstrates the use of an Android Toast to provide feedback.'
	  },
	
	  getInitialState: function getInitialState() {
	    return {};
	  },
	
	  render: function render() {
	    return React.createElement(
	      UIExplorerPage,
	      { title: 'ToastAndroid' },
	      React.createElement(
	        UIExplorerBlock,
	        { title: 'Simple toast' },
	        React.createElement(
	          TouchableWithoutFeedback,
	          {
	            onPress: function () {
	              return ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT);
	            } },
	          React.createElement(
	            Text,
	            { style: styles.text },
	            'Click me.'
	          )
	        )
	      ),
	      React.createElement(
	        UIExplorerBlock,
	        { title: 'Toast with long duration' },
	        React.createElement(
	          TouchableWithoutFeedback,
	          {
	            onPress: function () {
	              return ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG);
	            } },
	          React.createElement(
	            Text,
	            { style: styles.text },
	            'Click me too.'
	          )
	        )
	      )
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  text: {
	    color: 'black'
	  }
	});
	
	module.exports = ToastExample;

/***/ }

});
//# sourceMappingURL=uiexplorer.js.map