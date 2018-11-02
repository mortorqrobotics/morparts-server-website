import { connect } from "react-redux";
import Selector from "./Selector";

const mapStateToProps = (state, props) => ({
    inventories: state.inventories,
    inventoryId: state.selectInventory,
    ...props,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Selector);
