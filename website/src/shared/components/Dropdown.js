import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

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
};

const Radio = props => {
    const { style, text, children, ...rest } = props;
    const c = React.Children.toArray(children).map(
        val =>
            React.isValidElement(val) ? val : <option name={val}>{val}</option>,
    );
    return React.createElement(
        "label",
        {
            style: [styles.label, style || {}],
        },
        React.createElement(
            "select",
            {
                style: styles.radio,
                ...rest,
            },
            ...c,
        ),
        text,
    );
};

Radio.propTypes = {
    children: PropTypes.node,
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.object,
    text: PropTypes.string,
};

export default Radium(Radio);
