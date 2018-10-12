import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import StandardModal from "~/shared/components/StandardModal";
import Radio from "~/shared/components/Radio";
import { modalPropTypes, modalPropsForward } from "~/util/modal";
import { ModalButton, ModalTextBox } from "~/shared/components/modal";
import { makeChangeHandlerFactory } from "~/util";
import { addPart } from "~/project/actions";

import { connect } from "react-redux";

@Radium
class MakePartModal extends React.Component {
    static propTypes = {
        ...modalPropTypes,
        parentId: PropTypes.string,
    };

    getChangeHandler = makeChangeHandlerFactory(this);

    initialState = {
        name: "",
        isAssembly: false,
    };

    state = {
        ...this.initialState,
    };

    handleSubmit = () => {
        const { dispatch, onRequestClose, parentId } = this.props;
        const { name, isAssembly } = this.state;
        dispatch(
            addPart({
                name,
                isAssembly,
                parent: parentId,
            }),
        );
        this.setState(this.initialState);
        onRequestClose();
    };

    render() {
        return (
            <StandardModal title="New Part" {...modalPropsForward(this)}>
                <Radio
                    name="type"
                    text="Assembly"
                    onClick={() => this.setState({ isAssembly: true })}
                />
                <Radio
                    style={{ marginLeft: "10px" }}
                    name="type"
                    text="Part"
                    onClick={() => this.setState({ isAssembly: false })}
                />
                <ModalTextBox
                    onChange={this.getChangeHandler("name")}
                    placeholder="Name"
                />
                <ModalButton text="Create Part" onClick={this.handleSubmit} />
            </StandardModal>
        );
    }
}

export default connect()(MakePartModal);
