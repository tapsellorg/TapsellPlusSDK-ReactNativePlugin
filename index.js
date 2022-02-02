import { DeviceEventEmitter } from "react-native";
import Constants from "./src/constants";
let TapsellPlusNativeModule = require("react-native").NativeModules.RNTapsellPlus;


let callbacks = {};

callbacks[Constants.ON_RESPONSE_EVENT] = {};
callbacks[Constants.ON_NATIVE_RESPONSE_EVENT] = {};
callbacks[Constants.ON_ERROR_EVENT] = {};

callbacks[Constants.ON_OPENED_EVENT] = {};
callbacks[Constants.ON_CLOSED_EVENT] = {};
callbacks[Constants.ON_REWARDED_EVENT] = {};
callbacks[Constants.ON_SHOW_ERROR_EVENT] = {};

const appEventEmitter = DeviceEventEmitter;

appEventEmitter.addListener(Constants.ON_NATIVE_RESPONSE_EVENT, event => {
  if (callbacks[Constants.ON_NATIVE_RESPONSE_EVENT][event.response_id])
    callbacks[Constants.ON_NATIVE_RESPONSE_EVENT][event.response_id](event);
});

// When errored
appEventEmitter.addListener(Constants.ON_ERROR_EVENT, event => {
  if (callbacks[Constants.ON_ERROR_EVENT][event.response_id])
    callbacks[Constants.ON_ERROR_EVENT][event.response_id](event);
});

// When opened
appEventEmitter.addListener(Constants.ON_OPENED_EVENT, event => {
  if (callbacks[Constants.ON_OPENED_EVENT][event.response_id])
    callbacks[Constants.ON_OPENED_EVENT][event.response_id](event);
});

// When closed
appEventEmitter.addListener(Constants.ON_CLOSED_EVENT, event => {
  if (callbacks[Constants.ON_CLOSED_EVENT][event.response_id])
    callbacks[Constants.ON_CLOSED_EVENT][event.response_id](event);
});

// When rewarded
appEventEmitter.addListener(Constants.ON_REWARDED_EVENT, event => {
  if (callbacks[Constants.ON_REWARDED_EVENT][event.response_id])
    callbacks[Constants.ON_REWARDED_EVENT][event.response_id](event);
});



/**
 * Main class to interact with
 *
 * **Note**: Every requestSomething method return a {Promise} which contains a `responseId` string
 *   this responseId must be stored to be passed to show method
 *   Also, every show* method requires onOpen, onClose, onRewarded and onError callbacks
 */
