# UIExplorer

The UIExplorer is a sample app that showcases React Native views and modules.

## Running this app

Before running the app, make sure you ran:

    cd react-native
    npm install

### Running on iOS

Mac OS and Xcode are required.

- Open `Examples/UIExplorer/UIExplorer.xcodeproj` in Xcode
- Hit the Run button

See [Running on device](https://facebook.github.io/react-native/docs/running-on-device-ios.html) if you want to use a physical device.

### Running on Android

You'll need to have all the [prerequisites](https://github.com/facebook/react-native/tree/master/ReactAndroid#prerequisites) (SDK, NDK) for Building React Native installed.

Start an Android emulator ([Genymotion](https://www.genymotion.com) is recommended).

    cd react-native
    ./gradlew :Examples:UIExplorer:android:app:installDebug
    ./packager/packager.sh

_Note: Building for the first time can take a while._

Open the UIExplorer app in your emulator.

See [Running on Device](https://facebook.github.io/react-native/docs/running-on-device-android.html) in case you want to use a physical device.

## Built from source

Building the app on both iOS and Android means building the React Native framework from source. This way you're running the latest native and JS code the way you see it in your clone of the github repo.

This is different from apps created using `react-native init` which have a dependency on a specific version of React Native JS and native code, declared in a `package.json` file (and `build.gradle` for Android apps).
