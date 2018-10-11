import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import WhiteBox from "~/shared/components/WhiteBox";
import Item from "./Item";
import styles from "~/home/styles";

@Radium
class LowInventory extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.object),
    };

    render() {
        const { title, items } = this.props;
        return (
            <WhiteBox style={styles.whiteBox}>
                <h2 style={styles.title}>{title || "Low Inventory"}</h2>
                {items.map(item => (
                    <Item
                        image={item.img}
                        name={item.name}
                        minQuantity={item.minQuantity}
                        quantity={item.quantity}
                    />
                ))}
            </WhiteBox>
        );
    }
}

export default LowInventory;
