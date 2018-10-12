import { connect } from "react-redux";
import Parts from "./Parts";

const mapStateToProps = (state, props) => ({
    parts: state.parts,
    ...props,
});

export default connect(mapStateToProps)(Parts);
