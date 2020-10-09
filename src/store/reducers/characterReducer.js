import {
    CHARACTER_INITIAL_STATE,
    GET_CHARACTERS,
    CLEAR_CHARACTER_STATE,
} from '../constants/characterConstants';

export const characterReducer = (state = CHARACTER_INITIAL_STATE, action) => {
    switch (action.type) {
        /// GET CHARACTERS
        case GET_CHARACTERS.REQUEST: {
            return {
                ...state,
                getCharactersRequesting: true,
            };
        }
        case GET_CHARACTERS.SUCCESS: {
            return {
                ...state,
                getCharactersRequesting: false,
                characters: action.payload,
            };
        }
        case GET_CHARACTERS.FAILURE: {
            return {
                ...state,
                getCharactersRequesting: false,
                getCharactersFailure: true,
                getCharactersMessage: action.payload,
            };
        }
        case GET_CHARACTERS.RESET: {
            return {
                ...state,
                getCharactersRequesting: false,
                getCharactersFailure: false,
                getCharactersMessage: '',
            };
        }

        case CLEAR_CHARACTER_STATE: {
            return {
                ...state,
                ...CHARACTER_INITIAL_STATE,
            };
        }

        default:
            return state;
    }
};
