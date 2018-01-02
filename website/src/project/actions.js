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

export function initialActions(dispatch) {
    dispatch(fetchProject());
}
