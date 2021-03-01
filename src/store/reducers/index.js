import {combineReducers} from 'redux';

import {authReducer} from './authReducer';
import {languagesReducer} from './languagesReducer';
import {characterReducer} from './characterReducer';
import {locationReducer} from './locationReducer';
import {episodeReducer} from './episodeReducer';

const reducers = {
  auth: authReducer,
  languages: languagesReducer,
  character: characterReducer,
  location: locationReducer,
  episode: episodeReducer,
};

const allReducers = combineReducers(reducers);

export default allReducers;
