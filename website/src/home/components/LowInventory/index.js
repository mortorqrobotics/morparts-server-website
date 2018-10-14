import { connect } from "react-redux";
import LowInventory from "./LowInventory";

const getLowInventoryItems = items => [];
// (items || []).filter(item => item.quantity < item.minQuantity);

const mapStateToProps = state => ({
    items: getLowInventoryItems(state.items),
});

const LowInventoryContainer = connect(
    mapStateToProps,
    // mapDispatchToProps,
)(LowInventory);

export default LowInventoryContainer;
