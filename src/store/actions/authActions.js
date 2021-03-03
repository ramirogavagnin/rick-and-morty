import {LOGIN, GET_USER, CLEAR_AUTH_STATE} from '@constants/authConstants';
import {CLEAR_CHARACTER_STATE} from '@constants/characterConstants';
import {login, getUser} from '@services/authService';
import {
  setInAsyncStorage,
  deleteFromAsyncStorage,
  AsyncStorageEnum,
} from '@utils/asyncStorageUtils';

export const loginAction = (form) => {
  return async (dispatch) => {
    try {
      dispatch({type: LOGIN.REQUEST});
      const response = await login(form);
      await setInAsyncStorage(AsyncStorageEnum.TOKEN, response?.token);
      dispatch({
        type: LOGIN.SUCCESS,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: LOGIN.FAILURE,
        payload: e.message,
      });
    } finally {
      dispatch({type: LOGIN.RESET});
    }
  };
};

export const logoutAction = () => {
  return async (dispatch) => {
    await deleteFromAsyncStorage(AsyncStorageEnum.TOKEN);
    dispatch({type: CLEAR_AUTH_STATE});
    dispatch({type: CLEAR_CHARACTER_STATE});
  };
};

export const getUserAction = () => {
  return async (dispatch) => {
    try {
      dispatch({type: GET_USER.REQUEST});
      const response = await getUser();
      await setInAsyncStorage(AsyncStorageEnum.TOKEN, response?.token);
      dispatch({
        type: GET_USER.SUCCESS,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: GET_USER.FAILURE,
        payload: e.message,
      });
    } finally {
      dispatch({type: GET_USER.RESET});
    }
  };
};
