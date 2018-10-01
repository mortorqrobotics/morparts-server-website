import React from "react";
import Radium from "radium";
import WhiteBox from "~/shared/components/WhiteBox";
import styles from "~/home/styles";

@Radium
class Container extends React.Component {
    render(props) {
        return (
            <WhiteBox style={styles.whiteBox}>
                <h2 style={styles.title}>{props.title}</h2>
                {props.children}
            </WhiteBox>
        );
    }
}

export default Container;
