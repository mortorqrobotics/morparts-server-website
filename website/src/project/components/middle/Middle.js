import React from "react";
import Radium from "radium";

import { connect } from "react-redux";

@Radium
class Middle extends React.Component {

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default connect()(Middle)
