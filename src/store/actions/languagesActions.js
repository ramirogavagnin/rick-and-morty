import {SET_TRANSLATIONS} from '@constants/languagesConstants';

export const setTranslationsAction = (payload) => ({
  type: SET_TRANSLATIONS,
  payload,
});
