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
    dispatch(selectPartId(data.find(part => part.isRootAssembly)._id));
}

export const addPart = (part) => async (dispatch) => {
    const { data } = await request("POST", `/projects/id/${projectId}/parts`, part);
    dispatch({
        type: "ADD_PART",
        part: data,
    });
}

export const selectPartId = (partId) => (dispatch) => {
    dispatch({
        type: "SELECT_PART_ID",
        partId,
    });
}

export const updateStatus = (partId, status) => async (dispatch) => {
    await request("POST", `/parts/id/${partId}/status`, { status });
    dispatch({
        type: "UPDATE_STATUS",
        partId,
        status,
    });
}

export const setName = (partId, name) => async (dispatch) => {
    await request("POST", `/parts/id/${partId}/name`, { name });
    dispatch({
        type: "SET_NAME",
        partId,
        name,
    });
}

export const setDescription = (partId, description) => async (dispatch) => {
    await request("POST", `/parts/id/${partId}/description`, { description });
    dispatch({
        type: "SET_DESCRIPTION",
        partId,
        description,
    });
}

export const deletePart = (part) => async (dispatch) => {
    await request("DELETE", `/parts/id/${part._id}`);
    dispatch({
        type: "DELETE_PART",
        part,
    });
}

export function initialActions(dispatch) {
    dispatch(fetchProject());
    dispatch(loadParts());
}
