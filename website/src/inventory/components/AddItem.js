import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
            part: {
                name: "",
            },
        };
    }

    render() {
        const { isOpen, part } = this.state;
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
                <StandardModal
                    isOpen={isOpen}
                    title="New Part"
                    appElement={document.getElementById("allContent")}
                >
                    Name:{" "}
                    <TextBox
                        name="part_name"
                        onChange={event => {
                            const { state } = this;
                            const newState = {
                                ...state,
                                part: {
                                    ...state.part,
                                    name: event.target.value,
                                },
                            };
                            this.setState(newState);
                        }}
                        value={part.name}
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

const mapDispatchToProps = dispatch => ({
    dispatch,
});

const mapStateToProps = state => ({
    inventoryId: state.selectInventory,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddItem);
