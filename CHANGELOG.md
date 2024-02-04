# Changelog

## 2.2.4 (05 Feb, 2023)

- [Change]: Updated Tapsell legacy SDK to `4.8.8`
- [New]: Added support for `Gradle 8` and `R8 Full mode`. No need to add proguard rules
  anymore. [#75](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/75). You need to add few rules if you
  don't use all ad networks.
  See [#80](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/80)
  See [Sample](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/blob/master/app/src/main/java/ir/tapsell/plussample/android/ExoPlayerVastActivity.java)
- [Fix]: Fixed a crash related to OkHttp in Android 4 by Downgrading Retrofit version to 2.5.0.
- [Fix]: Fixed logger crash when printing the error log message.
- [Fix]: Trigger failure callback in some cases: when developer makes multiple requests at the same time.
- [Fix]: Fixed few bugs and crashes
- [Fix]: Fixed a crash when using `telephonyManager.getAllCellInfo();
- [Fix]: Fixed GDPR consent issues in Tapsell sdk.

## 2.2.0 (02 Jul, 2023)
 
- [Fix]: Fixed Google Play policy error related to Collecting user's installed
  apps [GH-68](https://github.com/tapsellorg/TapsellPlusSDK-AndroidSample/issues/68
- [**Change**]: Increase `minSdkVersion` to 19 to support Admob `V21.5.0`
- [**New**]: Added new UI for back dialog
- [Change] Update Android dependency (TapsellPlus)
  to [`2.2.0`](https://docs.tapsell.ir/plus-sdk/android/main/#20220621-220)
- [Fix]: Fix some memory leaks in tapsell sdk and tapsell plus sdk
- [Fix]: fix some proguard issues
- [Fix]: Fix wrong back dialog options in rewarded videos
- [change] Update sample react-native version to 0.71.11
- [Change]: Update Admob to `V21.5.0`
- [Change]: Update UnityAds to `V4.6.1`
- [Change]: Update Mintegral to `V16.3.91`
- [Change]: Update AdColony to `V4.8.0`
- [Change]: Update AppLovin to `V11.8.2`

## 2.1.8 (08 April, 2023)
- [change] Update Android dependency (TapsellPlus) to `2.1.8`
- [change] Update Android `targetSdkVersion` to 33
- [New] Added dynamic configs for `backPressed` final banner in video ads
- [New] Add dynamic configs for back alert dialog in videos
- [Fix] Update UnityAds to V4.3.0 and fix deprecations based on ([UnityAds API](https://docs.unity.com/ads/UnityAPI.html))

## 2.1.8-rc01 (02 August, 2022)
- [change] Update Android dependency (TapsellPlus) to 2.1.8-rc01

## 2.1.7 (30 March, 2022)
- [**New**] Update admob to `20.6.0`
  - Also `appSetId` is updated to `16.0.2`
- [*Fix*] Fix SSLFactory on Android prior to 4.4
- [change] Update Android dependency (TapsellPlus) to 2.1.7
- [change] Update sample react-native version to 0.67.4 nad react version to 18.0.0

## 2.1.6 (2 Feb, 2022)
- [**New**]: Add Vast Activity to Github Sample
- [**New**]: Add AppSetId due to new changes to advertisingId
- [**New**]: Add support for Mintegral Interstitial and Rewarded Ads
- [**New**]: Add support for Mintegral standard banner ads
- [**New**] Enable Hermes Engine support in sample
- [*Fix*] Fixed a critical issue in metro bundler after installing sdk on react native +0.64
- [*Fix*] Fixed crash when running ios version
- [*Fix*] Fixed Admob native banner crash
- [*Fix*] Fixed consistent request in VAST
- [*Fix*] Fixed back button activation and show exit dialog option in Tapsell rewarded videos
- [*Fix*] Fixed Tapsell Native Banner NullPointerException
- [*Fix*] Fixed Standard banner refresh issue: it will now remove the previous banner if the request was failed and banner was not in shown state
  - Modified adNetworks: AppLovin, AdMob, Tapsell, Mintegral
- [change] Update Android dependency (TapsellPlus) to 2.1.6
- [change] Update sample react-native version to 0.67.1
- [change] Error will notify more verbosely when all adNetworks failed to load
- [change] Update Tapsell version to 4.7.4

## 2.1.3
- [**New**] Add AdColony Standard Banner
- [**New**] Add Chartboost Interstitial Ad
- [change] Update Android dependency (TapsellPlus) to 2.1.3

## 2.1.2 (7 Jun, 2021)
#### Android
- Update native dependency to `2.1.2`

## 2.1.1 (22 May, 2021)
- Add **Standard banner** feature.
- Use static class for `TapsellPlus`
  - Helps for completion and guides when using it's APIs
  - You can use `import {TapsellPlus}` or `import TapsellPlus`
- Add **native banner**
- Refactor all methods due to new android changes


```js
import { TapsellPlus } from 'react-native-tapsell-plus';

TapsellPlus.initialize(key);
```

#### Android
- Update native functionality to `2.1.1`

## 1.2.7 (27 Apr, 2021)
#### Android
- Update native library to 1.2.5

## 1.2.4-alpha01 (26 Apr, 2021)
#### Android
- Update native library to 1.2.2
