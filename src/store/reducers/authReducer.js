import { AUTH_INITIAL_STATE, IS_AUTH } from '../constants/authConstants';

export const authReducer = (state = AUTH_INITIAL_STATE, action) => {
    switch (action.type) {
        case IS_AUTH: {
            return { ...state, isAuth: action.payload };
        }
        default:
            return state;
    }
};
