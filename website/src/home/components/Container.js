import React from "react";
import Radium from "radium";

import WhiteBox from "~/shared/components/WhiteBox";
import styles from "~/home/styles";

@Radium
class Container extends React.Component {

    render() {
        return (
            <WhiteBox style={styles.whiteBox}>
                <h2 style={styles.title}>{this.props.title}</h2>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </WhiteBox>
        );
    }
}

export default Container;
