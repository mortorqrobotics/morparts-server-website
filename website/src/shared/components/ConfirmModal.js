import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import StandardModal from "~/shared/components/StandardModal";
import { ModalButton, ModalTextBox } from "~/shared/components/modal";
import { modalPropTypes } from "~/util/modal";
import { makeChangeHandlerFactory } from "~/util";
import styles from "~/shared/styles/confirmModal";

@Radium
class ConfirmModal extends React.Component {

    state = {
        confirmText: "",
    }

    getChangeHandler = makeChangeHandlerFactory(this);

    render() {
        const isTextConfirmed = !this.props.hasTextConfirm || (this.state.confirmText === this.props.confirmText);
        return (
            <StandardModal
                title="Are you sure?"
                isOpen={this.props.isOpen}
                onAfterOpen={this.props.onAfterOpen}
                onRequestClose={this.props.onRequestClose}
            >
                {this.props.text}
                {this.props.hasTextConfirm &&
                    <ModalTextBox
                        onChange={this.getChangeHandler("confirmText")}
                        placeholder="Type to confirm"
                    />
                }
                <ModalButton
                    onClick={() => {
                        if (isTextConfirmed) {
                            this.props.action();
                            this.props.onRequestClose();
                        }
                    }}
                    text="Confirm"
                    style={!isTextConfirmed ? styles.grayConfirm : {} }
                />
                <ModalButton
                    onClick={() => this.props.onRequestClose()}
                    text="Cancel"
                    style={styles.cancel}
                />
            </StandardModal>
        );
    }
}

ConfirmModal.propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
    confirmText: PropTypes.string,
    hasTextConfirm: PropTypes.bool,
    ...modalPropTypes,
};

export default ConfirmModal;
