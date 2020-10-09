import {
    LANGUAGES_INITIAL_STATE,
    SET_TRANSLATIONS,
} from '../constants/languagesConstants';

export const languagesReducer = (state = LANGUAGES_INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TRANSLATIONS: {
            return { ...state, translations: action.payload };
        }
        default:
            return state;
    }
};
