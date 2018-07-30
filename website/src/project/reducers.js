import update from "react/lib/update";

const project = (state = {}, action) => {
    switch (action.type) {
        case "SET_PROJECT":
            return action.project;
        default:
            return state;
    }
}

const parts = (state = [], action) => {
    let newState = [];
    let index;
    let parentIndex;
    let childIndex;
    switch (action.type) {
        case "LOAD_PARTS":
            return state.concat(action.parts);
        case "ADD_PART":
            newState = state.concat(action.part);
            index = newState.findIndex(part => part._id === action.part.parent);
            if (action.part.parent) {
                newState = update(newState, {
                    [index]: {
                        children: {
                            parts: { $push: [action.part._id] }
                        }
                    }
                })
            }
            return newState;
        case "UPDATE_STATUS":
            index = state.findIndex(part => part._id === action.partId);
            return update(state, {
                [index]: {
                    status: { $set: action.status }
                }
            });
        case "SET_NAME":
            index = state.findIndex(part => part._id === action.partId);
            return upate(state, {
                [index]: {
                    name: { $set: action.name }
                }
            });
        case "SET_DESCRIPTION":
            index = state.findIndex(part => part._id === action.partId);
            return upate(state, {
                [index]: {
                    description: { $set: action.name }
                }
            });
        case "DELETE_PART":
            newState = state.filter(part => part._id !== action.part._id);
            if (action.part.parent) {
                parentIndex = newState.findIndex(part => part._id === action.part.parent);
                childIndex = newState[parentIndex].children.parts.findIndex(part => part === action.part._id);
                newState = update(newState, {
                    [parentIndex]: {
                        children: {
                            parts: { $splice: [[childIndex, 1]] }
                        }
                    }
                });
            }
            return newState;
        default:
            return state;
    }
}

const selectedPart = (state = null, action) => {
    switch (action.type) {
        case "SELECT_PART":
            return action.part;
        default:
            return state;
    }
}

export default {
    project,
    parts,
    selectedPart,
}
