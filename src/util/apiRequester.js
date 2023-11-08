/**
 * This file contains utilities functions
 */
import axios from "axios";
import CONFIG from "@/config";

import STATUS_CODES from "@/const/statusCodes";
import ResponseUtil from "@/util/responseUtil";
import AuthUtil from "@/util/authUtil";
import { networkCommonErrorHandler } from "@/util/errorHandler";

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
    put: (url, data, config) => AxiosInstance.put(url, data, config),
    request: (config) => AxiosInstance.request(config),
  };
})();

const ApiRequester = (() => {
  const makeDefaultConfig = () => {
    return AuthUtil.setAccessTokenToConfig({ withCredentials: true });
  };

  const reRequestAfterTokenRefresh = (err) => {
    return AuthUtil.refreshAccessToken().then((refreshResult) => {
      if (!refreshResult)
        throw ResponseUtil.dataFromErr(err);
      else
        return BaseApiRequester.request(AuthUtil.setAccessTokenToConfig(ResponseUtil.configFromErr(err)));
    });
  };

  /**
   * response filter
   * 401 인 경우 token refresh 후 재요청
   */
  const apiResponseFilter = (responsePromise) => {
    return (
        responsePromise
            /**
             * 응답이 정상인 경우
             */
            .then((res) => { return ResponseUtil.data(res); })

            .catch((err) => {
              /** http 상태코드가 401이 아니면 에러를 다시 던져서 예외를 common error handler에 처리한다 */
              if (ResponseUtil.statusCodeFromErr(err) !== STATUS_CODES.NOT_AUTHENTICATED)
                throw networkCommonErrorHandler(err);

              /** token을 재발행하여 다시 시도한다. */
              return reRequestAfterTokenRefresh(err);
            })
    );
  };

  return {
    get: (url, config) => apiResponseFilter(BaseApiRequester.get(url, AuthUtil.setAccessTokenToConfig(config))),

    post: (url, data) => apiResponseFilter(BaseApiRequester.post(url, data, makeDefaultConfig())),

    put: (url, data) => apiResponseFilter(BaseApiRequester.put(url, data, makeDefaultConfig())),

    delete: (url) => apiResponseFilter(BaseApiRequester.delete(url, makeDefaultConfig())),

    patch: (url, data) => apiResponseFilter(BaseApiRequester.patch(url, data, makeDefaultConfig()))
  };
})();

/**
 * jwt token handling utils
 */

export { BaseApiRequester, ApiRequester };
