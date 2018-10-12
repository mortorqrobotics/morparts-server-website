import React from "react";
import Radium from "radium";

import { ModalButton, ModalTextBox } from "~/shared/components/modal";
import StandardModal from "~/shared/components/StandardModal";
import { modalPropTypes, modalPropsForward } from "~/util/modal";
import { makeChangeHandlerFactory } from "~/util";
import { addProject } from "~/dashboard/actions";

import { connect } from "react-redux";

@Radium
class MakeProjectModal extends React.Component {
    static propTypes = {
        ...modalPropTypes,
    };

    getChangeHandler = makeChangeHandlerFactory(this);

    initialState = {
        name: "",
        prefix: "",
    };

    state = {
        ...this.initialState,
    };

    handleSubmit = () => {
        const { dispatch, onRequestClose } = this.props;
        const { name, prefix } = this.state;
        dispatch(
            addProject({
                name,
                prefix,
            }),
        );
        this.setState(this.initialState);
        onRequestClose();
    };

    render() {
        return (
            <StandardModal title="New Project" {...modalPropsForward(this)}>
                <ModalTextBox
                    onChange={this.getChangeHandler("name")}
                    placeholder="Name"
                />
                <ModalTextBox
                    onChange={this.getChangeHandler("prefix")}
                    placeholder="Prefix"
                />
                <ModalButton
                    text="Create Project"
                    onClick={this.handleSubmit}
                />
            </StandardModal>
        );
    }
}

export default connect()(MakeProjectModal);
