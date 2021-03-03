import {createConstants} from './constantsCreator';
const LOGIN = createConstants('LOGIN');
const GET_USER = createConstants('GET_USER');
const CLEAR_AUTH_STATE = 'CLEAR_AUTH_STATE';

const GET_USER_INITIAL_STATE = {
  getUserRequesting: false,
  getUserFailure: false,
  getUserMessage: '',
  user: {
    token: null,
  },
};

const AUTH_INITIAL_STATE = {
  loginRequesting: false,
  loginFailure: false,
  loginMessage: '',
  ...GET_USER_INITIAL_STATE,
};

export {LOGIN, GET_USER, CLEAR_AUTH_STATE, AUTH_INITIAL_STATE};
