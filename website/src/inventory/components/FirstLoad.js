import React from "react";
import Radium from "radium";

import Button from "~/shared/components/Button";

@Radium
export default class FirstLoad extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Your team has not established an inventory.
                    Choose to create one from scratch, or use a template.
                </h1>
                <Button
                    text="Load from Template"
                />
                <Button
                    text="Create from Scratch"
                />
            </div>
        )
    }
}