/* eslint-disable no-underscore-dangle */
import { pageOptions } from "~/util";
import { request } from "~/util/ajax";

const { projectId } = pageOptions;

const fetchProject = () => async dispatch => {
    const { data } = await request("GET", `/projects/id/${projectId}`);
    dispatch({
        type: "SET_PROJECT",
        project: data,
    });
};

export const selectPart = partId => dispatch => {
    dispatch({
        type: "SELECT_PART",
        partId,
    });
};

const loadParts = () => async dispatch => {
    const { data } = await request("GET", `/projects/id/${projectId}/parts`);
    dispatch({
        type: "LOAD_PARTS",
        parts: data,
    });
    dispatch(selectPart(data.find(part => part.isRootAssembly)._id));
};

export const addPart = part => async dispatch => {
    const { req } = await request(
        "POST",
        `/projects/id/${projectId}/parts`,
        part,
    );
    dispatch({
        type: "ADD_PART",
        part: req,
    });
};

export const pinPart = partId => dispatch => {
    dispatch({
        type: "PIN_PART",
        partId,
    });
};

export const unpinPart = partId => dispatch => {
    dispatch({
        type: "UNPIN_PART",
        partId,
    });
};

export const updateStatus = (partId, status) => async dispatch => {
    await request("POST", `/parts/id/${partId}/status`, { status });
    dispatch({
        type: "UPDATE_STATUS",
        partId,
        status,
    });
};

export const setName = (partId, name) => async dispatch => {
    await request("POST", `/parts/id/${partId}/name`, { name });
    dispatch({
        type: "SET_NAME",
        partId,
        name,
    });
};

export const setDescription = (partId, description) => async dispatch => {
    await request("POST", `/parts/id/${partId}/description`, { description });
    dispatch({
        type: "SET_DESCRIPTION",
        partId,
        description,
    });
};

export const deletePart = part => async dispatch => {
    await request("DELETE", `/parts/id/${part._id}`);
    dispatch({
        type: "DELETE_PART",
        part,
    });
};

export function initialActions(dispatch) {
    dispatch(fetchProject());
    dispatch(loadParts());
}
