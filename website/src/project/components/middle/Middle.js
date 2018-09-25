import React from "react";
import Radium from "radium";

import PartView from "~/project/components/middle/PartView";
import PinnedList from "~/project/components/middle/PinnedList";

import { connect } from "react-redux";

@Radium
class Middle extends React.Component {

    render() {
        return (
            <div>
                {this.props.selectedPart && (
                    <PartView key={this.props.selectedPart._id} part={this.props.selectedPart} />
                )}
                <PinnedList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPart: state.parts.find(part => part._id === state.selectedPartId),
    }
}

export default connect(mapStateToProps)(Middle)
