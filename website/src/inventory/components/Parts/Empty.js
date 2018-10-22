import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import Button from "~/shared/components/Button";
import StandardModal from "~/shared/components/StandardModal";
import Checkbox from "~/shared/components/Checkbox";
import { addStandardParts } from "~/inventory/actions";

const standardItems = ["RoboRIO", "Router", "Ethernet Cable"];

@Radium
class Empty extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
    };

    constructor(props) {
        super(props);
        const standard = {};
        standardItems.forEach(val => {
            standard[val] = true;
        });
        this.state = {
            isOpen: false,
            parts: standard,
        };
    }

    render() {
        const { dispatch } = this.props;
        const { isOpen, parts } = this.state;
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
                <div />
                <StandardModal
                    isOpen={isOpen}
                    title="Standard Parts"
                    appElement={document.getElementById("allContent")}
                >
                    {standardItems.map((val, indx) => (
                        <React.Fragment key={indx}>
                            <Checkbox
                                key={val}
                                text={val}
                                checked={parts[val]}
                                onChange={() => {
                                    const newState = {
                                        ...this.state,
                                        parts: {
                                            ...parts,
                                            [val]: !parts[val],
                                        },
                                    };
                                    this.setState(newState);
                                }}
                            />
                            <div key={`${val}_new_line`} />
                        </React.Fragment>
                    ))}
                    <div />
                    <Button
                        text="Close"
                        onClick={() => {
                            const { state } = this;
                            const newState = {
                                ...state,
                                isOpen: false,
                            };
                            this.setState(newState);
                        }}
                    />
                    <Button
                        text="Submit"
                        onClick={() => {
                            const { state } = this;
                            const p = [];
                            Object.entries(state.parts).forEach(
                                ([indx, val]) => {
                                    if (val) {
                                        p.push(indx);
                                    }
                                },
                            );
                            dispatch(addStandardParts(p));
                            const newState = {
                                ...state,
                                isOpen: false,
                            };
                            this.setState(newState);
                        }}
                    />
                </StandardModal>
            </div>
        );
    }
}

export default Empty;
