import React from "react";
import Radium from "radium";

import Button from "~/shared/components/Button";
import StandardModal from "~/shared/components/StandardModal";
import Checkbox from "~/shared/components/Checkbox";

@Radium
class Empty extends React.Component {
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
                    text="Add in Standard Parts"
                    onClick={() => {
                        const newState = Object.assign({}, this.state, {
                            isOpen: true,
                        });
                        this.setState(newState);
                    }}
                />
                <StandardModal isOpen={isOpen} title="Standard Parts">
                    <Checkbox />
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

export default Empty;
