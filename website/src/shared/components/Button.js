import React from "react";
import Radium from "radium";

const Button = (props) => {
    let { text, style, name, ...rest } = props;
    return React.createElement("input", {
        name,
        type: "button",
        value: text,
        style: [style || {}, {
            outline: "none",
            border: "none",
        }],
        ...rest,
    })
}

export default Radium(Button);
