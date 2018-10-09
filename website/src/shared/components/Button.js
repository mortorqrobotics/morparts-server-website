import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

const Button = props => {
    const { text, style, name, ...rest } = props;
    return React.createElement("input", {
        name,
        type: "button",
        value: text,
        style: [
            style || {},
            {
                outline: "none",
                border: "none",
            },
        ],
        ...rest,
    });
};

Button.propTypes = {
    text: PropTypes.string,
    name: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.object,
};

export default Radium(Button);
