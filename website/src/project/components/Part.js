import React from "react";
import Radium from "radium";

import styles from  "~/project/styles";
import { getIdentifier } from "~/util/part";
import { connect } from "react-redux";

@Radium
class Part extends React.Component {

    render() {
        return (
            <div style={styles.part}>
                <span>{getIdentifier(this.props.part)}</span>
                {this.props.children}
            </div>
        )
    }
}

export default connect()(Part)
