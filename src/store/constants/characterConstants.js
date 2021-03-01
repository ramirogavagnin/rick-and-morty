import {createConstants} from './constantsCreator';

export const GET_CHARACTERS = createConstants('GET_CHARACTERS');
export const CLEAR_CHARACTER_STATE = 'CLEAR_CHARACTER_STATE';

const GET_CHARACTERS_INITIAL_STATE = {
  getCharactersRequesting: false,
  getCharactersFailure: false,
  getCharactersMessage: '',
  characters: {
    info: {
      prev: null,
      next: null,
    },
    results: [],
  },
};

export const CHARACTER_INITIAL_STATE = {
  ...GET_CHARACTERS_INITIAL_STATE,
};
