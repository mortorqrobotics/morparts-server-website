import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import { standardBoxShadow } from "~/shared/styles/boxShadows";

const styles = {
    whiteBox: {
        verticalAlign: "top",
        padding: "30px",
        display: "inline-block",
        background: "white",
        boxShadow: standardBoxShadow,
    },
};

const WhiteBox = props => {
    const { style, ...rest } = props;
    return React.createElement("div", {
        style: [styles.whiteBox, style || {}],
        ...rest,
    });
};

WhiteBox.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.object,
};

export default Radium(WhiteBox);
