import React from "react";
import Radium from "radium";

import StandardModal from "~/shared/components/StandardModal";
import { modalPropTypes, modalPropsForward } from "~/util/modal";
import { ModalButton, ModalTextBox } from "~/shared/components/modal";
import { makeChangeHandlerFactory } from "~/util";

export default class AddPartModal extends React.Component {
    render() {
        return <StandardModal title="Add Item" {...modalPropsForward(this)} />;
    }
}
