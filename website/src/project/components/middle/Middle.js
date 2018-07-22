import React from "react";
import Radium from "radium";

import styles from "~/project/styles/middle"
import { connect } from "react-redux";

@Radium
class Middle extends React.Component {

    render() {
        return (
            <div style={styles.container}>
            alksf
            </div>
        )
    }
}

export default connect()(Middle)
