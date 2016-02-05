/**
 * Sample React Native App for WinJS
 * https://github.com/axsy-dev/react-native-winjs
 * 
 * Based on samples from 
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class XXReactNativeWinJsComponentXX extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native for WinJS!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.web.js
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7777cc',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('XXReactNativeWinJsComponentXX', () => XXReactNativeWinJsComponentXX);

import {Platform} from 'react-native';

if(Platform.OS == 'winjs'){
  var app = document.createElement('div');
  document.body.appendChild(app);

  AppRegistry.runApplication('XXReactNativeWinJsComponentXX', {
    rootTag: app
  })
}

