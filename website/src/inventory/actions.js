/* eslint-disable no-underscore-dangle */
import { request } from "~/util/ajax";

const fetchInventories = () => async dispatch => {
    const { data } = await request("GET", "/inventory");
    dispatch({
        type: "LOAD_INVENTORIES",
        inventories: data,
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

export const loadInventory = id => async dispatch => {
    const { data } = await request("GET", `/inventory/${id}`).req;
    dispatch({
        type: "ADD_PART",
        data,
    });
};

export const addInventory = name => async dispatch => {
    const { data } = await request("POST", `/inventory/${name}`);
    dispatch({
        type: "ADD_INVENTORY",
        data: {
            name,
            id: data,
        },
    });
};

export function initialActions(dispatch) {
    dispatch(fetchInventories());
}
