import React from "react";
import Radium from "radium";

import StandardModal from "~/shared/components/StandardModal";
import { modalPropTypes, modalPropsForward } from "~/util/modal";
import { ModalButton, ModalTextBox } from "~/shared/components/modal";
import { makeChangeHandlerFactory } from "~/util";
import { getIdentifier } from "~/util/part";
import { setName, setDescription } from "~/project/actions";

import { connect } from "react-redux";

@Radium
class EditPartModal extends React.Component {

    static PropTypes = {
        ...modalPropTypes,
    }

    getChangeHandler = makeChangeHandlerFactory(this);

    initialState = {
        name: this.props.selectedPart.name,
        description: this.props.selectedPart.description,
    }

    state = { ...this.initialState };

    render() {
        return (
            <StandardModal
                title="Update" + {getIdentifier(this.props.selectedPart.part)}
                { ...modalPropsForward(this) }
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPart: state.parts.find(part => part._id === state.selectedPart),
    }
}

export default connect(mapStateToProps)(EditPartModal);
