/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import Radium from "radium";

import Glyphicon from "react-bootstrap/lib/Glyphicon";
import styles from "~/project/styles/tree";
import StatusDot from "~/shared/components/StatusDot";
import { getIdentifierString } from "~/util/part";

import { selectPart, toggleAssemblyCollapse } from "~/project/actions";
import { connect } from "react-redux";

@Radium
class Part extends React.Component {
    static propTypes = {
        selectedPartId: PropTypes.string,
        isHovered: PropTypes.bool,
        dispatch: PropTypes.func,
        // eslint-disable-next-line react/forbid-prop-types
        part: PropTypes.object,
        children: PropTypes.node,
    };

    render() {
        const {
            selectedPartId,
            isHovered,
            dispatch,
            part,
            children,
        } = this.props;
        return (
            <div>
                <div
                    style={[
                        styles.label,
                        selectedPartId === part._id && styles.selected,
                        isHovered && styles.hovered,
                    ]}
                    onClick={() => dispatch(selectPart(part._id))}
                >
                    <Glyphicon
                        style={styles.glyph}
                        glyph={part.isAssembly ? "th" : "cog"}
                        onClick={part.isAssembly && part.children.parts.length > 0 ?
                                () => dispatch(toggleAssemblyCollapse(part._id)) : () => {}
                        }
                    />
                    <StatusDot status={part.status} />
                    <span>{part.name}</span>
                    <span style={styles.identifier}>
                        [{getIdentifierString(part)}]
                    </span>
                </div>
                <div style={styles.line}>{children}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedPartId: state.selectedPartId,
});

export default connect(mapStateToProps)(Part);
