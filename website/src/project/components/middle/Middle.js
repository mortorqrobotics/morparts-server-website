import React from "react";
import Radium from "radium";

import { getIdentifierString, statuses } from "~/util/part";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import styles from "~/project/styles"
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Button from "~/shared/components/Button";
import WhiteBox from "~/shared/components/WhiteBox";

import { updateStatus, deletePart } from "~/project/actions";
import { connect } from "react-redux";

@Radium
class Middle extends React.Component {

    state = {
        isModalOpen: false,
        isEditingDescription: false,
    }

    render() {
        if (this.props.selectedPart) {
            return (
                <WhiteBox style={{ width: "45%" }}>
                    <h3>{this.props.selectedPart.name}</h3>
                    <h5>{getIdentifierString(this.props.selectedPart)}</h5>
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
                    <div>
                        <textarea style={styles.description}
                            readOnly={!this.state.isEditingDescription}
                            selectable={this.state.isEditingDescription}
                        >
                            {this.props.selectedPart.description}
                        </textarea>
                        <Glyphicon glyph="pencil" onClick={() => this.setState({ isEditingDescription: true })} />
                    </div>
                    <Button
                        onClick={() => this.props.dispatch(deletePart(this.props.selectedPart))}
                        style={styles.trash}
                        text="Delete this part"
                    />
                </WhiteBox>
            )
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPart: state.parts.find(part => part._id === state.selectedPartId),
    }
}

export default connect(mapStateToProps)(Middle)
