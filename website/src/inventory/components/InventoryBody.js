import React from "react";
import Radium from "radium";

import Button from "~/shared/components/Button";

@Radium
export default class InventoryBody extends React.Component {
    render() {
        return (
            <div>
                <Button 
                    text="Add item"
                />
                All items inside the Inventory will be mapped here, 
                each having an Item class
            </div>
        );
    }
}