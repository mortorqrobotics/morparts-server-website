import React from "react";
import Radium from "radium";

import styles from "~/home/styles";
import WhiteBox from "~/shared/components/WhiteBox"

const Container = (props) => (
    <WhiteBox style={{ width: "30vw", height: "70vh" }}>
        <h2 style={styles.title}>{props.title}</h2>
        {props.children}
    </WhiteBox>
);

@Radium
class Body extends React.Component {

    render() {
        return (
            <div style={styles.body}>
                <Container title="Low Inventory" />
                <Container title="Recent Changes" />
                <Container title="Assignments" />
            </div>
        )
    }
}

export default Body;
