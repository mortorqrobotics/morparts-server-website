import React from "react";
import Radium from "radium";

import Button from "~/shared/components/Button";
import { addProject } from "~/projects/actions";
import { connect } from "react-redux";

@Radium
class ProjectList extends React.Component {

    render() {
        return (
            <div>
                {this.props.projects.map(project => (
                    <div key={project._id}>{project.name}</div>
                ))}
                <Button
                    text="Add Project"
                    onClick={() => this.props.dispatch(addProject({
                        name: "project",
                        prefix: "1515",
                    }))}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
    }
}

export default connect(mapStateToProps)(ProjectList);
