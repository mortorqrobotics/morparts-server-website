import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import styles from "~/project/styles";
import { connect } from "react-redux";

@Radium
class Heading extends React.Component {
    static propTypes = {
        // eslint-disable-next-line react/forbid-prop-types
        project: PropTypes.object,
    };

    render() {
        const { project } = this.props;
        return (
            <div style={styles.heading}>
                <h1>{project.name}</h1>
                <h5>{project.prefix}</h5>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    project: state.project,
});

export default connect(mapStateToProps)(Heading);
