# Changelog

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
