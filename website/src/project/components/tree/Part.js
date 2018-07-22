import React from "react";
import Radium from "radium";

import Glyphicon from "react-bootstrap/lib/Glyphicon";
import styles, { statusColors }  from  "~/project/styles/tree";
import { lightenColor } from "~/util/colors";
import { getIdentifier } from "~/util/part";
import { connect } from "react-redux";

@Radium
class Part extends React.Component {

    getStyle() {
        let fontWeight = 200;
        if (this.props.selectedPart == this.props.part._id || this.props.isHovered) {
            fontWeight = 500;
        }
        return [styles.part, { "fontWeight": fontWeight }];
    }

    render() {
        return (
            <div>
                <div style={styles.label}>
                    <Glyphicon
                        style={styles.glyph}
                        glyph={this.props.part.isAssembly ? "th" : "cog"}
                    />
                    <span>{this.props.prefix + getIdentifier(this.props.part)}</span>
                </div>
                <div style={styles.treeLine}>
                    {this.props.children}
                </div>
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
