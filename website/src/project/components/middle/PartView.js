/* eslint-disable no-underscore-dangle */
import React from "react";
import Radium from "radium";

import { getIdentifierString, statuses } from "~/util/part";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import styles from "~/project/styles/middle";
import Description from "~/project/components/middle/Description";
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
        isModalOpen: false,
    };

    render() {
        const { pinnedPartIds, part, dispatch } = this.props;
        const { isModalOpen } = this.state;
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
                <Description
                    onSave={description =>
                        dispatch(setDescription(part._id, description))
                    }
                    description={part.description}
                />
                {!this.props.part.isRootAssembly &&
                    <Button
                        onClick={() => this.setState({ isModalOpen: true })}
                        style={styles.deleteButton}
                        text="Delete Part"
                    />
                }
                {isModalOpen && (
                    <ConfirmModal
                        action={() => this.props.dispatch(deletePart(this.props.part))}
                        text={
                            `Are you sure you want to delete ${this.props.part.name} ${getIdentifierString(this.props.part)}?${hasChildren ? " You will also delete all the child parts and assemblies. Type the name of this assembly to confirm deletion." : ""}`
                        }
                        { ...modalProps(this, "isModalOpen") }
                        hasTextConfirm={hasChildren}
                        confirmText={this.props.part.name}
                        action={() => dispatch(deletePart(part))}
                        {...modalProps(this, "isModalOpen")}
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
