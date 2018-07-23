import React from "react";
import Radium from "radium";

import Glyphicon from "react-bootstrap/lib/Glyphicon";
import styles from  "~/project/styles/tree";
import { getIdentifier } from "~/util/part";

import { selectPart } from "~/project/actions";
import { connect } from "react-redux";

@Radium
class Part extends React.Component {

    render() {
        return (
            <div>
                <div
                    style={[styles.label,
                        this.props.selectedPart == this.props.part._id && styles.selected,
                        this.props.isHovered && styles.hovered,
                    ]}
                    onClick={() => this.props.dispatch(selectPart(this.props.part._id))}
                >
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
