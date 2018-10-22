import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import { addPart } from "~/inventory/actions";
import StandardModal from "~/shared/components/StandardModal";
import { modalPropTypes, modalPropsForward } from "~/util/modal";
import { ModalButton, ModalTextBox } from "~/shared/components/modal";
import { makeChangeHandlerFactory } from "~/util";
import Radio from "~/shared/components/Radio";
import Checkbox from "~/shared/components/Checkbox";
import Button from "~/shared/components/Button";
import TextBox from "~/shared/components/TextBox";

@Radium
class AddItem extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
        inventoryId: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    render() {
        const { isOpen, name } = this.state;
        return (
            <>
                <Button
                    text="Add New Part"
                    onClick={() => {
                        const newState = Object.assign({}, this.state, {
                            isOpen: true,
                        });
                        this.setState(newState);
                    }}
                />
                <StandardModal isOpen={isOpen} title="New Part">
                    <TextBox
                        name="part_name"
                        text="Part Name:"
                        onChange={event => {
                            const newState = {
                                name: event.target.value,
                                ...this.state,
                            };
                            this.setState(newState);
                        }}
                        value={name}
                    />
                    <div />
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
                            const { part } = this.state;
                            const { dispatch, inventoryId } = this.props;
                            dispatch(addPart(part, inventoryId));
                            const newState = {
                                ...state,
                                isOpen: false,
                            };
                            this.setState(newState);
                        }}
                    />
                </StandardModal>
            </>
        );
    }
}
export default AddItem;
