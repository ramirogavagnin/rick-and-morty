import ENV from 'react-native-config';
import {publicService} from './baseService';
import translationsKeys from '@themes/translations/translationsKeys';

const {requestNotValid} = translationsKeys.error;

const characterUrl = `${ENV.RICK_AND_MORTY_API}/character`;

export const getEntity = async (endpoint) => {
  try {
    const {data} = await publicService.get(null, {
      baseURL: endpoint || characterUrl,
    });
    return data;
  } catch (e) {
    throw {
      message: requestNotValid,
    };
  }
};
