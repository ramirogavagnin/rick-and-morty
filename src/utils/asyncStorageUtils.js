import AsyncStorage from '@react-native-community/async-storage';

export const getFromAsyncStorage = (key) => {
  return AsyncStorage.getItem(key);
};

export const setInAsyncStorage = (key, value) => {
  return AsyncStorage.setItem(key, value);
};

export const AsyncStorageEnum = {
  TOKEN: 'token',
  REFRESH_TOKEN: 'refreshToken',
};
