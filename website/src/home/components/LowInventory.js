import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import Container from "~/home/components/Container";
import styles from "~/home/styles";
import { connect } from "react-redux";

@Radium
class LowInventory extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object),
    };

    render() {
        const { items } = this.props;
        return (
            <Container title="Low Inventory">
                {items.map(item => (
                    <div style={{}}>
                        <img src={item.image} alt={item.name} />
                        <div style={{}}>
                            <p style={{}}>{item.name}</p>
                            {/* <p style={{}}>
                            {props.barcode}
                            </p> */}
                        </div>
                        <div style={{}}>
                            <p style={{}}>Only {item.quantity} Left!</p>
                        </div>
                    </div>
                ))}
            </Container>
        );
    }
}

const getLowInventoryItems = items => [];
// (items || []).filter(item => item.quantity < item.minQuantity);

const mapStateToProps = state => ({
    items: getLowInventoryItems(state.items),
});

export default connect(mapStateToProps)(LowInventory);