const TapsellPlus = class {

  static initialize(appKey) {
    TapsellPlusNativeModule?.initialize(appKey);
  }

  static setDebugMode(logLevel) {
    TapsellPlusNativeModule?.setDebugMode(logLevel);
  }

  /**
   *
   * @param {string} zoneId
   * @returns {Promise} (Resolve with a {string} responseId). Rejects if there's an error
   */
  static async requestRewardedVideoAd(zoneId) {
    return TapsellPlusNativeModule?.requestRewardedVideoAd(zoneId)
  }


  /**
   *
   * @param {string} responseId passed from the requestRewardedVideoAd in it's promise
   * @param {function({response_id: string, zone_id: string}):void} onOpened contains {responseId, zoneId}
   * @param {function({response_id: string, zone_id: string}):void} onClosed contains {responseId, zoneId}
   * @param {function({response_id: string, zone_id: string}):void} onRewarded contains {responseId, zoneId}
   * @param {function({response_id: string, zone_id: string, error_message: string}):void} onError contains {responseId, zoneId, errorMessage}
   */
   static showRewardedVideoAd(responseId, onOpened, onClosed, onRewarded, onError) {
    callbacks[Constants.ON_OPENED_EVENT][responseId] = onOpened
    callbacks[Constants.ON_CLOSED_EVENT][responseId] = onClosed
    callbacks[Constants.ON_REWARDED_EVENT][responseId] = onRewarded
    callbacks[Constants.ON_ERROR_EVENT][responseId] = onError
    TapsellPlusNativeModule?.showRewardedVideoAd(responseId);
  }

  /**
   *
   * @param {string} zoneId
   * @returns {Promise<string>} (Resolve with a {string} responseId). Rejects if there's an error
   */
  static async requestInterstitialAd(zoneId) {
    return TapsellPlusNativeModule?.requestInterstitialAd(zoneId);
  }


  /**
   *
   * @param {string} responseId passed from the requestInterstitialAd in it's promise
   * @param {function({response_id: string, zone_id: string}):void} onOpened contains {responseId, zoneId}
   * @param {function({response_id: string, zone_id: string}):void} onClosed contains {responseId, zoneId}
   * @param {function({response_id: string, zone_id: string, error_message: string}):void} onError contains {responseId, zoneId, errorMessage}
   */
   static showInterstitialAd(responseId, onOpened, onClosed, onError) {
    callbacks[Constants.ON_OPENED_EVENT][responseId] = onOpened
    callbacks[Constants.ON_CLOSED_EVENT][responseId] = onClosed
    callbacks[Constants.ON_ERROR_EVENT][responseId] = onError
    TapsellPlusNativeModule?.showInterstitialAd(responseId);
  }

  /**
   * Requests a native ad
   * @param {string} zoneId
   * @returns {Promise<string>} (Resolve with a string as responseId). Rejects if there's an error
   */
  static async requestNativeAd(zoneId) {
    return TapsellPlusNativeModule?.requestNativeAd(zoneId);
  }


  /**
   *
   * @param {string} responseId passed from the requestNativeAd in it's promise
   * @param {function(object):void} onOpened contains an object consisting of {ad_id, zone_id, response_id, title, description, call_to_action_text, icon_url, portrait_static_image_url, landscape_static_image_url} **Note**: Keys might not be present
   * @param {function({response_id: string, zone_id: string, error_message: string}):void} onError contains {response_id, zone_id, error_message}
   */
   static showNativeAd(responseId, onOpened, onError) {
    callbacks[Constants.ON_NATIVE_RESPONSE_EVENT][responseId] = onOpened
    callbacks[Constants.ON_ERROR_EVENT][responseId] = onError
    TapsellPlusNativeModule?.showNativeAd(responseId);
  }

  /**
   *
   * @param {string} responseId is the id used to show the native ad
   */
  static nativeAdClicked(responseId) {
    TapsellPlusNativeModule?.nativeAdClicked(responseId);
  }

  /**
   *
   * @param {string} responseId is the id that is used to show the related ad
   * @returns {Promise<string>} that resolves with 'true' if destruction was a success, rejects otherwise
   */
  static async desntroyNativeAd(responseId) {
    return TapsellPlusNativeModule?.destroyNativeAd(responseId);
  }


  /**
   *
   * @param {string} zoneId
   * @param {TapsellPlusBannerType} bannerType
   * @returns {Promise<string>} (Resolve with a {string} responseId). Rejects if there's an error
   */
  static requestStandardBannerAd(zoneId, bannerType) {
    return TapsellPlusNativeModule?.requestStandardBannerAd(zoneId, bannerType);
  }

  /**
   *
   * @param {string} responseId passed from the requestStandardBannerMathod in it's promise
   * @param {TapsellPlusHorizontalGravity} horizontalGravity is the position of ad in the page
   * @param {TapsellPlusVerticalGravity} verticalGravity is the position of ad in the page
   * @param {function({response_id: string, zone_id: string}):void} onOpened contains {responseId, zoneId}
   * @param {function({response_id: string, zone_id: string, error_message: string}):void} onError contains {responseId, zoneId, errorMessage}
   */
  static showStandardBannerAd(responseId, horizontalGravity, verticalGravity, onOpened, onError) {
    callbacks[Constants.ON_OPENED_EVENT][responseId] = onOpened
    callbacks[Constants.ON_ERROR_EVENT][responseId] = onError
    TapsellPlusNativeModule?.showStandardBannerAd(responseId, horizontalGravity, verticalGravity);
  }


  /**
   * Attempts to destroy the banner that is already being shown
   * Note: No effect if no banner is shown
   * @param {string} responseId is used to destroy the banner with this id
   * @returns {Promise<string>} that resolved with 'true' if destruction was a success, otherwise rejects with the error
   */
  static async destroyStandardBannerAd(responseId) {
    return TapsellPlusNativeModule?.destroyStandardBannerAd(responseId);
  }

  /**
   * Attempts to display the banner that was hidden before
   * > **Note** This method does not request for a new ad and sets the banner visibility to View.VISIBLE
   */
  static displayStandardBanner() {
    TapsellPlusNativeModule?.displayStandardBanner();
  }

  /**
   * Attempts to hide the banner that is visible
   * > **Note** This method does not remove the request result and just sets the banner visibility to View.GONE
   */
  static hideStandardBanner() {
    TapsellPlusNativeModule?.hideStandardBanner();
  }
}

/**
 * Maps an integer into native enum TapsellPlusBannerType
 * Used to limit inputs of methods
 */
const TapsellPlusBannerType = {
  BANNER_320x50: 1,
  BANNER_320x100: 2,
  BANNER_250x250: 3,
  BANNER_300x250: 4,
  BANNER_468x60: 5,
  BANNER_728x90: 6
}

/**
 * Maps an integer into native horizontal gravity
 * Used to limit inputs of methods
 */
const TapsellPlusHorizontalGravity = {
  TOP: 1,
  CENTER: 5,
  BOTTOM: 2
}

/**
 * Maps an integer into native vertical gravity
 * Used to limit inputs of methods
 */
const TapsellPlusVerticalGravity = {
  LEFT: 3,
  RIGHT: 4,
  CENTER: 5
}

export default TapsellPlus
export { TapsellPlus, TapsellPlusBannerType, TapsellPlusVerticalGravity, TapsellPlusHorizontalGravity };
