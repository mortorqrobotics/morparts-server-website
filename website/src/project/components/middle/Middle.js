import React from "react";
import Radium from "radium";

import styles from "~/project/styles/middle"
import PartView from "~/project/components/middle/PartView";
import { connect } from "react-redux";

@Radium
class Middle extends React.Component {

    render() {
        return (
            <div style={styles.container}>
                {this.props.selectedPart && (
                    <PartView key={this.props.selectedPart._id} part={this.props.selectedPart} />
                )}
                {this.props.pinnedParts.map(part => (
                    <PartView key={part._id} part={part} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPart: state.parts.find(part => part._id === state.selectedPartId),
        pinnedParts: state.parts.filter(part => state.pinnedPartIds.includes(part._id) && part._id !== state.selectedPartId),
    }
}

export default connect(mapStateToProps)(Middle)
