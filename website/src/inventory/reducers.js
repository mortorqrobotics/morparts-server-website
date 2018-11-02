/* eslint-disable no-underscore-dangle */
import update from "immutability-helper";

const inventories = (state = {}, action) => {
    switch (action.type) {
        case "LOAD_INVENTORIES":
            return action.inventories;
        case "ADD_INVENTORY":
            return Object.assign({}, state, {
                [action.inventory.id]: action.inventory.name,
            });
        default:
            return state;
    }
};

const parts = (state = {}, action) => {
    let part;
    let newState;
    switch (action.type) {
        case "LOAD_INVENTORY":
            return (
                action.inventory.reduce((object, item) => {
                    const newObject = Object.assign({}, object);
                    newObject[item._id] = item;
                    if (newObject[item._id].created_at) {
                        newObject[item._id].created_at = new Date(
                            newObject[item._id].created_at,
                        );
                    }
                    if (newObject[item._id].updated_at) {
                        newObject[item._id].updated_at = new Date(
                            newObject[item._id].updated_at,
                        );
                    }
                    delete newObject[item._id]._id;
                    return newObject;
                }, {}) || {}
            );
        case "ADD_PART":
            console.log(action);
            part = Object.assign({}, action.part);
            delete part._id;
            newState = Object.assign({}, state, {
                [action.part._id]: part,
            });
            return newState;
        default:
            return state;
    }
};

const selectInventory = (state = "", action) => {
    switch (action.type) {
        case "SET_INVENTORY":
            return action.id || "";
        default:
            return state;
    }
};

export default {
    parts,
    inventories,
    selectInventory,
};
