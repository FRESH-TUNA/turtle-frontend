/**
 * This file contains utilities functions
 */
import axios from "axios";
import { AuthStore } from "@/stores";

import CONFIG from "@/turtleConfig";
import Urls from "@/consts/urls";
//import STATUS_CODES from "@/consts/statusCodes";

/**
 * External API Requesters
 */
const BaseApiRequester = (() => {
  const AxiosInstance = axios.create({
    timeout: CONFIG.API_TIMEOUT,
  });

  return {
    get: (url, config) => AxiosInstance.get(url, config),
    post: (url, data, config) => AxiosInstance.post(url, data, config),
    delete: (url, config) => AxiosInstance.delete(url, config),
    patch: (url, data, config) => AxiosInstance.patch(url, data, config),
    request: (config) => AxiosInstance.request(config),
  };
})();

const ApiRequester = (() => {
  const makeDefaultConfig = () => {
    return AuthUtil.setAccessTokenToConfig({ withCredentials: true });
  };

  const reRequestAtherTokenRefresh = (res) => {
    return AuthUtil.refreshAccessToken()
      .then(() => {
        return BaseApiRequester.request(AuthUtil.setAccessTokenToConfig(res.response.config));
      });
  };

  /**
   * response checker
   * 401 인 경우 token refresh 후 재요청
   */
  const responseChecker = (responsePromise) => {
    return (
      responsePromise
        .catch((err) => {
          /** http 상태코드가 P_001 (로그인 필요)이 아니면 에러를 다시 던진다. */
          if (!err.response || err.response.data.status.code !== "P_001") throw err;

          /** token을 재발행하여 다시 시도한다. */
          return reRequestAtherTokenRefresh(err);
        })
    );
  };

  return {
    get: (url, config) => responseChecker(BaseApiRequester.get(url, AuthUtil.setAccessTokenToConfig(config))),

    post: (url, data) => responseChecker(BaseApiRequester.post(url, data, makeDefaultConfig())),

    delete: (url) => responseChecker(BaseApiRequester.delete(url, makeDefaultConfig())),

    patch: (url, data) => responseChecker(BaseApiRequester.patch(url, data, makeDefaultConfig())),
  };
})();

/**
 * jwt token handling utils
 */
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
        AuthStore().setAccessToken(response.headers.Authorization);
        return response;
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

export { BaseApiRequester, ApiRequester, AuthUtil };
