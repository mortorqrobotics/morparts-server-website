import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";

@Radium
class Inventory extends React.Component {
    render() {
        return (
            <Root pageName="inventory">
                <Navbar />
                <h1>The inventory!</h1>
            </Root>
        );
    }
}

export default Inventory;

pageInit(Inventory);
