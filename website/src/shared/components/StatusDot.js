import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import { statuses } from "~/util/part";

const styles = {
    statusDot: {
        width: "8px",
        height: "8px",
        display: "inline-block",
        borderRadius: "4px",
        margin: "0px 4px",
    },
};

const StatusDot = props => {
    const { status, ...rest } = props;
    return React.createElement("span", {
        style: [
            styles.statusDot,
            {
                backgroundColor: statuses[status].color,
            },
        ],
        ...rest,
    });
};

StatusDot.propTypes = {
    status: PropTypes.string,
};

export default Radium(StatusDot);
