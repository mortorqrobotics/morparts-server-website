const projects = (state = [], action) => {
    switch (action.type) {
        case "LOAD_PROJECTS":
            return state.concat(action.projects);
        case "ADD_PROJECT":
            return [action.project].concat(state);
        default:
            return state;
    }
};

export default {
    projects,
};
