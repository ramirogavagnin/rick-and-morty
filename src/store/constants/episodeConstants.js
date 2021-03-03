import {createConstants} from './constantsCreator';

const GET_EPISODES = createConstants('GET_EPISODES');

const GET_EPOSIDES_INITIAL_STATE = {
  getEpisodesRequesting: false,
  getEpisodesFailure: false,
  getEpisodesMessage: '',
  episodes: {
    info: {
      next: null,
    },
    results: [],
  },
};

const EPISODE_INITIAL_STATE = {
  ...GET_EPOSIDES_INITIAL_STATE,
};

export {GET_EPISODES, EPISODE_INITIAL_STATE};
