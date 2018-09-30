import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { StyleRoot } from "radium";
import { Provider } from "react-redux";

const styles = {
    global: {
        margin: "0",
        padding: "0",
        fontFamily: "'exo 2', sans-serif",
        fontWeight: "200",
        outline: "0",
    },
};

export default class Root extends React.Component {
    static propTypes = {
        // eslint-disable-next-line react/no-unused-prop-types
        children: PropTypes.node,
    };
    // getChildContext() {
    //   return {
    //     pageName: this.props.pageName
    //   }
    // }

    wrap = contents => {
        const { props } = this;
        if (props.store) {
            return (
                <Provider store={props.store}>
                    <div>{contents}</div>
                </Provider>
            );
        }
        return contents;
    };

    render() {
        const { props } = this;
        return (
            <StyleRoot style={styles.global}>
                {this.wrap(props.children)}
            </StyleRoot>
        );
    }
}

export function pageInit(Page) {
    // eslint-disable-next-line no-underscore-dangle
    window.__pageInit = {
        React,
        ReactDOM,
        Page,
    };
}
