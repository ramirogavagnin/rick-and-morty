import { createConstants } from './constantsCreator';

export const GET_LOCATIONS = createConstants('GET_LOCATIONS');

const GET_LOCATIONS_INITIAL_STATE = {
    getLocationsRequesting: false,
    getLocationsFailure: false,
    getLocationsMessage: '',
    locations: {
        info: {
            prev: null,
            next: null,
        },
        results: [],
    },
};

export const LOCATION_INITIAL_STATE = {
    ...GET_LOCATIONS_INITIAL_STATE,
};
