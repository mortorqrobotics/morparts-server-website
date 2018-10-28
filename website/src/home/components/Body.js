import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import styles from "~/home/styles";
import WhiteBox from "~/shared/components/WhiteBox";

const Container = props => {
    const { whiteBox, title, children } = props;
    return (
        <WhiteBox style={whiteBox}>
            <h2 style={styles.title}>{title}</h2>
            {children}
        </WhiteBox>
    );
};

Container.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    // eslint-disable-next-line react/forbid-prop-types
    whiteBox: PropTypes.object,
};

@Radium
class Body extends React.Component {
    render() {
        return (
            <div style={styles.body}>
                <Container title="Low Inventory" />
                <Container title="Recent Changes" />
                <Container title="Assignments" />
            </div>
        );
    }
}

export default Body;
