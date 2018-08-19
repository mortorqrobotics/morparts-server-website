import React from "react";
import Radium from "radium";

import Glyphicon from "react-bootstrap/lib/Glyphicon";
import styles from "~/project/styles/tree";
import StatusDot from "~/shared/components/StatusDot";
import { getIdentifierString } from "~/util/part";

import { selectPartId } from "~/project/actions";
import { connect } from "react-redux";

@Radium
class Part extends React.Component {

    render() {
        return (
            <div>
                <div
                    style={[styles.label,
                        this.props.selectedPartId == this.props.part._id && styles.selected,
                        this.props.isHovered && styles.hovered,
                    ]}
                    onClick={() => this.props.dispatch(selectPartId(this.props.part._id))}
                >
                    <Glyphicon
                        style={styles.glyph}
                        glyph={this.props.part.isAssembly ? "th" : "cog"}
                    />
                    <span>{this.props.part.name}</span>
                    <span style={styles.identifier}>[{getIdentifierString(this.props.part)}]</span>
                    <StatusDot status={this.props.part.status} />

                </div>
                <div style={styles.line}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPartId: state.selectedPartId,
    }
}


export default connect(mapStateToProps)(Part)
