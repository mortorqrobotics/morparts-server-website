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
import ConfirmModal from "~/shared/components/ConfirmModal";
import { modalProps } from "~/util/modal";

import { updateStatus, deletePart, pinPart, unpinPart, setDescription } from "~/project/actions";
import { connect } from "react-redux";

const RadiumGlyphicon = Radium(Glyphicon);

@Radium
class PartView extends React.Component {

    state = {
        isModalOpen: false,
    }

    render() {
        let isPinned = this.props.pinnedPartIds.includes(this.props.part._id);
        return (
            <WhiteBox style={styles.partView}>
                <RadiumGlyphicon
                    glyph="pushpin"
                    style={isPinned ? styles.pin.selected : styles.pin.unselected }
                    onClick={() => isPinned ? this.props.dispatch(unpinPart(this.props.part._id))
                        : this.props.dispatch(pinPart(this.props.part._id))
                    }
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
                {!this.props.part.isRootAssembly && (
                    <Button
                        onClick={() => this.setState({ isModalOpen: true })}
                        style={styles.deleteButton}
                        text="Delete Part"
                    />
                )}
                {this.state.isModalOpen && (
                    <ConfirmModal
                        action={() => this.props.dispatch(deletePart(this.props.part))}
                        text={
                            `Are you sure you want to delete ${this.props.part.name} ${getIdentifierString(this.props.part)}
                                ?`
                        }
                        grayConfirm={this.props.part.children.parts.length > 0}
                        { ...modalProps(this, "isModalOpen") }
                    />
                )}
            </WhiteBox>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pinnedPartIds: state.pinnedPartIds,
    }
}

export default connect(mapStateToProps)(PartView)
