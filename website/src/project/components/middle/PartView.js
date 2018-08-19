import React from "react";
import Radium from "radium";

import { getIdentifierString, statuses } from "~/util/part";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import styles from "~/project/styles/middle"
import Description from "~/project/components/middle/Description"
import Button from "~/shared/components/Button";
import StatusDot from "~/shared/components/StatusDot";
import WhiteBox from "~/shared/components/WhiteBox";

import { updateStatus, deletePart, pinPart, unpinPart, setDescription } from "~/project/actions";
import { connect } from "react-redux";

const RadiumGlyphicon = Radium(Glyphicon);

@Radium
class PartView extends React.Component {

    state = {
        isModalOpen: false,
    }

    render() {
        return (
            <WhiteBox style={styles.partView}>
                <RadiumGlyphicon
                    glyph="pushpin"
                    style={styles.pin}
                    onClick={() => {
                        if (this.props.selectedPartId === this.props.part._id) {
                            this.props.dispatch(pinPart(this.props.part._id));
                        } else {
                            this.props.dispatch(unpinPart(this.props.part._id));
                        }
                    }}
                />
                <h3>{this.props.part.name}</h3>
                <h5>{getIdentifierString(this.props.part)}</h5>
                <DropdownButton
                    id="status-dropdown"
                    title={statuses[this.props.part.status].text}
                >
                    {Object.keys(statuses).map(status => (
                        <MenuItem
                            key={status}
                            active={this.props.part.status === status}
                            onSelect={() => this.props.dispatch(updateStatus(this.props.part._id, status))}
                        >
                            <StatusDot status={status} />
                            {statuses[status].text}
                        </MenuItem>
                    ))}
                </DropdownButton>
                <Description
                    onSave={(description) => this.props.dispatch(setDescription(this.props.part._id, description))}
                    description={this.props.part.description}
                />
                <Button
                    onClick={() => this.props.dispatch(deletePart(this.props.part))}
                    style={styles.deleteButton}
                    text="Delete Part"
                />
            </WhiteBox>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPartId: state.selectedPartId,
    }
}

export default connect(mapStateToProps)(PartView)
