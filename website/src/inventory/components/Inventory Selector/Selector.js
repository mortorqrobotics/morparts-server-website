import React from "react";
import PropTypes from "prop-types";

import { loadInventory, addInventory } from "~/inventory/actions";
import Dropdown from "~/shared/components/Dropdown";
import StandardModal from "~/shared/components/StandardModal";
import Button from "~/shared/components/Button";
import TextBox from "~/shared/components/TextBox";

export default class inventorySelector extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
        inventoryId: PropTypes.string,
        inventories: PropTypes.arrayOf(
            PropTypes.shape({
                [PropTypes.string]: PropTypes.string,
            }),
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            value: "",
        };
    }

    render() {
        const { inventoryId, dispatch, inventories } = this.props;
        const { isOpen, value } = this.state;
        return (
            <>
                <Dropdown
                    value={inventoryId}
                    onChange={event => {
                        const { state } = this;
                        const id = event.target.value;
                        const newState = {
                            ...state,
                        };
                        if (id === "new_inventory") {
                            newState.isOpen = true;
                        } else {
                            newState.inventoryId = id;
                            dispatch(loadInventory(id));
                        }
                        this.setState(newState);
                    }}
                >
                    {Object.entries(inventories || { 1001: "Default" })
                        .map(([id, name]) => (
                            <option value={id} key={id}>
                                {name}
                            </option>
                        ))
                        .concat(
                            <option value="new_inventory" key="new">
                                Create New Inventory
                            </option>,
                        )}
                </Dropdown>
                <StandardModal
                    isOpen={isOpen}
                    title="New Inventory"
                    appElement={document.getElementById("allContent")}
                >
                    <div>
                        Name:{" "}
                        <TextBox
                            value={value}
                            onChange={event => {
                                const { state } = this;
                                const newState = {
                                    ...state,
                                    value: event.target.value,
                                };
                                this.setState(newState);
                            }}
                        />
                    </div>
                    <Button
                        text="Close"
                        onClick={() => {
                            const newState = Object.assign({}, this.state, {
                                isOpen: false,
                            });
                            this.setState(newState);
                        }}
                    />
                    <Button
                        text="Submit"
                        onClick={() => {
                            const { state } = this;
                            // const { part } = this.state;
                            // const { dispatch, inventoryId } = this.props;
                            // dispatch(addPart(part, inventoryId));
                            const newState = {
                                ...state,
                                isOpen: false,
                            };
                            this.setState(newState);
                            dispatch(addInventory(state.value));
                        }}
                    />
                </StandardModal>
            </>
        );
    }
}
