import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import StandardModal from "~/shared/components/StandardModal";
import { ModalButton } from "~/shared/components/modal";
import {
    modalPropTypes,
    //  modalPropsForward
} from "~/util/modal";
import styles from "~/shared/styles/confirmModal";

const ConfirmModal = Radium(props => (
    <StandardModal
        title="Are you sure?"
        isOpen={props.isOpen}
        onAfterOpen={props.onAfterOpen}
        onRequestClose={props.onRequestClose}
    >
        {props.text}

        <ModalButton
            onClick={() => {
                props.action();
                props.onRequestClose();
            }}
            text="Confirm"
            style={props.grayConfirm && styles.grayConfirm}
        />
        <ModalButton
            onClick={() => props.onRequestClose()}
            text="Cancel"
            style={styles.cancel}
        />
    </StandardModal>
));

ConfirmModal.propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
    grayConfirm: PropTypes.bool,
    ...modalPropTypes,
};

export default ConfirmModal;
