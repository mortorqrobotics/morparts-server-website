import React from "react";
import Radium from "radium";

import { standardBoxShadow } from "~/shared/styles/boxShadows";

const styles = {
    whiteBox: {
        verticalAlign: "top",
        margin: "0 20px",
        padding: "30px",
        display: "inline-block",
        background: "white",
        boxShadow: standardBoxShadow,
    }
}

const WhiteBox = (props) => {
    let { style, ...rest } = props;
    return React.createElement("div", {
        style: [ styles.whiteBox, style || {} ],
        ...rest,
    })
}

export default Radium(WhiteBox);
