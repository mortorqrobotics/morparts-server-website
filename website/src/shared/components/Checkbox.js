import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

const styles = {
    label: {
        fontWeight: "200",
        fontSize: "15px",
        cursor: "pointer",
    },
    checkbox: {
        margin: "0px 2px",
        cursor: "pointer",
    },
};

const Checkbox = props => {
    const { style, text, ...rest } = props;
    return React.createElement(
        "label",
        {
            style: [styles.label, style || {}],
        },
        React.createElement("input", {
            type: "checkbox",
            style: styles.checkbox,
            ...rest,
        }),
        text,
    );
};

Checkbox.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.object,
    text: PropTypes.string,
};

export default Radium(Checkbox);
