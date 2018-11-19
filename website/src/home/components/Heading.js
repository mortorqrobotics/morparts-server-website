import React from "react";
import Radium from "radium";

import { currentUser } from "~/util";
import styles from "~/home/styles";

@Radium
class Heading extends React.Component {
    render() {
        return (
            <div style={styles.heading}>
                <h1 style={styles.title}>MorParts</h1>
                <h3 style={styles.description}>Welcome, {currentUser.firstname}</h3>
            </div>
        );
    }
}

export default Heading;
