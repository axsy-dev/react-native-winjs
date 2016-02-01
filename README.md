# WARNING: Under Construction
           
# React Native WinJS

> A framework for building WinJS apps with a React Native compatible API, based on the hard work already put in by the react-web project.

## Adding to an existing React Native project

If you already have a React Native project and want to add WinJS support, you need to execute the following commands in your existing project directory:

1. Install `npm install react-native-winjs-cli -g`
2. Execute `react-native-winjs init <ExistedProjectDir>` that install `react-native-winjs` and `devDependencies` to your project and make a `web` directory with `webpack.config.js` file under your project
3. Execute `react-native-winjs start` that starts the web dev server
4. Execute `react-native-winjs bundle` that builds the output

## Getting Started

### Install

```sh
npm install react-native-winjs --save
```

### Add Webpack configuration

Inside your webpack configuration, alias the `react-native` package to the `react-native-winjs` package, then install and add [haste-resolver-webpack-plugin](https://github.com/yuanyan/haste-resolver-webpack-plugin) plugin.

```js
// webpack.config.js
var HasteResolverPlugin = require('haste-resolver-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      'react-native': 'react-native-winjs'
    }
  },
  plugins: [
    new HasteResolverPlugin({
      platform: 'winjs',
      nodeModules: ['react-native-winjs']
    })
  ]
}
```

#### What does HasteResolverPlugin do?

When using components of `react-native-winjs`, just `require('ReactActivityIndicator')`, and Webpack will build a bundle with `ActivityIndicator.web.js` for web platform.

`HasteResolverPlugin` will do the following for you:

1. Walk over all components and check out the `@providesModule` info.
2. When webpack build bundle, it makes your components recognised rather than throwing an error.
3. It will help webpack build bundle with correct file depending on the tar* platform.

You can find something like `@providesModule ReactActivityIndicator` on `react-native-winjs` component's comment, it's for `HasteResolverPlugin`.

### Fix platform differences

1. Native events without direct pageX/pageY on web platform
  ```js
  if (Platform.OS == 'winjs') {
    var touch = event.nativeEvent.changedTouches[0];
    pageX = touch.pageX;
    pageY = touch.pageY;
  } else {
    startX = event.nativeEvent.pageX;
    startY = event.nativeEvent.pageY;
  }
  ```

2. Should run application on web platform
  ```js
  AppRegistry.registerComponent('Game2048', () => Game2048);
  if(Platform.OS == 'winjs'){
    var app = document.createElement('div');
    document.body.appendChild(app);
    AppRegistry.runApplication('Game2048', {
      rootTag: app
    })
  }
  ```

3. Should care about fetch domain on web platform
  ```js
  var fetch = Platform.OS === 'winjs'? require('ReactJsonp'): require('ReactFetch');
  ```

4. Component without setNativeProps method on web platform
  ```js
  var setNativeProps = require('ReactSetNativeProps')
  setNativeProps(this.refs.foo, {
    style: {
      top: 0
    }
  })
  ```

5. Without some APIs like `LayoutAnimation` on web platform
  ```js
  var LayoutAnimation = require('ReactLayoutAnimation')
  if(Platform.OS !== 'winjs'){
    LayoutAnimation.configureNext(...)
  }
  ```
  
6. Need fetch?
```js
  fetch = require('ReactFetch');
```

### React Native compatible

#### Components

* ActivityIndicatorIOS
* DrawerLayoutAndroid
* Image
* ListView
* Modal
* Navigator
* PickerIOS
* ProgressViewIOS
* ScrollView 
* SegmentedControlIOS
* SliderIOS
* Switch
* TabBarIOS
* Text
* TextInput
* Touchable
* TouchableHighlight
* TouchableOpacity
* TouchableWithoutFeedback
* View

#### APIs

* Alert
* Animated
* AppRegistry
* AsyncStorage
* Dimensions
* Easing
* InteractionManager
* PanResponder
* PixelRatio
* StyleSheet

#### Plugins

* Platform (='winjs')

## Scripts

* Linting - **npm run lint** - Must run it before commit.
* Testing - **npm test** - Run unit testing by jest.
* Developing - **npm start** - This will run a server at *localhost:3000* and use Hot Module Reloading.
* Demo deployment - **npm run demo** - Generate demo assets under *pages* directory.

React Native WinJS is [BSD licensed](./LICENSE).
