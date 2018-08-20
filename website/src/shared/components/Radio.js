import React from "react";
import Radium from "radium";

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
}

const Radio = (props) => {
    let { style, text, ...rest } = props;
    return React.createElement("label", {
            style: [ styles.label, style || {} ]
        },
        React.createElement("input", {
            type: "radio",
            style: styles.radio,
            ...rest,
        }),
        text
    );
}

export default Radium(Radio);
