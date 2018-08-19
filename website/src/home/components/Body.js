import React from "react";
import Radium from "radium";

import styles from "~/home/styles";
import WhiteBox from "~/shared/components/WhiteBox"

@Radium
class Body extends React.Component {

    render() {
        return (
            <div>
                <WhiteBox width="30vw" height="70vh">
                    <h2 style={styles.title}>Low Inventory</h2>
                </WhiteBox>

                <WhiteBox width="30vw" height="70vh">
                    <h2 style={styles.title}>Recent Changes</h2>
                </WhiteBox>

                <WhiteBox width="30vw" height="70vh">
                    <h2 style={styles.title}>Assignments</h2>
                </WhiteBox>
            </div>
        )
    }
}

export default Body;
