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
    switch (action.type) {
        case "LOAD_PARTS":
            return state.concat(action.parts);
        case "ADD_PART":
            newState = [action.part].concat(state);
            index = newState.findIndex(part => part._id === action.part.parent);
            if (action.part.parent) {
                if (action.part.isAssembly) {
                    newState = update(newState, {
                        [index]: {
                            childAssemblies: {
                                $push: [action.part._id]
                            }
                        }
                    })
                } else {
                    newState = update(newState, {
                        [index]: {
                            childParts: {
                                $push: [action.part._id]
                            }
                        }
                    })
                }
            }
            return newState;
        case "UPDATE_STATUS":
            index = state.findIndex(part => part._id === action.partId);
            return update(state, {
                [index]: {
                    status: { $set: action.status }
                }
            });
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
