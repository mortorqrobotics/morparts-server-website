/* eslint-disable no-underscore-dangle */
// import update from "immutability-helper";

const changes = (state = [], action) => {
    switch (action.type) {
        case "LOAD_RECENT_CHANGES":
            return action.changes;
        default:
            return state;
    }
};

const assignments = (state = {}, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case "LOAD_ASSIGNMENTS":
            newState.assignments = action.data;
            return newState;
        default:
            return state;
    }
};

const selectedPartId = (state = null, action) => {
    switch (action.type) {
        case "SELECT_PART":
            return action.partId;
        default:
            return state;
    }
};

const pinnedPartIds = (state = [], action) => {
    switch (action.type) {
        case "PIN_PART":
            if (!state.includes(action.partId)) {
                return [action.partId].concat(state);
            }
            return state;
        case "UNPIN_PART":
            return state.filter(partId => partId !== action.partId);
        default:
            return state;
    }
};

export default {
    changes,
    assignments,
    selectedPartId,
    pinnedPartIds,
};
