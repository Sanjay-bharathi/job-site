import { FILTER_UPDATE } from "./actionTypes";

const initialState = {
    filteredLocations: ['Mumbai', 'Kolkatta', 'Delhi']
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FILTER_UPDATE:
            return { ...state, ...payload };

        default:
            return state;
    }
};
