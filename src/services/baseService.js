import ENV from 'react-native-config';
import axios from 'axios';
import {isString, isNull} from 'lodash';
import {getFromAsyncStorage, AsyncStorageEnum} from '@utils/asyncStorageUtils';

const AUTHORIZATION_HEADER = 'Authorization';

export const publicService = axios.create({
  baseURL: ENV.API_URL,
  timeout: 10000,
  headers: {'content-type': `application/json`},
});

export const privateService = axios.create({
  baseURL: ENV.API_URL,
  timeout: 10000,
  headers: {'content-type': `application/json`},
});

const setAuthorizationInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.request.use(async (request) => {
    const accessToken = await getFromAsyncStorage(AsyncStorageEnum.TOKEN);

    if (isString(accessToken) && !isNull(accessToken)) {
      request.headers.common[AUTHORIZATION_HEADER] = `Bearer ${accessToken}`;
    }
    return request;
  });
};

setAuthorizationInterceptors(privateService);
