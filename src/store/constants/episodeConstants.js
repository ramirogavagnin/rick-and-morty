import { createConstants } from './constantsCreator';

export const GET_EPISODES = createConstants('GET_EPISODES');

const GET_EPOSIDES_INITIAL_STATE = {
    getEpisodesRequesting: false,
    getEpisodesFailure: false,
    getEpisodesMessage: '',
    episodes: {
        info: {
            prev: null,
            next: null,
        },
        results: [],
    },
};

export const EPISODE_INITIAL_STATE = {
    ...GET_EPOSIDES_INITIAL_STATE,
};
