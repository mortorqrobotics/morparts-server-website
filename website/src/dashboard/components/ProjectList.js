/* eslint-disable no-underscore-dangle, react/no-unused-state */
import React from "react";
import Radium from "radium";

import Button from "~/shared/components/Button";
import { modalProps } from "~/util/modal";
import MakeProjectModal from "~/dashboard/components/MakeProjectModal";
import styles from "~/dashboard/styles";

import { connect } from "react-redux";

@Radium
class ProjectList extends React.Component {
    state = {
        isModalOpen: false,
    };

    render() {
        const { projects } = this.props;
        return (
            <div>
                <h1 style={styles.h1}>Projects</h1>
                <ul style={styles.container}>
                    {projects.map(
                        project =>
                            project ? (
                                <li
                                    key={project._id}
                                    style={styles.project}
                                    onClick={() =>
                                        window.location.assign(
                                            `/projects/id/${project._id}`,
                                        )
                                    }
                                >
                                    {project.name}
                                </li>
                            ) : null,
                    )}
                    <hr style={styles.hr} />
                    <Button
                        text="Add Project"
                        style={styles.button}
                        onClick={() => this.setState({ isModalOpen: true })}
                    />
                </ul>

                <MakeProjectModal {...modalProps(this, "isModalOpen")} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    projects: state.projects,
});

export default connect(mapStateToProps)(ProjectList);
