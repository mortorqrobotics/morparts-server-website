import React from "react";
import Radium from "radium";
// import PropTypes from "prop-types";

import styles from "~/home/styles";
import LowInventory from "./LowInventory";
import Container from "./Container";

@Radium
class Body extends React.Component {
    render() {
        return (
            <div style={styles.body}>
                <LowInventory />
                <Container title="Recent Changes" />
                <Container title="Assignments" />
            </div>
        );
    }
}

export default Body;
