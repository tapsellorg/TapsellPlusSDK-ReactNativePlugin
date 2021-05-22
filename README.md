# TapsellPlusSDK-ReactNativePlugin [![npm version](https://img.shields.io/npm/v/react-native-tapsell-plus?color=green&label=react-native-tapsell-plus&logo=react)](https://www.npmjs.com/package/react-native-tapsell-plus)

# react-native-tapsell-plus

## Getting started

`$ npm install react-native-tapsell-plus --save`


> If your react-native version is below `0.60`, you need to link it as well:
>
> ```
> $ react-native link react-native-tapsell-plus
> ```


<details>
  <summary>Manual installation (Older react native versions)</summary>
  
#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNTapsellPlusPackage;` to the imports at the top of the file
  - Add `new RNTapsellPlusPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-tapsell-plus'
  	project(':react-native-tapsell-plus').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-tapsell-plus/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-tapsell-plus')
  	```

</details>



## Usage
```javascript
import RNTapsellPlus from 'react-native-tapsell-plus';

// TODO: What to do with the module?
RNTapsellPlus;
```
  
