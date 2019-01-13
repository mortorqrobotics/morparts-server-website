/* eslint-disable no-underscore-dangle */
import React from "react";
import Radium from "radium";

import { getIdentifierString, statuses } from "~/util/part";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import styles from "~/project/styles/middle";
import EditPartModal from "~/project/components/middle/EditPartModal";
import Button from "~/shared/components/Button";
import StatusDot from "~/shared/components/StatusDot";
import WhiteBox from "~/shared/components/WhiteBox";
import ConfirmModal from "~/shared/components/ConfirmModal";
import { modalProps } from "~/util/modal";

import {
    updateStatus,
    deletePart,
    pinPart,
    unpinPart,
    setDescription,
} from "~/project/actions";
import { connect } from "react-redux";

const RadiumGlyphicon = Radium(Glyphicon);

@Radium
class PartView extends React.Component {

    state = {
        isEditModalOpen: false,
        isDeleteModalOpen: false,
    };

    render() {
        const { pinnedPartIds, part, dispatch } = this.props;
        const { isEditModalOpen, isDeleteModalOpen } = this.state;
        const isPinned = pinnedPartIds.includes(part._id);
        let hasChildren = this.props.part.children.parts.length > 0;
        return (
            <WhiteBox style={styles.partView}>
                <RadiumGlyphicon
                    glyph="pushpin"
                    style={
                        isPinned ? styles.pin.selected : styles.pin.unselected
                    }
                    onClick={() =>
                        isPinned
                            ? dispatch(unpinPart(part._id))
                            : dispatch(pinPart(part._id))
                    }
                />
                <h3>{part.name}</h3>
                <h5>{getIdentifierString(part)}</h5>
                <DropdownButton
                    id="status-dropdown"
                    title={statuses[part.status].text}
                >
                    {Object.keys(statuses).map(status => (
                        <MenuItem
                            key={status}
                            active={part.status === status}
                            onSelect={() =>
                                    dispatch(updateStatus(part._id, status))
                            }
                        >
                            <StatusDot status={status} />
                            {statuses[status].text}
                        </MenuItem>
                    ))}
                </DropdownButton>
                <h5>{part.description}</h5>
                {!part.isRootAssembly && (
                    <Button
                        onClick={() => this.setState({ isDeleteModalOpen: true })}
                        style={styles.deleteButton}
                        text="Delete"
                    />
                )}
                <Button
                    onClick={() => this.setState({ isEditModalOpen: true })}
                    style={styles.editButton}
                    text="Edit"
                />
                {isEditModalOpen && (
                    <EditPartModal
                        part={part}
                        {...modalProps(this, "isEditModalOpen")}
                    />
                )}
                {isDeleteModalOpen && (
                    <ConfirmModal
                        action={() => this.props.dispatch(deletePart(this.props.part))}
                        text={
                            `Are you sure you want to delete ${this.props.part.name} ${getIdentifierString(this.props.part)}?${hasChildren ? " You will also delete all the child parts and assemblies. Type the name of this assembly to confirm deletion." : ""}`
                        }
                        { ...modalProps(this, "isDeleteModalOpen") }
                        hasTextConfirm={hasChildren}
                        confirmText={part.name}
                        action={() => dispatch(deletePart(part))}
                    />
                )}
            </WhiteBox>
        );
    }
}

const mapStateToProps = state => ({
    pinnedPartIds: state.pinnedPartIds,
});

export default connect(mapStateToProps)(PartView);
