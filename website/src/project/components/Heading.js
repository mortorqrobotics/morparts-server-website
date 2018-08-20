import React from "react";
import Radium from "radium";

import styles from "~/project/styles";
import { connect } from "react-redux";

@Radium
class Heading extends React.Component {

    render() {
        return (
            <div style={styles.heading}>
                <h1>{this.props.project.name}</h1>
                <h5>{this.props.project.prefix}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.project,
    }
}

export default connect(mapStateToProps)(Heading)
