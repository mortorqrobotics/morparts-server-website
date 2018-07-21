import React from "react";
import Radium from "radium";

const Radio = (props) => {
    let { style, ...rest } = props;
    return React.createElement("input", {
        type: "radio",
        ...rest,
    })
}

export default Radium(Radio);
