webpackJsonp([3],[
/* 0 */
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
	 * @providesModule TicTacToeApp
	 * 
	 */
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var React = __webpack_require__(1);
	var AppRegistry = React.AppRegistry;
	var StyleSheet = React.StyleSheet;
	var Text = React.Text;
	var TouchableHighlight = React.TouchableHighlight;
	var View = React.View;
	var Platform = React.Platform;
	
	var Board = (function () {
	  function Board() {
	    _classCallCheck(this, Board);
	
	    var size = 3;
	    var grid = Array(size);
	    for (var i = 0; i < size; i++) {
	      var row = Array(size);
	      for (var j = 0; j < size; j++) {
	        row[j] = 0;
	      }
	      grid[i] = row;
	    }
	    this.grid = grid;
	
	    this.turn = 1;
	  }
	
	  _createClass(Board, [{
	    key: 'mark',
	    value: function mark(row, col, player) {
	      this.grid[row][col] = player;
	      return this;
	    }
	  }, {
	    key: 'hasMark',
	    value: function hasMark(row, col) {
	      return this.grid[row][col] !== 0;
	    }
	  }, {
	    key: 'winner',
	    value: function winner() {
	      for (var i = 0; i < 3; i++) {
	        if (this.grid[i][0] !== 0 && this.grid[i][0] === this.grid[i][1] && this.grid[i][0] === this.grid[i][2]) {
	          return this.grid[i][0];
	        }
	      }
	
	      for (var i = 0; i < 3; i++) {
	        if (this.grid[0][i] !== 0 && this.grid[0][i] === this.grid[1][i] && this.grid[0][i] === this.grid[2][i]) {
	          return this.grid[0][i];
	        }
	      }
	
	      if (this.grid[0][0] !== 0 && this.grid[0][0] === this.grid[1][1] && this.grid[0][0] === this.grid[2][2]) {
	        return this.grid[0][0];
	      }
	
	      if (this.grid[0][2] !== 0 && this.grid[0][2] === this.grid[1][1] && this.grid[0][2] === this.grid[2][0]) {
	        return this.grid[0][2];
	      }
	
	      return null;
	    }
	  }, {
	    key: 'tie',
	    value: function tie() {
	      for (var i = 0; i < 3; i++) {
	        for (var j = 0; j < 3; j++) {
	          if (this.grid[i][j] === 0) {
	            return false;
	          }
	        }
	      }
	
	      return this.winner() === null;
	    }
	  }]);
	
	  return Board;
	})();
	
	var Cell = React.createClass({
	  displayName: 'Cell',
	
	  cellStyle: function cellStyle() {
	    switch (this.props.player) {
	      case 1:
	        return styles.cellX;
	      case 2:
	        return styles.cellO;
	      default:
	        return null;
	    }
	  },
	
	  textStyle: function textStyle() {
	    switch (this.props.player) {
	      case 1:
	        return styles.cellTextX;
	      case 2:
	        return styles.cellTextO;
	      default:
	        return {};
	    }
	  },
	
	  textContents: function textContents() {
	    switch (this.props.player) {
	      case 1:
	        return 'X';
	      case 2:
	        return 'O';
	      default:
	        return '';
	    }
	  },
	
	  render: function render() {
	    return React.createElement(
	      TouchableHighlight,
	      {
	        onPress: this.props.onPress,
	        underlayColor: 'transparent',
	        activeOpacity: 0.5 },
	      React.createElement(
	        View,
	        { style: [styles.cell, this.cellStyle()] },
	        React.createElement(
	          Text,
	          { style: [styles.cellText, this.textStyle()] },
	          this.textContents()
	        )
	      )
	    );
	  }
	});
	
	var GameEndOverlay = React.createClass({
	  displayName: 'GameEndOverlay',
	
	  render: function render() {
	    var board = this.props.board;
	
	    var tie = board.tie();
	    var winner = board.winner();
	    if (!winner && !tie) {
	      return React.createElement(View, null);
	    }
	
	    var message;
	    if (tie) {
	      message = 'It\'s a tie!';
	    } else {
	      message = (winner === 1 ? 'X' : 'O') + ' wins!';
	    }
	
	    return React.createElement(
	      View,
	      { style: styles.overlay },
	      React.createElement(
	        Text,
	        { style: styles.overlayMessage },
	        message
	      ),
	      React.createElement(
	        TouchableHighlight,
	        {
	          onPress: this.props.onRestart,
	          underlayColor: 'transparent',
	          activeOpacity: 0.5 },
	        React.createElement(
	          View,
	          { style: styles.newGame },
	          React.createElement(
	            Text,
	            { style: styles.newGameText },
	            'New Game'
	          )
	        )
	      )
	    );
	  }
	});
	
	var TicTacToeApp = React.createClass({
	  displayName: 'TicTacToeApp',
	
	  getInitialState: function getInitialState() {
	    return { board: new Board(), player: 1 };
	  },
	
	  restartGame: function restartGame() {
	    this.setState(this.getInitialState());
	  },
	
	  nextPlayer: function nextPlayer() {
	    return this.state.player === 1 ? 2 : 1;
	  },
	
	  handleCellPress: function handleCellPress(row, col) {
	    if (this.state.board.hasMark(row, col)) {
	      return;
	    }
	
	    this.setState({
	      board: this.state.board.mark(row, col, this.state.player),
	      player: this.nextPlayer()
	    });
	  },
	
	  render: function render() {
	    var _this = this;
	
	    var rows = this.state.board.grid.map(function (cells, row) {
	      return React.createElement(
	        View,
	        { key: 'row' + row, style: styles.row },
	        cells.map(function (player, col) {
	          return React.createElement(Cell, {
	            key: 'cell' + col,
	            player: player,
	            onPress: _this.handleCellPress.bind(_this, row, col)
	          });
	        })
	      );
	    });
	
	    return React.createElement(
	      View,
	      { style: styles.container },
	      React.createElement(
	        Text,
	        { style: styles.title },
	        'EXTREME T3'
	      ),
	      React.createElement(
	        View,
	        { style: styles.board },
	        rows
	      ),
	      React.createElement(GameEndOverlay, {
	        board: this.state.board,
	        onRestart: this.restartGame
	      })
	    );
	  }
	});
	
	var styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: 'white'
	  },
	  title: {
	    fontFamily: 'Chalkduster',
	    fontSize: 39,
	    marginBottom: 20
	  },
	  board: {
	    padding: 5,
	    backgroundColor: '#47525d',
	    borderRadius: 10
	  },
	  row: {
	    flexDirection: 'row'
	  },
	
	  // CELL
	
	  cell: {
	    width: 80,
	    height: 80,
	    borderRadius: 5,
	    backgroundColor: '#7b8994',
	    margin: 5,
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center'
	  },
	  cellX: {
	    backgroundColor: '#72d0eb'
	  },
	  cellO: {
	    backgroundColor: '#7ebd26'
	  },
	
	  // CELL TEXT
	
	  cellText: {
	    borderRadius: 5,
	    fontSize: 50,
	    fontFamily: 'AvenirNext-Bold'
	  },
	  cellTextX: {
	    color: '#19a9e5'
	  },
	  cellTextO: {
	    color: '#b9dc2f'
	  },
	
	  // GAME OVER
	
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
	    marginBottom: 20,
	    marginLeft: 20,
	    marginRight: 20,
	    fontFamily: 'AvenirNext-DemiBold',
	    textAlign: 'center'
	  },
	  newGame: {
	    backgroundColor: '#887766',
	    padding: 20,
	    borderRadius: 5
	  },
	  newGameText: {
	    color: 'white',
	    fontSize: 20,
	    fontFamily: 'AvenirNext-DemiBold'
	  }
	});
	
	AppRegistry.registerComponent('TicTacToeApp', function () {
	  return TicTacToeApp;
	});
	
	if (Platform.OS == 'winjs') {
	  var app = document.createElement('div');
	  document.body.appendChild(app);
	
	  AppRegistry.runApplication('TicTacToeApp', {
	    rootTag: app
	  });
	}
	
	module.exports = TicTacToeApp;

/***/ }
]);
//# sourceMappingURL=tictactoe.js.map