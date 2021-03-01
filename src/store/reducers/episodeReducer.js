import {EPISODE_INITIAL_STATE, GET_EPISODES} from '@constants/episodeConstants';

export const episodeReducer = (state = EPISODE_INITIAL_STATE, action) => {
  switch (action.type) {
    /// GET EPISODES
    case GET_EPISODES.REQUEST: {
      return {
        ...state,
        getEpisodesRequesting: true,
      };
    }
    case GET_EPISODES.SUCCESS: {
      return {
        ...state,
        getEpisodesRequesting: false,
        episodes: action.payload,
      };
    }
    case GET_EPISODES.FAILURE: {
      return {
        ...state,
        getEpisodesRequesting: false,
        getEpisodesFailure: true,
        getEpisodesMessage: action.payload,
      };
    }
    case GET_EPISODES.RESET: {
      return {
        ...state,
        getEpisodesRequesting: false,
        getEpisodesFailure: false,
        getEpisodesMessage: '',
      };
    }

    default:
      return state;
  }
};
