# rocket-help
Native-Base - JS-TS - Firebase 


## expo-cli

$ npm install -g expo-cli

## yarn

- to install APT: $ npm install --global yarn

- to run EXPO: $ yarn global add expo-cli

## Expo Go

App mobile

## Init

$ expo init rockethelp

- option: ----- Bare workflow -----

## Setup Project to TypeScript

- Rename App file to App.js
- Create a new Json file < tsconfig.json >

- Start expo with the command: $ expo start

## NativeBase - Doc: _https://docs.nativebase.io/install-expo_

$ yarn add native-base

$ expo install react-native-svg

$ expo install react-native-safe-area-context


## SVG transformer - Doc: _https://www.npmjs.com/package/react-native-svg-transformer_

$ yarn add --dev react-native-svg-transformer


## Phosphor Icons - Doc: _https://github.com/duongdev/phosphor-react-native_

$ yarn add phosphor-react-native

## React Navigation - Doc: _https://reactnavigation.org/docs/getting-started_

$ yarn add @react-navigation/native

$ expo install react-native-screens

$ yarn add @react-navigation/native-stack

## FireBase Database - _https://firebase.google.com/_

### Conections by - Doc: _https://rnfirebase.io/_

- core

$ yarn add @react-native-firebase/app

- [with EXPO] Using the native Firebase SDK - Doc: _https://docs.expo.dev/guides/setup-native-firebase/_

- On FireBase, add a new register to connect database and save the file genereted on project [iOS & Android]

- On < app.json > insert:     

	"plugins": [
      	"@react-native-firebase/app"
	    ],
	"android": {
	      "googleServicesFile": "./google-services.json"
    		},
	"ios": {
	      "googleServicesFile": "./GoogleService-Info.plist"
	    }

$ expo prebuild

## Cloud Functions (*** for iOS need to < cd ios/ && pod install >)

$ yarn add @react-native-firebase/functions

## Authentication (*** for iOS need to < cd ios/ && pod install >)

$ yarn add @react-native-firebase/auth


## Emulador Android - _https://react-native.rocketseat.dev/android/windows_