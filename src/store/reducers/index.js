import { combineReducers } from 'redux';

import { authReducer } from '../reducers/authReducer';
import { languagesReducer } from '../reducers/languagesReducer';
import { characterReducer } from '../reducers/characterReducer';
import { locationReducer } from '../reducers/locationReducer';
import { episodeReducer } from '../reducers/episodeReducer';

const reducers = {
    auth: authReducer,
    languages: languagesReducer,
    character: characterReducer,
    location: locationReducer,
    episode: episodeReducer,
};

const allReducers = combineReducers(reducers);

export default allReducers;
