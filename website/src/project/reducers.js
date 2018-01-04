const project = ( state = {}, action) => {
    switch (action.type) {
        case "SET_PROJECT":
            return action.project;
        default:
            return state;
    }
}

const parts = ( state = [], action) => {
    switch (action.type) {
        case "LOAD_PARTS":
            return state.concat(action.parts);
        case "ADD_PART":
            return [action.part].concat(state);
        default:
            return state;
    }
}

export default {
    project,
    parts,
}
