/* eslint-disable no-underscore-dangle */
import { currentUser } from "~/util";
import { request } from "~/util/ajax";
import axios from "axios";

export const loadAssignments = () => async dispatch => {
    const loc = window.location.hostname.split(".");
    loc.shift();
    const a = await axios.get(
        `//${loc.join(".")}:${window.location.port}/users/id/${
            currentUser.username
        }/tasks/pending`,
    );
    dispatch({
        type: "LOAD_ASSIGNMENTS",
        data: a,
    });
};

export const loadLowInventory = () => async dispatch => {
    await request("GET", "/inventory/low");
    dispatch({
        type: "LOAD_LOW_INVENTORY",
    });
};

export const loadRecentChanges = () => async dispatch => {
    let {data} = await request("GET", "/parts/changes/recent");
    dispatch({
        type: "LOAD_RECENT_CHANGES",
        changes: data,
    });
};

export function initialActions(dispatch) {

    dispatch(loadRecentChanges());
    // dispatch(loadAssignments());
    // dispatch(loadLowInventory());
}
