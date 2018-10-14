import { connect } from "react-redux";
import LowInventory from "./Assignments";

const getAssignmentsDue = assignments => []; // (assignments || [])
// .filter(assignment => assignment.done)
// .sort(assignment => assignment.date)
// .reverse();

const mapStateToProps = state => ({
    assignments: getAssignmentsDue(state.assignments),
});

const LowInventoryContainer = connect(
    mapStateToProps,
    // mapDispatchToProps,
)(LowInventory);

export default LowInventoryContainer;
