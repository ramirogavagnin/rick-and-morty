import {createConstants} from './constantsCreator';

const GET_LOCATIONS = createConstants('GET_LOCATIONS');

const GET_LOCATIONS_INITIAL_STATE = {
  getLocationsRequesting: false,
  getLocationsFailure: false,
  getLocationsMessage: '',
  locations: {
    info: {
      next: null,
    },
    results: [],
  },
};

const LOCATION_INITIAL_STATE = {
  ...GET_LOCATIONS_INITIAL_STATE,
};

export {GET_LOCATIONS, LOCATION_INITIAL_STATE};
