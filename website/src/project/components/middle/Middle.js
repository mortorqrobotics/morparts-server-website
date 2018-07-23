import React from "react";
import Radium from "radium";

import { getIdentifier, statuses } from "~/util/part";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import styles from "~/project/styles/middle"

import { updateStatus } from "~/project/actions";
import { connect } from "react-redux";

@Radium
class Middle extends React.Component {

    render() {
        return (
            <div style={styles.container}>
                {this.props.selectedPart && (
                    <div>
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
                                    {statuses[status].text}
                                </MenuItem>
                            ))}
                        </DropdownButton>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPart: state.parts.find(part => part._id === state.selectedPart),
        prefix: state.project.prefix,
    }
}

export default connect(mapStateToProps)(Middle)
