import React from "react";
import Radium from "radium";

import styles from  "~/project/styles/tree";
import { getIdentifier } from "~/util/part";
import { connect } from "react-redux";

@Radium
class Part extends React.Component {

    getStyle() {
        if (this.props.selectedPart == this.props.part._id) {
            return styles.selected;
        }
        if (this.props.isHovered) {
            return styles.hovered;
        }
        return styles.part;
    }

    render() {
        return (
            <div
                style={this.getStyle()}
            >
                <span>{getIdentifier(this.props.part)}</span>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPart: state.selectedPart,
    }
}


export default connect(mapStateToProps)(Part)
