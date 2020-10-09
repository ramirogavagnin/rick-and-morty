import { IS_AUTH } from '../constants/authConstants';
import { CLEAR_CHARACTER_STATE } from '../constants/characterConstants';

export const isAuthAction = payload => ({
    type: IS_AUTH,
    payload,
});

export const logoutAction = payload => {
    return dispatch => {
        dispatch({ type: CLEAR_CHARACTER_STATE });
        dispatch({ type: IS_AUTH, payload });
    };
};
