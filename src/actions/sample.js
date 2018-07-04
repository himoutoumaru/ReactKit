import * as actionTypes from '../constants/index';
const add = (data) => {
    return {
        type: actionTypes.SAMPLE_ADD,
        data
    }
};
export {add};