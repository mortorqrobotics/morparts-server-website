import React from "react";
import Radium from "radium";

import Button from "~/shared/components/Button";
import { modalProps } from "~/util/modal";
import MakeProjectModal from "~/projects/components/MakeProjectModal";
import styles from "~/projects/styles";
import { connect } from "react-redux";

@Radium
class ProjectList extends React.Component {

    state = {
        isModalOpen: false,
    }

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
                    onClick={() => this.setState({ isModalOpen: true })}
                />
                <MakeProjectModal { ...modalProps(this, "isModalOpen") } />
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
