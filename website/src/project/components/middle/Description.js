import React from "react";
import Radium from "radium";

import Glyphicon from "react-bootstrap/lib/Glyphicon";
import styles from "~/project/styles/middle";
import { makeChangeHandlerFactory } from "~/util";

import { setDescription } from "~/project/actions";
import { connect } from "react-redux";

const RadiumGlyphicon = Radium(Glyphicon);

@Radium
class Description extends React.Component {

    state = {
        isEditing: false,
        description: this.props.description,
    }

    getChangeHandler = makeChangeHandlerFactory(this);

    render() {
        return (
            <div>
                <textarea
                    style={this.state.isEditing ? styles.description.editing : styles.description.notEditing}
                    onChange={this.getChangeHandler("description")}
                    onClick={() => this.setState({ isEditing: true })}
                    placeholder="Description"
                    value={this.state.isEditing ? this.state.description : this.props.selectedPart.description}
                />

                {this.state.isEditing && (
                    <div>
                        <RadiumGlyphicon
                            glyph="ok-circle"
                            style={styles.save}
                            onClick={() => {
                                this.props.dispatch(setDescription(this.props.selectedPart._id, this.state.description))
                                this.setState({
                                    isEditing: false,
                                    description: this.props.selectedPart.description,
                                })
                            }}
                        />
                        <RadiumGlyphicon glyph="ban-circle" style={styles.cancel}
                            onClick={() => this.setState({
                                isEditing: false,
                                description: this.props.selectedPart.description,
                            })}
                        />
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPart: state.parts.find(part => part._id === state.selectedPartId),
    }
}

export default connect(mapStateToProps)(Description);
