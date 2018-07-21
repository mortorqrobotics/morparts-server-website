import React from "react";
import Radium from "radium";

import styles, { statusColors }  from  "~/project/styles/tree";
import { lightenColor, darkenColor } from "~/util/colors";
import { getIdentifier } from "~/util/part";
import { connect } from "react-redux";

@Radium
class Part extends React.Component {

    getStyle() {
        let color = statusColors[this.props.part.status];
        if (this.props.selectedPart == this.props.part._id) {
            color = darkenColor(color);
        }
        if (this.props.isHovered) {
            color = lightenColor(color);
        }
        console.log(color)
        return [styles.part, { "backgroundColor": color }];
    }

    render() {
        return (
            <div
                style={this.getStyle()}
            >
                <span>{this.props.prefix + getIdentifier(this.props.part)}</span>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPart: state.selectedPart,
        prefix: state.project.prefix,
    }
}


export default connect(mapStateToProps)(Part)
