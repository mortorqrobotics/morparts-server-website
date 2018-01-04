import React from "react";
import Radium from "radium";

import MakePartModal from "~/project/components/MakePartModal";
import Button from "~/shared/components/Button";
import { modalProps } from "~/util/modal"
import { connect } from "react-redux";

@Radium
class Middle extends React.Component {

    state = {
        isModalOpen: false,
    }

    render() {
        return (
            <div>
                <Button
                    onClick={() => this.setState({ isModalOpen: true })}
                    text="Add part"
                />
                <MakePartModal { ...modalProps(this, "isModalOpen") } />
            </div>
        )
    }
}

export default connect()(Middle)

