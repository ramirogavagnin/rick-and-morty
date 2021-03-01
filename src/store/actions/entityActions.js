import {entityConstants} from '@constants/entityConstants';

import {getEntity} from '@services/entityService';
import {isArray} from '@utils/helpers';

import translationsKeys from '@themes/translations/translationsKeys';
const {requestNotValid} = translationsKeys.error;

const requetingConstants = {
  character: 'getCharactersRequesting',
  location: 'getLocationsRequesting',
  episode: 'getEpisodesRequesting',
};

export const getEntityAction = (entity, prev, next, previousResults) => {
  return async (dispatch, getState) => {
    if (getState()[entity][requetingConstants[entity]]) return;

    try {
      dispatch({type: entityConstants[entity].REQUEST});

      let pageNumber = '1';

      if (prev || next) pageNumber = next.charAt(next?.length - 1);

      const entityResponse = await getEntity(entity, pageNumber);
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
