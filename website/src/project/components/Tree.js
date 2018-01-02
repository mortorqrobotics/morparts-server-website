import React from "react";
import Radium from "radium";

import { connect } from "react-redux";

@Radium
class Tree extends React.Component {

    render() {
        return (
            <div>
                {this.props.project.name}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.project,
    }
}

export default connect(mapStateToProps)(Tree);
