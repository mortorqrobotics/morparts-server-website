import React from "react";
import Radium from "radium";

import MakePartModal from "~/project/components/MakePartModal";
import Button from "~/shared/components/Button";
import Part from "~/project/components/Part";
import { connect } from "react-redux";
import { modalProps } from "~/util/modal"
import styles from "~/project/styles";

@Radium
class Tree extends React.Component {

    state = {
        isModalOpen: false,
        parentId: null,
    }

    renderAddPartButton(parent) {
        return (
            <div>
                <Button
                    onClick={() => this.setState({
                        isModalOpen: true,
                        parentId: parent ? parent._id : null,
                    })}
                    text="Add Part"
                    style={styles.button}
                />
            </div>
        )
    }

    renderParts(parts) {
        return (
            <div>
                {parts.map(part => (
                    <div>
                        <Part
                            key={part._id}
                            part={part}
                        >
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
            <div style={styles.assemblyDiv}>
                {this.renderParts(this.findParts(assembly.childAssemblies))}
                {this.renderParts(this.findParts(assembly.childParts))}
                {this.renderAddPartButton(assembly)}
            </div>
        )
    }

    render() {
        return (
            <div style={styles.container}>
                {this.props.project.name}

                {this.renderParts(this.props.parts.filter(part => !part.parent && part.isAssembly))}
                {this.renderParts(this.props.parts.filter(part => !part.parent && !part.isAssembly))}
                {this.renderAddPartButton(null)}

                <MakePartModal parentId={this.state.parentId} { ...modalProps(this, "isModalOpen") } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.project,
        parts: state.parts,
    }
}

export default connect(mapStateToProps)(Tree);
