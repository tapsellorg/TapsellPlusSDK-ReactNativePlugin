let TapsellPlusUtils = require("./src/tapsellPlusUtils.js");

module.exports = {
  initialize: TapsellPlusUtils.initialize,
  setDebugMode: TapsellPlusUtils.setDebugMode,
  addFacebookTestDevice: TapsellPlusUtils.addFacebookTestDevice,
  requestRewarded: TapsellPlusUtils.requestRewarded,
  requestInterstitial: TapsellPlusUtils.requestInterstitial,
  requestNative: TapsellPlusUtils.requestNative,
  showAd: TapsellPlusUtils.showAd,
  nativeAdClicked: TapsellPlusUtils.nativeAdClicked
};
