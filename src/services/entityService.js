import { publicService } from './baseService';
import translationsKeys from '../themes/translations/translationsKeys';

const { requestNotValid } = translationsKeys.error;

export const getEntity = async (entity, pageNumber) => {
    try {
        const { data } = await publicService.get(
            `${entity}?page=${pageNumber}`,
        );
        return data;
    } catch (e) {
        throw {
            message: requestNotValid,
        };
    }
};
