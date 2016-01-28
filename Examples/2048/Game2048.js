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
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
} = React;

function getPageXY(event){
  if (Platform.OS == 'winjs') {
    var touch = event.nativeEvent.changedTouches[0];
    return {
      pageX: touch.pageX,
      pageY: touch.pageY
    }
  } else {
    return {
      pageX: event.nativeEvent.pageX,
      pageY: event.nativeEvent.pageY
    }
  }
}

var Animated = require('ReactAnimated');
var GameBoard = require('GameBoard');
var TouchableBounce = require('ReactTouchableBounce');

var BOARD_PADDING = 3;
var CELL_MARGIN = 4;
var CELL_SIZE = 60;

class Cell extends React.Component {
  render() {
    return <View style={styles.cell} />;
  }
}

class Board extends React.Component {
  render() {
    return (
      <View style={styles.board}>
        <View style={styles.row}><Cell/><Cell/><Cell/><Cell/></View>
        <View style={styles.row}><Cell/><Cell/><Cell/><Cell/></View>
        <View style={styles.row}><Cell/><Cell/><Cell/><Cell/></View>
        <View style={styles.row}><Cell/><Cell/><Cell/><Cell/></View>
        {this.props.children}
      </View>
    );
  }
}

class Tile extends React.Component {
  static _getPosition(index): number {
    return BOARD_PADDING + (index * (CELL_SIZE + CELL_MARGIN * 2) + CELL_MARGIN);
  }

  constructor(props: {}) {
    super(props);

    var tile = this.props.tile;

    this.state = {
      opacity: new Animated.Value(0),
      top: new Animated.Value(Tile._getPosition(tile.toRow())),
      left: new Animated.Value(Tile._getPosition(tile.toColumn())),
    };
  }

  calculateOffset(): {top: number; left: number; opacity: number} {
    var tile = this.props.tile;

    var offset = {
      top: this.state.top,
      left: this.state.left,
      opacity: this.state.opacity,
    };

    if (tile.isNew()) {
      Animated.timing(this.state.opacity, {
        duration: 100,
        toValue: 1,
      }).start();
    } else {
      Animated.parallel([
        Animated.timing(offset.top, {
          duration: 100,
          toValue: Tile._getPosition(tile.toRow()),
        }),
        Animated.timing(offset.left, {
          duration: 100,
          toValue: Tile._getPosition(tile.toColumn()),
        }),
      ]).start();
    }
    return offset;
  }

  render() {
    var tile = this.props.tile;

    var tileStyles = [
      styles.tile,
      styles['tile' + tile.value],
      this.calculateOffset(),
    ];

    var textStyles = [
      styles.value,
      tile.value > 4 && styles.whiteText,
      tile.value > 100 && styles.threeDigits,
      tile.value > 1000 && styles.fourDigits,
    ];

    return (
      <Animated.View style={tileStyles}>
        <Text style={textStyles}>{tile.value}</Text>
      </Animated.View>
    );
  }
}

class GameEndOverlay extends React.Component {
  render() {
    var board = this.props.board;

    if (!board.hasWon() && !board.hasLost()) {
      return <View/>;
    }

    var message = board.hasWon() ?
      'Good Job!' : 'Game Over';

    return (
      <View style={styles.overlay}>
        <Text style={styles.overlayMessage}>{message}</Text>
        <TouchableBounce onPress={this.props.onRestart} style={styles.tryAgain}>
          <Text style={styles.tryAgainText}>Try Again?</Text>
        </TouchableBounce>
      </View>
    );
  }
}

class Game2048 extends React.Component {
  startX: number;
  startY: number;

  constructor(props: {}) {
    super(props);
    this.state = {
      board: new GameBoard(),
    };
    this.startX = 0;
    this.startY = 0;
  }

  restartGame() {
    this.setState({board: new GameBoard()});
  }

  handleTouchStart(event: Object) {
    if (this.state.board.hasWon()) {
      return;
    }

    var touch = getPageXY(event);
    this.startX = touch.pageX;
    this.startY = touch.pageY;

  }

  handleTouchEnd(event: Object) {
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
      this.setState({board: this.state.board.move(direction)});
    }
  }

  render() {
    var tiles = this.state.board.tiles
      .filter((tile) => tile.value)
      .map((tile) => <Tile ref={tile.id} key={tile.id} tile={tile} />);

    return (
      <View
        style={styles.container}
        onTouchStart={(event) => this.handleTouchStart(event)}
        onTouchEnd={(event) => this.handleTouchEnd(event)}>
        <Board>
          {tiles}
        </Board>
        <GameEndOverlay board={this.state.board} onRestart={() => this.restartGame()} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    padding: BOARD_PADDING,
    backgroundColor: '#bbaaaa',
    borderRadius: 5,
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
    alignItems: 'center',
  },
  overlayMessage: {
    fontSize: 40,
    marginBottom: 20,
  },
  tryAgain: {
    backgroundColor: '#887766',
    padding: 20,
    borderRadius: 5,
  },
  tryAgainText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderRadius: 5,
    backgroundColor: '#ddccbb',
    margin: CELL_MARGIN,
  },
  row: {
    flexDirection: 'row',
  },
  tile: {
    position: 'absolute',
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: '#ddccbb',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    color: '#776666',
    fontFamily: 'Verdana',
    fontWeight: '500',
  },
  tile2: {
    backgroundColor: '#eeeeee',
  },
  tile4: {
    backgroundColor: '#eeeecc',
  },
  tile8: {
    backgroundColor: '#ffbb88',
  },
  tile16: {
    backgroundColor: '#ff9966',
  },
  tile32: {
    backgroundColor: '#ff7755',
  },
  tile64: {
    backgroundColor: '#ff5533',
  },
  tile128: {
    backgroundColor: '#eecc77',
  },
  tile256: {
    backgroundColor: '#eecc66',
  },
  tile512: {
    backgroundColor: '#eecc55',
  },
  tile1024: {
    backgroundColor: '#eecc33',
  },
  tile2048: {
    backgroundColor: '#eecc22',
  },
  whiteText: {
    color: '#ffffff',
  },
  threeDigits: {
    fontSize: 20,
  },
  fourDigits: {
    fontSize: 18,
  },
});

AppRegistry.registerComponent('Game2048', () => Game2048);

if(Platform.OS == 'winjs'){
  var app = document.createElement('div');
  document.body.appendChild(app);

  AppRegistry.runApplication('Game2048', {
    rootTag: app
  })
}

module.exports = Game2048;
