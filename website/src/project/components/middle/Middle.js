/* eslint-disable no-underscore-dangle */
import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import PartView from "~/project/components/middle/PartView";
import PinnedList from "~/project/components/middle/PinnedList";

import { connect } from "react-redux";

@Radium
class Middle extends React.Component {
    static propTypes = {
        // eslint-disable-next-line react/forbid-prop-types
        selectedPart: PropTypes.object,
    };

    render() {
        const { selectedPart } = this.props;
        return (
            <div>
                {selectedPart && (
                    <PartView key={selectedPart._id} part={selectedPart} />
                )}
                <PinnedList />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedPart: state.parts.find(part => part._id === state.selectedPartId),
});

export default connect(mapStateToProps)(Middle);
