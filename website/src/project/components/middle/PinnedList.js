/* eslint-disable no-underscore-dangle */
import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import WhiteBox from "~/shared/components/WhiteBox";
import styles from "~/project/styles/middle";
import { selectPart } from "~/project/actions";
import { getIdentifierString } from "~/util/part";

import { connect } from "react-redux";

@Radium
class PinnedList extends React.Component {
    static propTypes = {
        pinnedParts: PropTypes.arrayOf(PropTypes.object),
        dispatch: PropTypes.func,
    };

    render() {
        const { pinnedParts, dispatch } = this.props;
        return (
            <li style={styles.pinnedList}>
                {pinnedParts.map(part => (
                    <ul>
                        <WhiteBox
                            style={styles.pinnedPart}
                            onClick={() => dispatch(selectPart(part._id))}
                        >
                            <h5>{part.name}</h5>
                            {getIdentifierString(part)}
                        </WhiteBox>
                    </ul>
                ))}
            </li>
        );
    }
}

const mapStateToProps = state => ({
    pinnedParts: state.parts.filter(
        part =>
            state.pinnedPartIds.includes(part._id) &&
            part._id !== state.selectedPartId,
    ),
});

export default connect(mapStateToProps)(PinnedList);
