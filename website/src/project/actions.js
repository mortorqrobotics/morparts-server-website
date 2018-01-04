import { pageOptions } from "~/util";
import { request } from "~/util/ajax";

const projectId = pageOptions.projectId;

const fetchProject = () => async (dispatch) => {
    const { data } = await request("GET", `/projects/id/${projectId}`);
    dispatch({
        type: "SET_PROJECT",
        project: data,
    });
}

const loadParts = () => async (dispatch) => {
    const { data } = await request("GET",`/projects/id/${projectId}/parts`);
    dispatch({
        type: "LOAD_PARTS",
        parts: data,
    });
}

export const addPart = (part) => async (dispatch) => {
    const { data } = await request("POST", `/projects/id/${projectId}/parts`, part);
    dispatch({
        type: "ADD_PART",
        part: data,
    });
}

export function initialActions(dispatch) {
    dispatch(fetchProject());
    dispatch(loadParts());
}
