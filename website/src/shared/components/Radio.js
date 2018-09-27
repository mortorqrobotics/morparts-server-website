import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

const styles = {
    label: {
        fontWeight: "200",
        fontSize: "15px",
        cursor: "pointer",
    },
    radio: {
        margin: "0px 2px",
        cursor: "pointer",
    },
};

const Radio = props => {
    const { style, text, ...rest } = props;
    return React.createElement(
        "label",
        {
            style: [styles.label, style || {}],
        },
        React.createElement("input", {
            type: "radio",
            style: styles.radio,
            ...rest,
        }),
        text,
    );
};

Radio.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.object,
    text: PropTypes.string,
};

export default Radium(Radio);
