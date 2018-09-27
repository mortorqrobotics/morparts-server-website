import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

const overlayStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "rgba(0, 0, 0, .3)",
    display: "block",
    zIndex: "100",
};

const DimModal = props => {
    const { style, children } = props;
    return (
        <Modal
            {...props}
            contentLabel="Modal"
            style={{ overlay: overlayStyle, content: style }}
        >
            {...children}
        </Modal>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onAfterOpen: PropTypes.func,
    onRequestClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.object,
};

export default DimModal;
