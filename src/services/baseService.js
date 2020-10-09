import axios from 'axios';
import ENV from 'react-native-config';
// import {
//     getFromAsyncStorage,
//     AsyncStorageEnum,
// } from '../utils/asyncStorageUtils';
// const AUTHORIZATION_HEADER = 'Authorization'; TODO: Logic for Token and Refresh Token

export const publicService = axios.create({
    baseURL: `${ENV.APP_BACKEND_PROTOCOL}${ENV.APP_BACKEND_HOST}`,
    timeout: ENV.TIMEOUT || 10000,
    headers: { 'content-type': `application/json` },
});

export const baseService = axios.create({
    baseURL: `${ENV.APP_BACKEND_PROTOCOL}${ENV.APP_BACKEND_HOST}`,
    timeout: ENV.TIMEOUT || 10000,
    headers: { 'content-type': `application/json` },
});

/* const setAuthorizationInterceptors = axiosInstance => { TODO: Logic for Token and Refresh Token
    axiosInstance.interceptors.request.use(async request => {
        const accessToken = await getFromAsyncStorage(AsyncStorageEnum.TOKEN);

        if (accessToken) {
            request.headers.common[
                AUTHORIZATION_HEADER
            ] = `Bearer ${accessToken}`;
        }
        return request;
    });

    axiosInstance.interceptors.response.use(
        response => {
            return response;
        },
        async error => {
            const originalRequest = error.config;
            if (error.response) {
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    const existingRefreshToken = await getFromAsyncStorage(
                        AsyncStorageEnum.REFRESH_TOKEN,
                    );
                    try {
                        const refreshTokenRes = await refreshToken(
                            existingRefreshToken,
                        );
                        const { access_token, refresh_token } = refreshTokenRes;
                        await setInAsyncStorage(
                            AsyncStorageEnum.TOKEN,
                            access_token,
                        );
                        await setInAsyncStorage(
                            AsyncStorageEnum.REFRESH_TOKEN,
                            refresh_token,
                        );

                        axiosInstance.defaults.headers.common[
                            AUTHORIZATION_HEADER
                        ] = `Bearer ${access_token}`;

                        return axios(originalRequest);
                    } catch (e) {
                        return Promise.reject(e);
                    }
                }
            }
            return Promise.reject(error);
        },
    );
};

setAuthorizationInterceptors(baseService); */
