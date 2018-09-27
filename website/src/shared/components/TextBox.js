import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

const TextBox = props => {
    let { style, type } = props;
    const { autoCapitalize, autoCorrect, ...rest } = props;
    type = type || "text";
    style = [
        style || {},
        {
            outline: "none",
            border: "none",
        },
    ];
    const newProps = {
        type,
        style,
        ...rest,
    };
    if (typeof autoCapitalize === "boolean") {
        newProps.autoCapitalize = autoCapitalize ? "on" : "off";
    }
    if (typeof autoCorrect === "boolean") {
        newProps.autoCorrect = autoCorrect ? "on" : "off";
    }
    return React.createElement("input", newProps);
};

TextBox.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.object,
    type: PropTypes.oneOf(["text", "number", "email", "password"]),
    autoCapitalize: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(["on", "off"]),
    ]),
    autoCorrect: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(["on", "off"]),
    ]),
};

export default Radium(TextBox);
