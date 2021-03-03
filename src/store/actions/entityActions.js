import ENV from 'react-native-config';
import {isArray} from 'lodash';
import {entityConstants} from '@constants/entityConstants';

import {getEntity} from '@services/entityService';

import translationsKeys from '@themes/translations/translationsKeys';
const {requestNotValid} = translationsKeys.error;

export const getEntityAction = (entity, next, previousResults) => {
  return async (dispatch) => {
    try {
      dispatch({type: entityConstants[entity].REQUEST});

      const entityResponse = await getEntity(next);
      const currentResults = entityResponse?.results;

      if (isArray(currentResults) && isArray(previousResults)) {
        const results = [...previousResults, ...currentResults];
        dispatch({
          type: entityConstants[entity].SUCCESS,
          payload: {...entityResponse, results},
        });
      } else
        dispatch({
          type: entityConstants[entity].FAILURE,
          payload: requestNotValid,
        });
    } catch (e) {
      dispatch({
        type: entityConstants[entity].FAILURE,
        payload: e.message,
      });
    } finally {
      dispatch({type: entityConstants[entity].RESET});
    }
  };
};
