/* eslint-disable no-underscore-dangle */
import { request } from "~/util/ajax";

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
        part: Object.assign({}, base, part, {
            _id: data,
            created_at: new Date(),
            updated_at: new Date(),
        }),
    });
};

export const addStandardParts = (parts, inventoryId) => async dispatch => {
    parts.forEach(async val => {
        addPart(
            {
                name: val,
            },
            inventoryId,
        )(dispatch);
    });
};

export const loadInventory = id => async dispatch => {
    const { data } = await request("GET", `/inventory/${id}`);
    dispatch({
        type: "LOAD_INVENTORY",
        inventory: data,
    });
    dispatch({
        type: "SET_INVENTORY",
        id,
    });
};

export const addInventory = name => async dispatch => {
    const { data } = await request(
        "POST",
        `/inventory`,
        Object.assign({ name: "Unnamed" }, { name }),
    ).req;
    const id = data;
    dispatch({
        type: "ADD_INVENTORY",
        inventory: {
            name,
            id,
        },
    });
    loadInventory(id)(dispatch);
};

const fetchInventories = () => async dispatch => {
    const { data } = await request("GET", "/inventory");
    dispatch({
        type: "LOAD_INVENTORIES",
        inventories: data,
    });
    if (Object.keys(data).length > 0) {
        loadInventory(Object.keys(data)[0])(dispatch);
    }
};

export function initialActions(dispatch) {
    dispatch(fetchInventories());
}
