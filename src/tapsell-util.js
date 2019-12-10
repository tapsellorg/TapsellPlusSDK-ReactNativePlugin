let TapsellPlus = require("react-native").NativeModules.RNTapsellPlusSdk;

module.exports = {
  initialize: function(appKey) {
    TapsellPlus.initialize(appKey);
  }
};
