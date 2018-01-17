import update from "react/lib/update";

const project = ( state = {}, action) => {
    switch (action.type) {
        case "SET_PROJECT":
            return action.project;
        default:
            return state;
    }
}

const parts = ( state = [], action) => {
    let newState = [];
    let index;
    switch (action.type) {
        case "LOAD_PARTS":
            return state.concat(action.parts);
        case "ADD_PART":
            index = state.findIndex(part => part._id === action.part.parent);
            if (action.part.isAssembly) {
                newState = update(state, {
                    [index]: {
                        childAssemblies: {
                            $push: [action.part._id]
                        }
                    }
                })
            } else {
                newState = update(state, {
                    [index]: {
                        childParts: {
                            $push: [action.part._id]
                        }
                    }
                })
            }
            newState = [action.part].concat(newState);
            return newState;
        default:
            return state;
    }
}

export default {
    project,
    parts,
}
