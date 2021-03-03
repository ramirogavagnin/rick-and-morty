import {createConstants} from './constantsCreator';

const GET_CHARACTERS = createConstants('GET_CHARACTERS');
const CLEAR_CHARACTER_STATE = 'CLEAR_CHARACTER_STATE';

const GET_CHARACTERS_INITIAL_STATE = {
  getCharactersRequesting: false,
  getCharactersFailure: false,
  getCharactersMessage: '',
  characters: {
    info: {
      next: null,
    },
    results: [],
  },
};

const CHARACTER_INITIAL_STATE = {
  ...GET_CHARACTERS_INITIAL_STATE,
};

export {GET_CHARACTERS, CLEAR_CHARACTER_STATE, CHARACTER_INITIAL_STATE};
