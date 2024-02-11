import axios from "axios";

// @ts-ignore TS(2307) FIXME: Cannot find module 'change-case/keys' or its corre... Remove this comment to see the full error message
import * as changeCaseKeys from "change-case/keys";

/** Axios instance */
export const $http = axios.create({
  baseURL: "https://e.star.dev.hkedcity.net",
  withCredentials: true,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  transformResponse: [
    // @ts-ignore TS(2488) FIXME: Type 'AxiosResponseTransformer | AxiosResponseTran... Remove this comment to see the full error message
    ...axios.defaults.transformResponse,
    (_) => changeCaseKeys.camelCase(_, Number.MAX_SAFE_INTEGER),
  ],
  transformRequest: [
    (_) => changeCaseKeys.snakeCase(_, Number.MAX_SAFE_INTEGER),

    // @ts-ignore TS(2488) FIXME: Type 'AxiosRequestTransformer | AxiosRequestTransf... Remove this comment to see the full error message
    ...axios.defaults.transformRequest,
  ],
});
