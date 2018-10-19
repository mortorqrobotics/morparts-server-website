import React from "react";
import Radium from "radium";

import StandardModal from "~/shared/components/StandardModal";
import { modalPropTypes, modalPropsForward } from "~/util/modal";
import { ModalButton, ModalTextBox } from "~/shared/components/modal";
import { makeChangeHandlerFactory } from "~/util";
import Button from "~/shared/components/Button";

export default class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <Button
                    text="Add New Part"
                    onClick={() => {
                        const newState = Object.assign({}, this.state, {
                            isOpen: true,
                        });
                        this.setState(newState);
                    }}
                />
                <StandardModal isOpen={isOpen} title="New Part">
                    <p />
                    <div />
                    <Button
                        text="Close"
                        onClick={() => {
                            const newState = Object.assign({}, this.state, {
                                isOpen: false,
                            });
                            this.setState(newState);
                        }}
                    />
                </StandardModal>
            </div>
        );
    }
}
