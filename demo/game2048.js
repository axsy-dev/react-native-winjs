webpackJsonp([0],{

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
	 * @providesModule Game2048
	 * 
	 */
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var AppRegistry = React.AppRegistry;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var View = React.View;
	var Platform = React.Platform;
	
	function getPageXY(event) {
	  if (Platform.OS == 'winjs') {
	    var touch = event.nativeEvent.changedTouches[0];
	    return {
	      pageX: touch.pageX,
	      pageY: touch.pageY
	    };
	  } else {
	    return {
	      pageX: event.nativeEvent.pageX,
	      pageY: event.nativeEvent.pageY
	    };
	  }
	}
	
	var Animated = __webpack_require__(173);
	var GameBoard = __webpack_require__(337);
	var TouchableBounce = __webpack_require__(338);
	
	var BOARD_PADDING = 3;
	var CELL_MARGIN = 4;
	var CELL_SIZE = 60;
	
	var Cell = (function (_React$Component) {
	  _inherits(Cell, _React$Component);
	
	  function Cell() {
	    _classCallCheck(this, Cell);
	
	    _get(Object.getPrototypeOf(Cell.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Cell, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(View, { style: styles.cell });
	    }
	  }]);
	
	  return Cell;
	})(React.Component);
	
	var Board = (function (_React$Component2) {
	  _inherits(Board, _React$Component2);
	
	  function Board() {
	    _classCallCheck(this, Board);
	
	    _get(Object.getPrototypeOf(Board.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Board, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        View,
	        { style: styles.board },
	        React.createElement(
	          View,
	          { style: styles.row },
	          React.createElement(Cell, null),
	          React.createElement(Cell, null),
	          React.createElement(Cell, null),
	          React.createElement(Cell, null)
	        ),
	        React.createElement(
	          View,
	          { style: styles.row },
	          React.createElement(Cell, null),
	          React.createElement(Cell, null),
	          React.createElement(Cell, null),
	          React.createElement(Cell, null)
	        ),
	        React.createElement(
	          View,
	          { style: styles.row },
	          React.createElement(Cell, null),
	          React.createElement(Cell, null),
	          React.createElement(Cell, null),
	          React.createElement(Cell, null)
	        ),
	        React.createElement(
	          View,
	          { style: styles.row },
	          React.createElement(Cell, null),
	          React.createElement(Cell, null),
	          React.createElement(Cell, null),
	          React.createElement(Cell, null)
	        ),
	        this.props.children
	      );
	    }
	  }]);
	
	  return Board;
	})(React.Component);
	
	var Tile = (function (_React$Component3) {
	  _inherits(Tile, _React$Component3);
	
	  _createClass(Tile, null, [{
	    key: '_getPosition',
	    value: function _getPosition(index) {
	      return BOARD_PADDING + (index * (CELL_SIZE + CELL_MARGIN * 2) + CELL_MARGIN);
	    }
	  }]);
	
	  function Tile(props) {
	    _classCallCheck(this, Tile);
	
	    _get(Object.getPrototypeOf(Tile.prototype), 'constructor', this).call(this, props);
	
	    var tile = this.props.tile;
	
	    this.state = {
	      opacity: new Animated.Value(0),
	      top: new Animated.Value(Tile._getPosition(tile.toRow())),
	      left: new Animated.Value(Tile._getPosition(tile.toColumn()))
	    };
	  }
	
	  _createClass(Tile, [{
	    key: 'calculateOffset',
	    value: function calculateOffset() {
	      var tile = this.props.tile;
	
	      var offset = {
	        top: this.state.top,
	        left: this.state.left,
	        opacity: this.state.opacity
	      };
	
	      if (tile.isNew()) {
	        Animated.timing(this.state.opacity, {
	          duration: 100,
	          toValue: 1
	        }).start();
	      } else {
	        Animated.parallel([Animated.timing(offset.top, {
	          duration: 100,
	          toValue: Tile._getPosition(tile.toRow())
	        }), Animated.timing(offset.left, {
	          duration: 100,
	          toValue: Tile._getPosition(tile.toColumn())
	        })]).start();
	      }
	      return offset;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tile = this.props.tile;
	
	      var tileStyles = [styles.tile, styles['tile' + tile.value], this.calculateOffset()];
	
	      var textStyles = [styles.value, tile.value > 4 && styles.whiteText, tile.value > 100 && styles.threeDigits, tile.value > 1000 && styles.fourDigits];
	
	      return React.createElement(
	        Animated.View,
	        { style: tileStyles },
	        React.createElement(
	          Text,
	          { style: textStyles },
	          tile.value
	        )
	      );
	    }
	  }]);
	
	  return Tile;
	})(React.Component);
	
	var GameEndOverlay = (function (_React$Component4) {
	  _inherits(GameEndOverlay, _React$Component4);
	
	  function GameEndOverlay() {
	    _classCallCheck(this, GameEndOverlay);
	
	    _get(Object.getPrototypeOf(GameEndOverlay.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(GameEndOverlay, [{
	    key: 'render',
	    value: function render() {
	      var board = this.props.board;
	
	      if (!board.hasWon() && !board.hasLost()) {
	        return React.createElement(View, null);
	      }
	
	      var message = board.hasWon() ? 'Good Job!' : 'Game Over';
	
	      return React.createElement(
	        View,
	        { style: styles.overlay },
	        React.createElement(
	          Text,
	          { style: styles.overlayMessage },
	          message
	        ),
	        React.createElement(
	          TouchableBounce,
	          { onPress: this.props.onRestart, style: styles.tryAgain },
	          React.createElement(
	            Text,
	            { style: styles.tryAgainText },
	            'Try Again?'
	          )
	        )
	      );
	    }
	  }]);
	
	  return GameEndOverlay;
	})(React.Component);
	
	var Game2048 = (function (_React$Component5) {
	  _inherits(Game2048, _React$Component5);
	
	  function Game2048(props) {
	    _classCallCheck(this, Game2048);
	
	    _get(Object.getPrototypeOf(Game2048.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      board: new GameBoard()
	    };
	    this.startX = 0;
	    this.startY = 0;
	  }
	
	  _createClass(Game2048, [{
	    key: 'restartGame',
	    value: function restartGame() {
	      this.setState({ board: new GameBoard() });
	    }
	  }, {
	    key: 'handleTouchStart',
	    value: function handleTouchStart(event) {
	      if (this.state.board.hasWon()) {
	        return;
	      }
	
	      var touch = getPageXY(event);
	      this.startX = touch.pageX;
	      this.startY = touch.pageY;
	    }
	  }, {
	    key: 'handleTouchEnd',
	    value: function handleTouchEnd(event) {
	      if (this.state.board.hasWon()) {
	        return;
	      }
	
	      var touch = getPageXY(event);
	      var deltaX = touch.pageX - this.startX;
	      var deltaY = touch.pageY - this.startY;
	
	      var direction = -1;
	      if (Math.abs(deltaX) > 3 * Math.abs(deltaY) && Math.abs(deltaX) > 30) {
	        direction = deltaX > 0 ? 2 : 0;
	      } else if (Math.abs(deltaY) > 3 * Math.abs(deltaX) && Math.abs(deltaY) > 30) {
	        direction = deltaY > 0 ? 3 : 1;
	      }
	
	      if (direction !== -1) {
	        this.setState({ board: this.state.board.move(direction) });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var tiles = this.state.board.tiles.filter(function (tile) {
	        return tile.value;
	      }).map(function (tile) {
	        return React.createElement(Tile, { ref: tile.id, key: tile.id, tile: tile });
	      });
	
	      return React.createElement(
	        View,
	        {
	          style: styles.container,
	          onTouchStart: function (event) {
	            return _this.handleTouchStart(event);
	          },
	          onTouchEnd: function (event) {
	            return _this.handleTouchEnd(event);
	          } },
	        React.createElement(
	          Board,
	          null,
	          tiles
	        ),
	        React.createElement(GameEndOverlay, { board: this.state.board, onRestart: function () {
	            return _this.restartGame();
	          } })
	      );
	    }
	  }]);
	
	  return Game2048;
	})(React.Component);
	
	var styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center'
	  },
	  board: {
	    padding: BOARD_PADDING,
	    backgroundColor: '#bbaaaa',
	    borderRadius: 5
	  },
	  overlay: {
	    position: 'absolute',
	    top: 0,
	    bottom: 0,
	    left: 0,
	    right: 0,
	    backgroundColor: 'rgba(221, 221, 221, 0.5)',
	    flex: 1,
	    flexDirection: 'column',
	    justifyContent: 'center',
	    alignItems: 'center'
	  },
	  overlayMessage: {
	    fontSize: 40,
	    marginBottom: 20
	  },
	  tryAgain: {
	    backgroundColor: '#887766',
	    padding: 20,
	    borderRadius: 5
	  },
	  tryAgainText: {
	    color: '#ffffff',
	    fontSize: 20,
	    fontWeight: '500'
	  },
	  cell: {
	    width: CELL_SIZE,
	    height: CELL_SIZE,
	    borderRadius: 5,
	    backgroundColor: '#ddccbb',
	    margin: CELL_MARGIN
	  },
	  row: {
	    flexDirection: 'row'
	  },
	  tile: {
	    position: 'absolute',
	    width: CELL_SIZE,
	    height: CELL_SIZE,
	    backgroundColor: '#ddccbb',
	    borderRadius: 5,
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center'
	  },
	  value: {
	    fontSize: 24,
	    color: '#776666',
	    fontFamily: 'Verdana',
	    fontWeight: '500'
	  },
	  tile2: {
	    backgroundColor: '#eeeeee'
	  },
	  tile4: {
	    backgroundColor: '#eeeecc'
	  },
	  tile8: {
	    backgroundColor: '#ffbb88'
	  },
	  tile16: {
	    backgroundColor: '#ff9966'
	  },
	  tile32: {
	    backgroundColor: '#ff7755'
	  },
	  tile64: {
	    backgroundColor: '#ff5533'
	  },
	  tile128: {
	    backgroundColor: '#eecc77'
	  },
	  tile256: {
	    backgroundColor: '#eecc66'
	  },
	  tile512: {
	    backgroundColor: '#eecc55'
	  },
	  tile1024: {
	    backgroundColor: '#eecc33'
	  },
	  tile2048: {
	    backgroundColor: '#eecc22'
	  },
	  whiteText: {
	    color: '#ffffff'
	  },
	  threeDigits: {
	    fontSize: 20
	  },
	  fourDigits: {
	    fontSize: 18
	  }
	});
	
	AppRegistry.registerComponent('Game2048', function () {
	  return Game2048;
	});
	
	if (Platform.OS == 'winjs') {
	  var app = document.createElement('div');
	  document.body.appendChild(app);
	
	  AppRegistry.runApplication('Game2048', {
	    rootTag: app
	  });
	}
	
	module.exports = Game2048;

/***/ },

/***/ 337:
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
	 * @providesModule GameBoard
	 * 
	 */
	'use strict';
	
	// NB: Taken straight from: https://github.com/IvanVergiliev/2048-react/blob/master/src/board.js
	//     with no modificiation except to format it for CommonJS and fix lint/flow errors
	
	var rotateLeft = function rotateLeft(matrix) {
	  var rows = matrix.length;
	  var columns = matrix[0].length;
	  var res = [];
	  for (var row = 0; row < rows; ++row) {
	    res.push([]);
	    for (var column = 0; column < columns; ++column) {
	      res[row][column] = matrix[column][columns - row - 1];
	    }
	  }
	  return res;
	};
	
	var Tile = function Tile(value, row, column) {
	  this.value = value || 0;
	  this.row = row || -1;
	
	  this.column = column || -1;
	  this.oldRow = -1;
	  this.oldColumn = -1;
	  this.markForDeletion = false;
	  this.mergedInto = null;
	  this.id = Tile.id++;
	};
	
	Tile.id = 0;
	
	Tile.prototype.moveTo = function (row, column) {
	  this.oldRow = this.row;
	  this.oldColumn = this.column;
	  this.row = row;
	  this.column = column;
	};
	
	Tile.prototype.isNew = function () {
	  return this.oldRow === -1 && !this.mergedInto;
	};
	
	Tile.prototype.hasMoved = function () {
	  return this.fromRow() !== -1 && (this.fromRow() !== this.toRow() || this.fromColumn() !== this.toColumn()) || this.mergedInto;
	};
	
	Tile.prototype.fromRow = function () {
	  return this.mergedInto ? this.row : this.oldRow;
	};
	
	Tile.prototype.fromColumn = function () {
	  return this.mergedInto ? this.column : this.oldColumn;
	};
	
	Tile.prototype.toRow = function () {
	  return this.mergedInto ? this.mergedInto.row : this.row;
	};
	
	Tile.prototype.toColumn = function () {
	  return this.mergedInto ? this.mergedInto.column : this.column;
	};
	
	var Board = function Board() {
	  this.tiles = [];
	  this.cells = [];
	  for (var i = 0; i < Board.size; ++i) {
	    this.cells[i] = [this.addTile(), this.addTile(), this.addTile(), this.addTile()];
	  }
	  this.addRandomTile();
	  this.setPositions();
	  this.won = false;
	};
	
	Board.prototype.addTile = function () {
	  var res = new Tile();
	  Tile.apply(res, arguments);
	  this.tiles.push(res);
	  return res;
	};
	
	Board.size = 4;
	
	Board.prototype.moveLeft = function () {
	  var hasChanged = false;
	  for (var row = 0; row < Board.size; ++row) {
	    var currentRow = this.cells[row].filter(function (tile) {
	      return tile.value !== 0;
	    });
	    var resultRow = [];
	    for (var target = 0; target < Board.size; ++target) {
	      var targetTile = currentRow.length ? currentRow.shift() : this.addTile();
	      if (currentRow.length > 0 && currentRow[0].value === targetTile.value) {
	        var tile1 = targetTile;
	        targetTile = this.addTile(targetTile.value);
	        tile1.mergedInto = targetTile;
	        var tile2 = currentRow.shift();
	        tile2.mergedInto = targetTile;
	        targetTile.value += tile2.value;
	      }
	      resultRow[target] = targetTile;
	      this.won = this.won || targetTile.value === 2048;
	      hasChanged = hasChanged || targetTile.value !== this.cells[row][target].value;
	    }
	    this.cells[row] = resultRow;
	  }
	  return hasChanged;
	};
	
	Board.prototype.setPositions = function () {
	  this.cells.forEach(function (row, rowIndex) {
	    row.forEach(function (tile, columnIndex) {
	      tile.oldRow = tile.row;
	      tile.oldColumn = tile.column;
	      tile.row = rowIndex;
	      tile.column = columnIndex;
	      tile.markForDeletion = false;
	    });
	  });
	};
	
	Board.fourProbability = 0.1;
	
	Board.prototype.addRandomTile = function () {
	  var emptyCells = [];
	  for (var r = 0; r < Board.size; ++r) {
	    for (var c = 0; c < Board.size; ++c) {
	      if (this.cells[r][c].value === 0) {
	        emptyCells.push({ r: r, c: c });
	      }
	    }
	  }
	  var index = Math.floor(Math.random() * emptyCells.length);
	  var cell = emptyCells[index];
	  var newValue = Math.random() < Board.fourProbability ? 4 : 2;
	  this.cells[cell.r][cell.c] = this.addTile(newValue);
	};
	
	Board.prototype.move = function (direction) {
	  // 0 -> left, 1 -> up, 2 -> right, 3 -> down
	  this.clearOldTiles();
	  for (var i = 0; i < direction; ++i) {
	    this.cells = rotateLeft(this.cells);
	  }
	  var hasChanged = this.moveLeft();
	  for (var i = direction; i < 4; ++i) {
	    this.cells = rotateLeft(this.cells);
	  }
	  if (hasChanged) {
	    this.addRandomTile();
	  }
	  this.setPositions();
	  return this;
	};
	
	Board.prototype.clearOldTiles = function () {
	  this.tiles = this.tiles.filter(function (tile) {
	    return tile.markForDeletion === false;
	  });
	  this.tiles.forEach(function (tile) {
	    tile.markForDeletion = true;
	  });
	};
	
	Board.prototype.hasWon = function () {
	  return this.won;
	};
	
	Board.deltaX = [-1, 0, 1, 0];
	Board.deltaY = [0, -1, 0, 1];
	
	Board.prototype.hasLost = function () {
	  var canMove = false;
	  for (var row = 0; row < Board.size; ++row) {
	    for (var column = 0; column < Board.size; ++column) {
	      canMove = canMove || this.cells[row][column].value === 0;
	      for (var dir = 0; dir < 4; ++dir) {
	        var newRow = row + Board.deltaX[dir];
	        var newColumn = column + Board.deltaY[dir];
	        if (newRow < 0 || newRow >= Board.size || newColumn < 0 || newColumn >= Board.size) {
	          continue;
	        }
	        canMove = canMove || this.cells[row][column].value === this.cells[newRow][newColumn].value;
	      }
	    }
	  }
	  return !canMove;
	};
	
	module.exports = Board;

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
	 * All rights reserved.
	 *
	 * Copyright (c) 2015, Facebook, Inc.  All rights reserved.
	 *
	 * @providesModule ReactTouchableBounce
	 */
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ReactAnimated = __webpack_require__(173);
	
	var _ReactAnimated2 = _interopRequireDefault(_ReactAnimated);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ReactTouchable = __webpack_require__(237);
	
	/**
	 * When the scroll view is disabled, this defines how far your touch may move
	 * off of the button, before deactivating the button. Once deactivated, try
	 * moving it back and you'll see that the button is once again reactivated!
	 * Move it back and forth several times while the scroll view is disabled.
	 */
	var PRESS_RECT_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };
	/**
	 * Example of using the `TouchableMixin` to play well with other responder
	 * locking views including `ScrollView`. `TouchableMixin` provides touchable
	 * hooks (`this.touchableHandle*`) that we forward events to. In turn,
	 * `TouchableMixin` expects us to implement some abstract methods to handle
	 * interesting interactions such as `handleTouchablePress`.
	 */
	var TouchableBounce = _react2['default'].createClass({
	  displayName: 'TouchableBounce',
	
	  mixins: [_ReactTouchable.Mixin],
	
	  propTypes: {
	    onPress: _react2['default'].PropTypes.func,
	    onPressIn: _react2['default'].PropTypes.func,
	    onPressOut: _react2['default'].PropTypes.func,
	    // The function passed takes a callback to start the animation which should
	    // be run after this onPress handler is done. You can use this (for example)
	    // to update UI before starting the animation.
	    onPressWithCompletion: _react2['default'].PropTypes.func,
	    // the function passed is called after the animation is complete
	    onPressAnimationComplete: _react2['default'].PropTypes.func
	  },
	
	  getInitialState: function getInitialState() {
	    return _extends({}, this.touchableGetInitialState(), {
	      scale: new _ReactAnimated2['default'].Value(1)
	    });
	  },
	
	  bounceTo: function bounceTo(value, velocity, bounciness, callback) {
	    _ReactAnimated2['default'].spring(this.state.scale, {
	      toValue: value,
	      velocity: velocity,
	      bounciness: bounciness
	    }).start(callback);
	  },
	
	  /**
	   * `Touchable.Mixin` self callbacks. The mixin will invoke these if they are
	   * defined on your component.
	   */
	  touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
	    this.bounceTo(0.93, 0.1, 0);
	    this.props.onPressIn && this.props.onPressIn(e);
	  },
	
	  touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
	    this.bounceTo(1, 0.4, 0);
	    this.props.onPressOut && this.props.onPressOut(e);
	  },
	
	  touchableHandlePress: function touchableHandlePress(e) {
	    var _this = this;
	
	    var onPressWithCompletion = this.props.onPressWithCompletion;
	    if (onPressWithCompletion) {
	      onPressWithCompletion(function () {
	        _this.state.scale.setValue(0.93);
	        _this.bounceTo(1, 10, 10, _this.props.onPressAnimationComplete);
	      });
	      return;
	    }
	
	    this.bounceTo(1, 10, 10, this.props.onPressAnimationComplete);
	    this.props.onPress && this.props.onPress(e);
	  },
	
	  touchableGetPressRectOffset: function touchableGetPressRectOffset() {
	    return PRESS_RECT_OFFSET; // Always make sure to predeclare a constant!
	  },
	
	  touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
	    return 0;
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      _ReactAnimated2['default'].View,
	      {
	        style: [{ transform: [{ scale: this.state.scale }] }, this.props.style],
	        accessible: true,
	        testID: this.props.testID,
	        onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
	        onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
	        onResponderGrant: this.touchableHandleResponderGrant,
	        onResponderMove: this.touchableHandleResponderMove,
	        onResponderRelease: this.touchableHandleResponderRelease,
	        onResponderTerminate: this.touchableHandleResponderTerminate },
	      this.props.children
	    );
	  }
	});
	
	module.exports = TouchableBounce;

/***/ }

});
//# sourceMappingURL=game2048.js.map