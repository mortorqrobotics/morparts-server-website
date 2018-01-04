import React from "react";
import Radium from "radium";

import { connect } from "react-redux";

@Radium
class Tree extends React.Component {

    render() {
        return (
            <div>
                {this.props.project.name}
                {this.props.parts.map(part => (
                    <div key={part._id}>{part.number}</div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.project,
        parts: state.parts,
    }
}

export default connect(mapStateToProps)(Tree);
