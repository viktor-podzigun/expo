export declare type FacebookAuth = {
    /**
     * Access token for the authenticated session. This'll provide access to use with Facebook Graph API.
     */
    token: string;
    /**
     * The ID of the user.
     */
    userID: string;
    /**
     * Application ID used to initialize the FBSDK app.
     */
    appID: string;
    /**
     * List of granted permissions.
     */
    permissions?: string[];
    /**
     * List of requested permissions that the user has declined.
     */
    declinedPermissions?: string[];
    /**
     * List of permissions that were expired with this access token.
     */
    expiredPermissions?: string[];
    /**
     * Gets the time in milliseconds at which the `token` expires.
     */
    expires: number;
    /**
     * Time in milliseconds at which the current user data access expires.
     */
    dataAccessExpires: number;
    /**
     * The last time in milliseconds the `token` was refreshed (or when it was first obtained).
     */
    refresh?: number;
    /**
     * Android: Indicates how this `token` was obtained.
     */
    tokenSource?: string;
    /**
     * A valid raw signed request as a string.
     */
    signedRequest?: string;
    /**
     * A website domain within the Graph API.
     * https://developers.facebook.com/docs/graph-api/reference/v5.0/domain
     */
    graphDomain?: string;
};
export declare type FacebookLoginResult = {
    type: 'cancel';
} | ({
    type: 'success';
} & FacebookAuth);
export declare type FacebookOptions = {
    permissions?: string[];
};
export declare type SDKScriptURLOptions = {
    /**
     * Android: Sets the base Facebook domain to use when making Web requests.
     * Defaults to: 'connect.facebook.net'
     */
    domain?: string;
};
export declare type SDKInitOptions = {
    /**
     * Application ID used to initialize the FBSDK app.
     *
     * On native if you don't provide this, Facebook SDK will try to use `appId` from native
     * app resources (which in standalone apps you would define in `app.json`, in Expo client are unavailable, and in bare you configure yourself according to Facebook setup documentation for [iOS](https://developers.facebook.com/docs/facebook-login/ios#4--configure-your-project) and [Android](https://developers.facebook.com/docs/facebook-login/android#manifest)).
     * If it fails to find one, the promise will be rejected.
     */
    appId?: string;
    /**
     * Selects the version of FBSDK to use.
     *
     * https://developers.facebook.com/docs/javascript/reference/FB.init/v5.0
     */
    version?: string;
    /**
     * Sets whether Facebook SDK should log app events. App events involve app eg. installs, app launches (more info [here](https://developers.facebook.com/docs/app-events/getting-started-app-events-android/#auto-events) and [here](https://developers.facebook.com/docs/app-events/getting-started-app-events-ios#auto-events)).
     * In some cases, you may want to disable or delay the collection of automatically logged events, such as to obtain user consent or fulfill legal obligations.
     * This method corresponds to [this](https://developers.facebook.com/docs/app-events/getting-started-app-events-ios#disable-auto-events) and [this](https://developers.facebook.com/docs/app-events/getting-started-app-events-android/#disable-auto-events) native SDK methods.
     */
    autoLogAppEvents?: boolean;
};
export declare type NativeInitOptions = {
    /**
     * An optional Facebook App Name argument for iOS and Android.
     */
    appName?: string;
};
export declare type InitOptions = SDKScriptURLOptions & SDKInitOptions & NativeInitOptions;
