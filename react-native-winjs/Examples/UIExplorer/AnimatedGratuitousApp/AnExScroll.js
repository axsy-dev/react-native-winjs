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
 * @providesModule AnExScroll
 */
'use strict';

var React = require('react-native');
var {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

class AnExScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0),
    };
  }

  render() {
    var width = this.props.panelWidth;
    return (
      <View style={styles.container}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={16 /* get all events */ }
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: this.state.scrollX}}}]  // nested event mapping
          )}
          contentContainerStyle={{flex: 1, padding: 10}}
          pagingEnabled={true}
          horizontal={true}>
          <View style={[styles.page, {width}]}>
            <Image
              style={{width: 180, height: 180}}
              source={HAWK_PIC}
            />
            <Text style={styles.text}>
              {'I\'ll find something to put here.'}
            </Text>
          </View>
          <View style={[styles.page, {width}]}>
            <Text style={styles.text}>{'And here.'}</Text>
          </View>
          <View style={[styles.page, {width}]}>
            <Text>{'But not here.'}</Text>
          </View>
        </ScrollView>
        <Animated.Image
          pointerEvents="none"
          style={[styles.bunny, {transform: [
            {translateX: this.state.scrollX.interpolate({
              inputRange: [0, width, 2 * width],
              outputRange: [0, 0, width / 3]}),          //  multi-part ranges
              extrapolate: 'clamp'},                     //  default is 'extend'
            {translateY: this.state.scrollX.interpolate({
              inputRange: [0, width, 2 * width],
              outputRange: [0, -200, -260]}),
              extrapolate: 'clamp'},
            {scale: this.state.scrollX.interpolate({
              inputRange: [0, width, 2 * width],
              outputRange: [0.5, 0.5, 2]}),
              extrapolate: 'clamp'},
          ]}]}
          source={BUNNY_PIC}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  text: {
    padding: 4,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  bunny: {
    backgroundColor: 'transparent',
    position: 'absolute',
    height: 160,
    width: 160,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

var HAWK_PIC = {uri: 'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xfa1/t39.1997-6/10734304_1562225620659674_837511701_n.png'};
var BUNNY_PIC = {uri: 'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t39.1997-6/851564_531111380292237_1898871086_n.png'};

module.exports = AnExScroll;
