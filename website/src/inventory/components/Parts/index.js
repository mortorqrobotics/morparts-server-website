import { connect } from "react-redux";
import Parts from "./Parts";

const mapStateToProps = (state, props) => ({
    parts: state.parts,
    inventoryId: state.selectInventory,
    ...props,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Parts);
