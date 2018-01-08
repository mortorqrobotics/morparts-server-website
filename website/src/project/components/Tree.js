import React from "react";
import Radium from "radium";

import MakePartModal from "~/project/components/MakePartModal";
import Button from "~/shared/components/Button";
import { modalProps } from "~/util/modal"
import TreeView from "react-treeview";
import { connect } from "react-redux";

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
                    text="Add part"
                />
            </div>
        )
    }

    assemblyTree(assembly) {
        return (
            <div>
                {assembly.childAssemblies.map(part => (
                    <TreeView
                        key={part}
                        nodeLabel={this.findPart(part).number}
                        collapsed={false}
                    >
                        {this.assemblyTree(this.findPart(part))}
                    </TreeView>
                ))}
                {assembly.childParts.map(part => (
                    <TreeView
                        key={part}
                        nodeLabel={this.findPart(part).number}
                    />
                ))}
                {this.renderAddPartButton(assembly)}
            </div>
        )
    }

    findPart(partId) {
        return this.props.parts.find(part => part._id === partId);
    }

    render() {
        return (
            <div>
                {this.props.project.name}

                {this.props.parts.filter(part => !part.parent && part.isAssembly).map(part => (
                    <TreeView
                        key={part._id}
                        nodeLabel={part.number}
                        collapsed={false}
                    >
                        {this.assemblyTree(part)}
                    </TreeView>
                ))}
                {this.props.parts.filter(part => !part.parent && !part.isAssembly).map(part => (
                    <TreeView
                        key={part._id}
                        nodeLabel={part.number}
                        collapsed={true}
                    />
                ))}
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
