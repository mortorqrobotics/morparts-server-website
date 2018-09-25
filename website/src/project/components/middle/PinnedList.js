import React from "react";
import Radium from "radium";

import WhiteBox from "~/shared/components/WhiteBox";
import styles from "~/project/styles/middle";
import { selectPart } from "~/project/actions";
import { getIdentifierString } from "~/util/part.js";

import { connect } from "react-redux";

@Radium
class PinnedList extends React.Component {

    render() {
        return (
            <li style={styles.container}>
                {this.props.pinnedParts.map(part => (
                    <ul>
                        <WhiteBox
                            style={styles.pinnedPart}
                            onClick={() => this.props.dispatch(selectPart(part._id))}
                        >
                            <h5>{part.name}</h5>
                            {getIdentifierString(part)}
                        </WhiteBox>
                    </ul>
                ))}
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pinnedParts: state.parts.filter(part => state.pinnedPartIds.includes(part._id) && part._id !== state.selectedPartId),
    }
}

export default connect(mapStateToProps)(PinnedList);
