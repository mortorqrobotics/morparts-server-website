import React from "react";
import Radium from "radium";

import styles from "~/home/styles";
import LowInventory from "~/home/components/LowInventory";
import RecentChanges from "~/home/components/RecentChanges";
import Assignments from "~/home/components/Assignments";

@Radium
class Body extends React.Component {

    render() {
        return (
            <div style={styles.body}>
                <LowInventory />
                <RecentChanges />
                <Assignments />
            </div>
        );
    }
}

export default Body;
