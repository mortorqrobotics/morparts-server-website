import { connect } from "react-redux";
import LowInventory from "./Recent Changes";

const getRecentChanges = changes => 
    (changes || []);

const mapStateToProps = state => ({
    recentChanges: getRecentChanges(state.changes),
});

const LowInventoryContainer = connect(
    mapStateToProps,
    // mapDispatchToProps,
)(LowInventory);

export default LowInventoryContainer;
