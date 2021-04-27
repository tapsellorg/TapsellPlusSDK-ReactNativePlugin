package ir.tapsell.plus;

import android.app.Application;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

@SuppressWarnings("unused")
public class RNTapsellShit extends ReactContextBaseJavaModule implements NoProguard {

    private static final String onResponseCb = "onResponse";
    private static final String onNativeResponseCb = "onNativeResponse";
    private static final String onErrorCb = "onError";
    private static final String onOpenedCb = "onOpened";
    private static final String onClosedCb = "onClosed";
    private static final String onRewardedCb = "onRewarded";
    private static final String onShowErrorCb = "onShowErrorCb";

    private static final String AD_ID_KEY = "ad_id";
    private static final String ZONE_ID_KEY = "zone_id";
    private static final String ERROR_KEY = "error_message";
    private static final String TITLE_KEY = "title";
    private static final String DESCRIPTION_KEY = "description";
    private static final String CALL_TO_ACTION_TEXT_KEY = "call_to_action_text";
    private static final String ICON_URL_KEY = "icon_url";
    private static final String PORTRAIT_STATIC_IMAGE_URL_KEY = "portrait_static_image_url";
    private static final String LANDSCAPE_STATIC_IMAGE_URL_KEY = "landscape_static_image_url";

    private static final String TAG = "TapsellPlusReactNative";

    public RNTapsellShit(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNTapsellPlus";
    }

    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object> constants = new HashMap<>();

        constants.put("ON_RESPONSE_EVENT", onResponseCb);
        constants.put("ON_NATIVE_RESPONSE_EVENT", onNativeResponseCb);
        constants.put("ON_ERROR_EVENT", onErrorCb);

        constants.put("ON_OPENED_EVENT", onOpenedCb);
        constants.put("ON_CLOSED_EVENT", onClosedCb);
        constants.put("ON_REWARDED_EVENT", onRewardedCb);
        constants.put("ON_SHOW_ERROR_EVENT", onShowErrorCb);

        return constants;
    }

    @ReactMethod
    public void setDebugMode(int logLevel) {
        TapsellPlus.setDebugMode(logLevel);
    }

    @ReactMethod
    public void initialize(String appKey) {
        TapsellPlus.initialize(
                (Application) getReactApplicationContext().getApplicationContext(), appKey);
    }

    @ReactMethod
    public void addFacebookTestDevice(String hash) {
        TapsellPlus.addFacebookTestDevice(hash);
    }

    @ReactMethod
    public void requestRewarded(final String zoneId) {
        TapsellPlus.requestRewardedVideo(getCurrentActivity(), zoneId, new AdRequestCallback() {
            @Override
            public void response() {
                WritableMap params = Arguments.createMap();
                params.putString(ZONE_ID_KEY, zoneId);

                sendEvent(getReactApplicationContext(), onResponseCb, params);
            }

            @Override
            public void error(String message) {
                WritableMap params = Arguments.createMap();
                params.putString(ZONE_ID_KEY, zoneId);
                params.putString(ERROR_KEY, message);

                sendEvent(getReactApplicationContext(), onErrorCb, params);
            }
        });
    }

    @ReactMethod
    public void requestInterstitial(final String zoneId) {
        TapsellPlus.requestInterstitial(getCurrentActivity(), zoneId, new AdRequestCallback() {
            @Override
            public void response() {
                WritableMap params = Arguments.createMap();
                params.putString(ZONE_ID_KEY, zoneId);

                sendEvent(getReactApplicationContext(), onResponseCb, params);
            }

            @Override
            public void error(String message) {
                WritableMap params = Arguments.createMap();
                params.putString(ZONE_ID_KEY, zoneId);
                params.putString(ERROR_KEY, message);

                sendEvent(getReactApplicationContext(), onErrorCb, params);
            }
        });
    }

    @ReactMethod
    public void requestNative(final String zoneId) {
        TapsellPlus.requestNativeBanner(getCurrentActivity(), zoneId, new AdRequestCallback() {
            @Override
            public void response(String adId) {
                TapsellPlusNativeBanner ad =
                        TapsellPlus.getNativeBannerObject(getCurrentActivity(), zoneId);

                WritableMap nativeAdData = Arguments.createMap();
                nativeAdData.putString(AD_ID_KEY, ad.adId);
                nativeAdData.putString(ZONE_ID_KEY, zoneId);
                nativeAdData.putString(TITLE_KEY, ad.title);
                nativeAdData.putString(DESCRIPTION_KEY, ad.description);
                nativeAdData.putString(ICON_URL_KEY, ad.iconUrl);
                nativeAdData.putString(CALL_TO_ACTION_TEXT_KEY, ad.callToActionText);
                nativeAdData.putString(PORTRAIT_STATIC_IMAGE_URL_KEY, ad.portraitStaticImageUrl);
                nativeAdData.putString(LANDSCAPE_STATIC_IMAGE_URL_KEY, ad.landscapeStaticImageUrl);

                sendEvent(getReactApplicationContext(), onNativeResponseCb, nativeAdData);
            }

            @Override
            public void error(String message) {
                WritableMap params = Arguments.createMap();
                params.putString(ZONE_ID_KEY, zoneId);
                params.putString(ERROR_KEY, message);

                sendEvent(getReactApplicationContext(), onErrorCb, params);
            }
        });
    }

    @ReactMethod
    public void showAd(final String zoneId) {
        TapsellPlus.showAd(getCurrentActivity(), null, false, zoneId,
                new AdShowListener() {
                    @Override
                    public void onOpened() {
                        WritableMap params = Arguments.createMap();
                        params.putString(ZONE_ID_KEY, zoneId);

                        sendEvent(getReactApplicationContext(), onOpenedCb, params);
                    }

                    @Override
                    public void onClosed() {
                        WritableMap params = Arguments.createMap();
                        params.putString(ZONE_ID_KEY, zoneId);

                        sendEvent(getReactApplicationContext(), onClosedCb, params);
                    }

                    @Override
                    public void onRewarded() {
                        WritableMap params = Arguments.createMap();
                        params.putString(ZONE_ID_KEY, zoneId);

                        sendEvent(getReactApplicationContext(), onRewardedCb, params);
                    }

                    @Override
                    public void onError(String message) {
                        WritableMap params = Arguments.createMap();
                        params.putString(ZONE_ID_KEY, zoneId);
                        params.putString(ERROR_KEY, message);

                        sendEvent(getReactApplicationContext(), onShowErrorCb, params);
                    }
                });
    }

    @ReactMethod
    public void nativeAdClicked(String zoneId, String adId) {
        TapsellPlus.nativeBannerAdClicked(getCurrentActivity(), zoneId, adId);
    }

    private void sendEvent(ReactContext reactContext, String eventName, WritableMap params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}
