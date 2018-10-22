/* eslint-disable no-underscore-dangle */
import { request } from "~/util/ajax";

const fetchInventory = () => async dispatch => {
    const { data } = await request("GET", "/inventory");
    dispatch({
        type: "LOAD_INVENTORY",
        project: data,
    });
};

export const addPart = (part, inventoryId) => async dispatch => {
    const base = {
        name: "Unnamed",
        barcode: "",
        minQuantity: 0,
        quantity: 0,
        purchaseLink: "#",
    };
    const { data } = await request(
        "POST",
        `/inventory/${inventoryId}`,
        Object.assign({}, base, part),
    ).req;
    dispatch({
        type: "ADD_PART",
        data,
    });
};

export const addStandardParts = parts => async dispatch => {
    parts.forEach(async val => {
        addPart({
            name: val,
        })(dispatch);
    });
};

export function initialActions(dispatch) {
    dispatch(fetchInventory());
}
