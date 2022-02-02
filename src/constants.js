let tapsellPlusNativeModule = require("react-native").NativeModules.RNTapsellPlus;

module.exports = {
    ON_NATIVE_RESPONSE_EVENT: tapsellPlusNativeModule?.ON_NATIVE_RESPONSE_EVENT ?? 'ON_NATIVE_RESPONSE_EVENT',
    ON_ERROR_EVENT: tapsellPlusNativeModule?.ON_ERROR_EVENT ?? 'ON_ERROR_EVENT',

    ON_OPENED_EVENT: tapsellPlusNativeModule?.ON_OPENED_EVENT ?? 'ON_OPENED_EVENT',
    ON_CLOSED_EVENT: tapsellPlusNativeModule?.ON_CLOSED_EVENT ?? 'ON_CLOSED_EVENT',
    ON_REWARDED_EVENT: tapsellPlusNativeModule?.ON_REWARDED_EVENT ?? 'ON_REWARDED_EVENT',
    ON_SHOW_ERROR_EVENT: tapsellPlusNativeModule?.ON_SHOW_ERROR_EVENT ?? 'ON_SHOW_ERROR_EVENT',

    ON_RESPONSE_NATIVE_EVENT: tapsellPlusNativeModule?.ON_RESPONSE_NATIVE_EVENT ?? 'ON_RESPONSE_NATIVE_EVENT',
    ON_ERROR_NATIVE_EVENT: tapsellPlusNativeModule?.ON_ERROR_NATIVE_EVENT ?? 'ON_ERROR_NATIVE_EVENT',
};
