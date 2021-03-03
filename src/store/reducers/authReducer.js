import {
  AUTH_INITIAL_STATE,
  LOGIN,
  GET_USER,
  CLEAR_AUTH_STATE,
} from '@constants/authConstants';

export const authReducer = (state = AUTH_INITIAL_STATE, action) => {
  switch (action.type) {
    /// LOGIN
    case LOGIN.REQUEST: {
      return {
        ...state,
        loginRequesting: true,
      };
    }
    case LOGIN.SUCCESS: {
      return {
        ...state,
        loginRequesting: false,
        user: action.payload,
      };
    }
    case LOGIN.FAILURE: {
      return {
        ...state,
        loginRequesting: false,
        loginFailure: true,
        loginMessage: action.payload,
      };
    }
    case LOGIN.RESET: {
      return {
        ...state,
        loginRequesting: false,
        loginFailure: false,
        loginMessage: '',
      };
    }

    /// GET USER
    case GET_USER.REQUEST: {
      return {
        ...state,
        getUserRequesting: true,
      };
    }
    case GET_USER.SUCCESS: {
      return {
        ...state,
        getUserRequesting: false,
        user: action.payload,
      };
    }
    case GET_USER.FAILURE: {
      return {
        ...state,
        getUserRequesting: false,
        getUserFailure: true,
        getUserMessage: action.payload,
      };
    }
    case GET_USER.RESET: {
      return {
        ...state,
        getUserRequesting: false,
        getUserFailure: false,
        getUserMessage: '',
      };
    }

    case CLEAR_AUTH_STATE: {
      return {
        ...state,
        ...AUTH_INITIAL_STATE,
      };
    }
    default:
      return state;
  }
};
