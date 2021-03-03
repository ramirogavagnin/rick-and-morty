import AsyncStorage from '@react-native-community/async-storage';

export const getFromAsyncStorage = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    return null;
  }
};

export const setInAsyncStorage = async (key, value) => {
  return await AsyncStorage.setItem(key, value);
};

export const deleteFromAsyncStorage = async (key) => {
  return await AsyncStorage.removeItem(key);
};

export const AsyncStorageEnum = {
  TOKEN: 'token',
  REFRESH_TOKEN: 'refreshToken',
};
