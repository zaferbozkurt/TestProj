import axios from 'axios';

import APP from '@constants/App';

import Loading from './Loading';
import Helper from './Helper';
import DropdownAlert from './DropdownAlert';

const DEFAULTS = {
  TIMEOUT: 30000,
  HEADERS: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json'
  }
};

const getUrl = (url, endpoint, { queryStringParams } = {}) => {
  let queryString;
  if (queryStringParams) {
    queryString = Helper.encodeQueryString(queryStringParams);
  }

  return `${url}/${endpoint}${queryString ? `?${queryString}` : ''}`;
};

const getHeaders = (headers, url) => {
  const newHeaders = { ...DEFAULTS.HEADERS, ...headers };

  return newHeaders;
};

const handleHttpError = (error, url) => {
  DropdownAlert.show(
    'error',
    'Teknik bir aksaklık sebebi ile işleminiz gerçekleştirilemedi. Lütfen daha sonra tekrar deneyiniz.'
  );
};

const post = (
  endpoint,
  params = {},
  {
    url = APP.SERVER_URL,
    headers = {},
    timeout = DEFAULTS.TIMEOUT,
    isShowLoading = true,
    isShowConsoleLog = true,
    isShowErrorMessage = false,
    isReturnAllResponse = false
  } = {}
) => {
  return new Promise((resolve, reject) => {
    Loading.show({ isActive: isShowLoading, name: endpoint });

    const newUrl = getUrl(url, endpoint);
    const newHeaders = getHeaders(headers, url);

    axios
      .post(newUrl, params, {
        headers: newHeaders,
        timeout: timeout
      })
      .then((res) => {
        Loading.hide({ isActive: isShowLoading, name: endpoint });

        if (res.status === 200 || res.status === 201) {
          return resolve(isReturnAllResponse ? res : res.data);
        } else {
          return reject(res);
        }
      })
      .catch((error) => {
        Loading.hide({ isActive: isShowLoading, name: endpoint });

        handleHttpError(error, url);

        return reject(error);
      });
  });
};

const get = (
  endpoint,
  params = '',
  {
    url = APP.SERVER_URL,
    headers = {},
    timeout = DEFAULTS.TIMEOUT,
    isShowLoading = true,
    isShowConsoleLog = true,
    isShowErrorMessage = false,
    isReturnAllResponse = false
  } = {}
) => {
  return new Promise((resolve, reject) => {
    Loading.show({ isActive: isShowLoading, name: endpoint });

    const newUrl = getUrl(url, endpoint, { queryStringParams: params });
    const newHeaders = getHeaders(headers, url);

    axios
      .get(newUrl, {
        headers: newHeaders,
        timeout: timeout
      })
      .then((res) => {
        Loading.hide({ isActive: isShowLoading, name: endpoint });

        if (res.status === 200 || res.status === 201) {
          return resolve(isReturnAllResponse ? res : res.data);
        } else {
          return reject(res);
        }
      })
      .catch((error) => {
        Loading.hide({ isActive: isShowLoading, name: endpoint });

        handleHttpError(error, url);

        return reject(error);
      });
  });
};

const put = (
  endpoint,
  params = {},
  {
    url = APP.SERVER_URL,
    headers = {},
    timeout = DEFAULTS.TIMEOUT,
    isShowLoading = true,
    isShowConsoleLog = true,
    isShowErrorMessage = false,
    isReturnAllResponse = false
  } = {}
) => {
  return new Promise((resolve, reject) => {
    Loading.show({ isActive: isShowLoading, name: endpoint });

    const newUrl = getUrl(url, endpoint);
    const newHeaders = getHeaders(headers, url);

    axios
      .put(newUrl, params, {
        headers: newHeaders,
        timeout: timeout
      })
      .then((res) => {
        Loading.hide({ isActive: isShowLoading, name: endpoint });

        if (res.status === 200 || res.status === 201) {
          return resolve(isReturnAllResponse ? res : res.data);
        } else {
          return reject(res);
        }
      })
      .catch((error) => {
        Loading.hide({ isActive: isShowLoading, name: endpoint });

        handleHttpError(error, url);

        return reject(error);
      });
  });
};

const deleteService = (
  endpoint,
  params = {},
  {
    url = APP.SERVER_URL,
    headers = {},
    timeout = DEFAULTS.TIMEOUT,
    isShowLoading = true,
    isShowConsoleLog = true,
    isShowErrorMessage = false,
    isReturnAllResponse = false
  } = {}
) => {
  return new Promise((resolve, reject) => {
    Loading.show({ isActive: isShowLoading, name: endpoint });

    const newUrl = getUrl(url, endpoint);
    const newHeaders = getHeaders(headers, url);

    axios
      .delete(newUrl, {
        headers: newHeaders,
        timeout: timeout,
        data: params
      })
      .then((res) => {
        Loading.hide({ isActive: isShowLoading, name: endpoint });

        if (res.status === 200 || res.status === 201) {
          return resolve(isReturnAllResponse ? res : res.data);
        } else {
          return reject(res);
        }
      })
      .catch((error) => {
        Loading.hide({ isActive: isShowLoading, name: endpoint });

        handleHttpError(error, url);

        return reject(error);
      });
  });
};

export default {
  get,
  post,
  put,
  delete: deleteService
};
