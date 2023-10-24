import Urls from "@/const/apiTemplate";
import STATUS_CODES from "@/const/statusCodes";
import {AuthStore} from "@/store";
import {BaseApiRequester} from "@/util/apiRequester";

const AuthUtil = {
    /**
     * refresh access token
     * if success, return true
     * else return false
     */
    refreshAccessToken: () => {
        const config = { withCredentials: true };

        return BaseApiRequester.get(Urls.MAIN_API.AUTH.REFRESH, AuthUtil.setAccessTokenToConfig(config))
            .then((response) => {
                if (response.data.code === STATUS_CODES.OK) {
                    AuthStore.setAccessToken(response);
                    return true;
                }
                return false;
            })
            .catch(() => {
                return false;
            });
    },

    /**
     * set accessToken to headers of config and return
     */
    setAccessTokenToConfig: (config) => {
        const authStore = AuthStore();
        if (!config) config = {};

        if (authStore.hasAccessToken) {
            config.headers = {
                Authorization: `${authStore.accessToken}`,
            };
        }
        return config;
    },
};

export default AuthUtil;