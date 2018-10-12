import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

const Link = props => {
    const { location, text, ...rest } = props;
    return React.createElement(
        "a",
        {
            href: location,
            ...rest,
        },
        ...React.Children.toArray(text),
    );
};

Link.propTypes = {
    location: PropTypes.string,
    text: PropTypes.node,
};

export default Radium(Link);
