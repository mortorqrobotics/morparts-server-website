/* eslint-disable no-underscore-dangle */
import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

// import styles from '~/project/styles/middle';
import PartView from "~/project/components/middle/PartView";
import { connect } from "react-redux";

@Radium
class Middle extends React.Component {
    static propTypes = {
        // eslint-disable-next-line react/forbid-prop-types
        selectedPart: PropTypes.object,
        pinnedParts: PropTypes.arrayOf(PropTypes.object),
    };

    render() {
        const { selectedPart, pinnedParts } = this.props;
        return (
            <div>
                {selectedPart && (
                    <PartView key={selectedPart._id} part={selectedPart} />
                )}
                {pinnedParts.map(part => (
                    <PartView key={part._id} part={part} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedPart: state.parts.find(part => part._id === state.selectedPartId),
    pinnedParts: state.parts.filter(
        part =>
            state.pinnedPartIds.includes(part._id) &&
            part._id !== state.selectedPartId,
    ),
});

export default connect(mapStateToProps)(Middle);
