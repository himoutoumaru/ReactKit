import * as actionTypes from '../constants/index';

const initialState = {
    count: 0
};
const sample = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAMPLE_ADD:
            state.count += 1;
            return Object.assign({}, state);;
        default:
            return state
    }
};

export default sample;
