import { GET_CHARACTERS } from './characterConstants';
import { GET_LOCATIONS } from './locationConstants';

const entityEnums = {
    character: 'character',
    location: 'location',
    episode: 'episode',
};

const entityConstants = {
    character: GET_CHARACTERS,
    location: GET_LOCATIONS,
};

export { entityEnums, entityConstants };
