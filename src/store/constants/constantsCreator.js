const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const RESET = 'RESET';

export const createConstants = base => {
    return [REQUEST, SUCCESS, FAILURE, RESET].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
};
