import React from "react";
import PropTypes from "prop-types";

import styles from "~/shared/styles/standardModal";
import DimModal from "~/shared/components/DimModal";

const StandardModal = props => {
    const { title, children } = props;
    return (
        <DimModal {...props} style={styles.modal}>
            <div style={styles.title}>{title}</div>
            <div style={styles.content}>{children}</div>
        </DimModal>
    );
};

StandardModal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onAfterOpen: PropTypes.func,
    onRequestClose: PropTypes.func,
    children: PropTypes.node,
};

export default StandardModal;
