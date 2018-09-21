import React from 'react';
import Radium from 'radium';
import WhiteBox from "~/shared/components/WhiteBox";
import Item from './Item';

@Radium
class LowInventory extends React.Component{
    render() {
        const {
            props,
        } = this;
        return (
            <WhiteBox style={styles.whiteBox}>
                <h2 style={styles.title}>{props.title}</h2>
                {props.items.map(item => (
                    <Item image={item.img} name={item.name} minQuantity={item.minQuantity} quantity={item.quantity} />
                ))}
            </WhiteBox>
        )
    }
}

export default LowInventory;
