import {
  LOCATION_INITIAL_STATE,
  GET_LOCATIONS,
} from '@constants/locationConstants';

export const locationReducer = (state = LOCATION_INITIAL_STATE, action) => {
  switch (action.type) {
    /// GET LOCATIONS
    case GET_LOCATIONS.REQUEST: {
      return {
        ...state,
        getLocationsRequesting: true,
      };
    }
    case GET_LOCATIONS.SUCCESS: {
      return {
        ...state,
        getLocationsRequesting: false,
        locations: action.payload,
      };
    }
    case GET_LOCATIONS.FAILURE: {
      return {
        ...state,
        getLocationsRequesting: false,
        getLocationsFailure: true,
        getLocationsMessage: action.payload,
      };
    }
    case GET_LOCATIONS.RESET: {
      return {
        ...state,
        getLocationsRequesting: false,
        getLocationsFailure: false,
        getLocationsMessage: '',
      };
    }

    default:
      return state;
  }
};
