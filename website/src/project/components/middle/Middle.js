import React from "react";
import Radium from "radium";

import { getIdentifier, statuses } from "~/util/part";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import styles from "~/project/styles/middle"
import Glyphicon from "react-bootstrap/lib/Glyphicon";

import { updateStatus, deletePart } from "~/project/actions";
import { connect } from "react-redux";

@Radium
class Middle extends React.Component {

    render() {
        if (this.props.selectedPart) {
            return (
                <div style={styles.container}>
                    <h3>{this.props.selectedPart.name}</h3>
                    <h5>{this.props.prefix + getIdentifier(this.props.selectedPart)}</h5>
                    <DropdownButton
                        id="status-dropdown"
                        title={statuses[this.props.selectedPart.status].text}
                    >
                        {Object.keys(statuses).map(status => (
                            <MenuItem
                                key={status}
                                active={this.props.selectedPart.status === status}
                                onSelect={() => this.props.dispatch(updateStatus(this.props.selectedPart._id, status))}
                            >
                                <span style={[ styles.statusDot, { backgroundColor: statuses[status].color }]}/>
                                {statuses[status].text}
                            </MenuItem>
                        ))}
                    </DropdownButton>
                    <Glyphicon
                        onClick={() => this.props.dispatch(deletePart(this.props.selectedPart))}
                        glyph="trash"
                        style={styles.trash}
                    />
                </div>
            )
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPart: state.parts.find(part => part._id === state.selectedPart),
        prefix: state.project.prefix,
    }
}

export default connect(mapStateToProps)(Middle)
