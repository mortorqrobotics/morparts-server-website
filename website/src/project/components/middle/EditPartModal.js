import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import StandardModal from "~/shared/components/StandardModal";
import { modalPropTypes, modalPropsForward } from "~/util/modal";
import { ModalButton, ModalTextBox } from "~/shared/components/modal";
import { makeChangeHandlerFactory } from "~/util";
import { setDescription } from "~/project/actions";

import { connect } from "react-redux";

@Radium
class EditPartModal extends React.Component {

    static propTypes = {
        ...modalPropTypes,
    };

    getChangeHandler = makeChangeHandlerFactory(this);

    state = {
        name: this.props.part.name,
        description: this.props.part.description || "",
    };

    handleSubmit = () => {
        const { dispatch, onRequestClose, part } = this.props;
        const { name, description } = this.state;
        console.log(description)
        dispatch(setDescription(part._id, description));
        onRequestClose();
    };

    render() {
        const { part } = this.props;
        const { name, description } = this.state;
        return (
            <StandardModal title="Edit Part" {...modalPropsForward(this)}>
                <ModalTextBox
                    onChange={this.getChangeHandler("name")}
                    value={name}
                />
                <ModalTextBox
                    onChange={this.getChangeHandler("description")}
                    placeholder="Description"
                    value={description}
                />
                <ModalButton text="Done" onClick={this.handleSubmit} />
            </StandardModal>
        );
    }
}

export default connect()(EditPartModal);

