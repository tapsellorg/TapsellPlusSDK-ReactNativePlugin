let TapsellPlusNativeModule = require("react-native").NativeModules.RNTapsellPlus;

module.exports = {
    ON_RESPONSE_EVENT: TapsellPlusNativeModule.ON_RESPONSE_EVENT,
    ON_NATIVE_RESPONSE_EVENT: TapsellPlusNativeModule.ON_NATIVE_RESPONSE_EVENT,
    ON_ERROR_EVENT: TapsellPlusNativeModule.ON_ERROR_EVENT,

    ON_OPENED_EVENT: TapsellPlusNativeModule.ON_OPENED_EVENT,
    ON_CLOSED_EVENT: TapsellPlusNativeModule.ON_CLOSED_EVENT,
    ON_REWARDED_EVENT: TapsellPlusNativeModule.ON_REWARDED_EVENT,
    ON_SHOW_ERROR_EVENT: TapsellPlusNativeModule.ON_SHOW_ERROR_EVENT,

    ON_RESPONSE_NATIVE_EVENT: TapsellPlusNativeModule.ON_RESPONSE_NATIVE_EVENT,
    ON_ERROR_NATIVE_EVENT: TapsellPlusNativeModule.ON_ERROR_NATIVE_EVENT,
};
