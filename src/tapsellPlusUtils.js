import { DeviceEventEmitter } from "react-native";
import Constants from "./constants";
let TapsellPlusNativeModule = require("react-native").NativeModules
  .RNTapsellPlus;

let callbacks = {};

callbacks[Constants.ON_RESPONSE_EVENT] = {};
callbacks[Constants.ON_NATIVE_RESPONSE_EVENT] = {};
callbacks[Constants.ON_ERROR_EVENT] = {};

callbacks[Constants.ON_OPENED_EVENT] = {};
callbacks[Constants.ON_CLOSED_EVENT] = {};
callbacks[Constants.ON_REWARDED_EVENT] = {};
callbacks[Constants.ON_SHOW_ERROR_EVENT] = {};

const appEventEmitter = DeviceEventEmitter;

appEventEmitter.addListener(Constants.ON_RESPONSE_EVENT, event => {
  if (callbacks[Constants.ON_RESPONSE_EVENT][event.zone_id])
    callbacks[Constants.ON_RESPONSE_EVENT][event.zone_id]();
});

appEventEmitter.addListener(Constants.ON_NATIVE_RESPONSE_EVENT, event => {
  if (callbacks[Constants.ON_NATIVE_RESPONSE_EVENT][event.zone_id])
    callbacks[Constants.ON_NATIVE_RESPONSE_EVENT][event.zone_id](event);
});

appEventEmitter.addListener(Constants.ON_ERROR_EVENT, event => {
  if (callbacks[Constants.ON_ERROR_EVENT][event.zone_id])
    callbacks[Constants.ON_ERROR_EVENT][event.zone_id](event.error_message);
});

appEventEmitter.addListener(Constants.ON_OPENED_EVENT, event => {
  if (callbacks[Constants.ON_OPENED_EVENT][event.zone_id])
    callbacks[Constants.ON_OPENED_EVENT][event.zone_id]();
});

appEventEmitter.addListener(Constants.ON_CLOSED_EVENT, event => {
  if (callbacks[Constants.ON_CLOSED_EVENT][event.zone_id])
    callbacks[Constants.ON_CLOSED_EVENT][event.zone_id]();
});

appEventEmitter.addListener(Constants.ON_REWARDED_EVENT, event => {
  if (callbacks[Constants.ON_REWARDED_EVENT][event.zone_id])
    callbacks[Constants.ON_REWARDED_EVENT][event.zone_id]();
});

appEventEmitter.addListener(Constants.ON_SHOW_ERROR_EVENT, event => {
  if (callbacks[Constants.ON_SHOW_ERROR_EVENT][event.zone_id])
    callbacks[Constants.ON_SHOW_ERROR_EVENT][event.zone_id](
      event.error_message
    );
});

module.exports = {
  initialize: function(appKey) {
    TapsellPlusNativeModule.initialize(appKey);
  },

  setDebugMode: function(logLevel) {
    TapsellPlusNativeModule.setDebugMode(logLevel);
  },

  addFacebookTestDevice: function(hash) {
    TapsellPlusNativeModule.addFacebookTestDevice(hash);
  },

  requestRewarded: function(zoneId, onResponse, onError) {
    callbacks[Constants.ON_RESPONSE_EVENT][zoneId] = onResponse;
    callbacks[Constants.ON_ERROR_EVENT][zoneId] = onError;
    TapsellPlusNativeModule.requestRewarded(zoneId);
  },

  requestInterstitial: function(zoneId, onResponse, onError) {
    callbacks[Constants.ON_RESPONSE_EVENT][zoneId] = onResponse;
    callbacks[Constants.ON_ERROR_EVENT][zoneId] = onError;
    TapsellPlusNativeModule.requestInterstitial(zoneId);
  },

  requestNative: function(zoneId, onResponse, onError) {
    callbacks[Constants.ON_NATIVE_RESPONSE_EVENT][zoneId] = onResponse;
    callbacks[Constants.ON_SHOW_ERROR_EVENT][zoneId] = onError;
    TapsellPlusNativeModule.requestNative(zoneId);
  },

  showAd: function(zoneId, onOpened, onClosed, onRewarded, onError) {
    callbacks[Constants.ON_OPENED_EVENT][zoneId] = onOpened;
    callbacks[Constants.ON_CLOSED_EVENT][zoneId] = onClosed;
    callbacks[Constants.ON_REWARDED_EVENT][zoneId] = onRewarded;
    callbacks[Constants.ON_ERROR_EVENT][zoneId] = onError;
    TapsellPlusNativeModule.showAd(zoneId);
  },

  nativeAdClicked: function(zoneId, adId) {
    TapsellPlusNativeModule.nativeAdClicked(zoneId, adId);
  }
};
