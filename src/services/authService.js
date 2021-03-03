import {publicService, privateService} from './baseService';
import translationsKeys from '@themes/translations/translationsKeys';

const {requestNotValid} = translationsKeys.error;

export const login = async (form) => {
  try {
    const {data} = await publicService.post('/auth/login', form);
    return data;
  } catch (e) {
    throw {
      message: e?.response?.data?.error || requestNotValid,
    };
  }
};

export const getUser = async () => {
  try {
    const {data} = await privateService.get('/users/me');
    return data;
  } catch (e) {
    throw {
      message: e?.response?.data?.error || requestNotValid,
    };
  }
};
