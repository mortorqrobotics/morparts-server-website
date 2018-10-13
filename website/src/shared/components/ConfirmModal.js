import React from "react";
import Radium from "radium";

import StandardModal from "~/shared/components/StandardModal";
import { ModalButton, ModalTextBox } from "~/shared/components/modal";
import { modalPropTypes, modalPropsForward } from "~/util/modal";
import styles from "~/shared/styles/confirmModal";

@Radium
class ConfirmModal extends React.Component {
    return (
        <StandardModal
            title="Are you sure?"
            isOpen={props.isOpen}
            onAfterOpen={props.onAfterOpen}
            onRequestClose={props.onRequestClose}
        >
            {props.text}

            {props.hasTextboxConfirm && <ModalTextBox />}
            <ModalButton
                onClick={() => {
                    props.action();
                    props.onRequestClose();
                }}
                text="Confirm"
                style={props.hasTextboxConfirm && && styles.grayConfirm}
            />
            <ModalButton
                onClick={() => props.onRequestClose()}
                text="Cancel"
                style={styles.cancel}
            />
        </StandardModal>
    )
})

ConfirmModal.propTypes = {
    text: React.PropTypes.string,
    action: React.PropTypes.func,
    hasTextboxConfirm: React.PropTypes.bool,
    confirmText: React.PropTypes.string,
    ...modalPropTypes,
}

export default ConfirmModal;
