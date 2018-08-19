import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";
import FirstLoad from "~/inventory/components/FirstLoad";

@Radium
class Inventory extends React.Component {
    render() {
        return (
            <Root pageName="inventory">
                <Navbar />
                <FirstLoad />

            </Root>
        );
    }
}

export default Inventory;

pageInit(Inventory);
