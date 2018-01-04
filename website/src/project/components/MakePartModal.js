import React from "react";
import Radium from "radium"

import StandardModal from "~/shared/components/StandardModal";
import { modalPropTypes, modalPropsForward } from "~/util/modal";
import { ModalButton, ModalTextBox } from "~/shared/components/modal";
import { makeChangeHandlerFactory } from "~/util";
import { addPart } from "~/project/actions";

import { connect } from "react-redux";

@Radium
class MakePartModal extends React.Component {

    static propTypes = {
        ...modalPropTypes,
    }

    getChangeHandler = makeChangeHandlerFactory(this);

    initialState = {
        name: "",
        isAssembly: false,
    };

    state = {
       ...this.initialState,
    }

    handleSubmit = () => {
        this.props.dispatch(addPart({
            name: this.state.name,
            isAssembly: this.state.isAssembly,
        }))
        this.setState(this.initialState);
        this.props.onRequestClose();
    }

    render() {
        return (
            <StandardModal
                title="New Part"
                { ...modalPropsForward(this) }
            >
                <input
                    type="radio"
                    name="type"
                    onClick={() => this.setState({ isAssembly: true })}
                />Assembly
                <input
                    type="radio"
                    name="type"
                    onClick={() => this.setState({ isAssembly: false })}
                />Part
                <ModalTextBox
                    onChange={this.getChangeHandler("name")}
                    placeholder="Name"
                />
                <ModalButton
                    text="Create Part"
                    onClick={this.handleSubmit}
                />
            </StandardModal>
        )
    }
}

export default connect()(MakePartModal)

