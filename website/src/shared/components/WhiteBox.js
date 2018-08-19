import React from "react";
import Radium from "radium";

import { standardBoxShadow } from "~/shared/styles/boxShadows";

const styles = {
    whiteBox: {
        verticalAlign: "top",
        margin: "0 25px",
        padding: "10px",
        display: "inline-block",
        background: "white",
        boxShadow: standardBoxShadow,
    }
}

const WhiteBox = (props) => {
    let { width, height, ...rest } = props;
    return React.createElement("div", {
        style: [styles.whiteBox, {
            height,
            width,
        }],
        ...rest,
    })
}

export default Radium(WhiteBox);