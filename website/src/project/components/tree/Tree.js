import React from "react";
import Radium from "radium";

import MakePartModal from "~/project/components/tree/MakePartModal";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Button from "~/shared/components/Button";
import WhiteBox from "~/shared/components/WhiteBox";
import Part from "~/project/components/tree/Part";
import { modalProps } from "~/util/modal"
import { tree as styles } from "~/project/styles";
import { filterPartType } from "~/util/part";

import { connect } from "react-redux";

@Radium
class Tree extends React.Component {

    state = {
        isModalOpen: false,
        parentId: null,
    }

    renderAddPartButton(parent) {
        return (
            <div
                onClick={() => this.setState({
                        isModalOpen: true,
                        parentId: parent ? parent._id : null,
                })}
                style={styles.button}
            >
                <Glyphicon style={styles.glyph} glyph="plus" />
                Add Part
            </div>
        )
    }

    renderParts(parts) {
        return (
            <div>
                {parts.map(part => (
                    <div key={part._id}>
                        <Part part={part}>
                            {part.isAssembly && this.assemblyTree(part)}
                        </Part>
                    </div>
                ))}
            </div>
        )
    }

    findPart(partId) {
        return this.props.parts.find(part => part._id === partId);
    }

    findParts(partIds) {
        return partIds.map(id => this.findPart(id))
    }

    assemblyTree(assembly) {
        return (
            <div style={styles.offset}>
                {this.renderParts(filterPartType(this.findParts(assembly.children.parts), true))}
                {this.renderParts(filterPartType(this.findParts(assembly.children.parts), false))}

                {this.props.selectedPartId === assembly._id && this.renderAddPartButton(assembly)}
            </div>
        )
    }

    render() {
        return (
            <WhiteBox style={{ width: "400px" }}>
                {this.props.parts.length > 0 && this.renderParts([this.props.parts.find(part => part.isRootAssembly)])}
                <MakePartModal parentId={this.state.parentId} { ...modalProps(this, "isModalOpen") } />
            </WhiteBox>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        parts: state.parts,
        selectedPartId: state.selectedPartId,
    }
}

export default connect(mapStateToProps)(Tree);
