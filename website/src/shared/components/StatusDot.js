import React from "react";
import Radium from "radium";

import { statuses } from "~/util/part";

const styles = {
    statusDot: {
        width: "8px",
        height: "8px",
        display: "inline-block",
        borderRadius: "4px",
        margin: "0px 4px",
    }
}

const StatusDot = (props) => {
    let { status, ...rest } = props;
    return React.createElement("span", {
        style: [ styles.statusDot, {
            backgroundColor: statuses[status].color
        }],
        ...rest,
    });
}

export default Radium(StatusDot);


