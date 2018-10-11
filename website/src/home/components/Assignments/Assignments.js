import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import WhiteBox from "~/shared/components/WhiteBox";
import Item from "./Item";
import styles from "~/home/styles";
import { updateStatus } from "~/project/actions";
import { completeAssignment } from "~/home/actions";

const WIP = part => updateStatus("designing", part);

@Radium
class LowInventory extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
        assignments: PropTypes.arrayOf(PropTypes.object),
        title: PropTypes.string,
    };

    render() {
        const { title, dispatch, assignments } = this.props;
        return (
            <WhiteBox style={styles.whiteBox}>
                <h2 style={styles.title}>{title || "Assignments"}</h2>
                {assignments.map(assignment => (
                    <Item
                        completed={dispatch(completeAssignment(assignment.id))}
                        workInProgress={dispatch(WIP(assignment.partId))}
                        name={assignment.name}
                        description={assignment.description}
                    />
                ))}
            </WhiteBox>
        );
    }
}

export default LowInventory;
