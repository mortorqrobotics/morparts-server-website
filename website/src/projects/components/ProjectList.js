import React from "react";
import Radium from "radium";

import Button from "~/shared/components/Button";
import styles from "~/projects/styles";
import { addProject } from "~/projects/actions";
import { connect } from "react-redux";

@Radium
class ProjectList extends React.Component {

    render() {
        return (
            <ul style={styles.container}>
                {this.props.projects.map(project => (
                    <div>
                        <li
                            key={project._id}
                            style={styles.project}
                        >
                            {project.name}
                        </li>
                    </div>
                ))}
                <hr style={styles.hr}/>
                <Button
                    text="Add Project"
                    onClick={() => this.props.dispatch(addProject({
                        name: "project",
                        prefix: "1515",
                    }))}
                />
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
    }
}

export default connect(mapStateToProps)(ProjectList);
