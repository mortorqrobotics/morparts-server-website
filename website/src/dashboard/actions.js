import { request } from "~/util/ajax";

export const addProject = (project) => async (dispatch) => {
    const { data } = await request("POST", "/projects", project);
    dispatch({
        type: "ADD_PROJECT",
        project: data,
    });
}

const loadProjects = () => async (dispatch) => {
    const { data } = await request("GET", "/projects");
    dispatch({
        type: "LOAD_PROJECTS",
        projects: data,
    });
}

export function initialActions(dispatch) {
    dispatch(loadProjects());
}
