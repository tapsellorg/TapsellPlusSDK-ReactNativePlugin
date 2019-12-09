
# react-native-tapsell-plus-sdk

## Getting started

`$ npm install react-native-tapsell-plus-sdk --save`

### Mostly automatic installation

`$ react-native link react-native-tapsell-plus-sdk`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNTapsellPlusSdkPackage;` to the imports at the top of the file
  - Add `new RNTapsellPlusSdkPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-tapsell-plus-sdk'
  	project(':react-native-tapsell-plus-sdk').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-tapsell-plus-sdk/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-tapsell-plus-sdk')
  	```


## Usage
```javascript
import RNTapsellPlusSdk from 'react-native-tapsell-plus-sdk';

// TODO: What to do with the module?
RNTapsellPlusSdk;
```
  