import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import Glyphicon from "react-bootstrap/lib/Glyphicon";
import styles from "~/project/styles/middle";
import { makeChangeHandlerFactory } from "~/util";
import { connect } from "react-redux";

const RadiumGlyphicon = Radium(Glyphicon);

@Radium
class Description extends React.Component {
    static propTypes = {
        description: PropTypes.string,
        onSave: PropTypes.func,
    };

    constructor(props) {
        super(props);
        const { description } = props;
        this.state = {
            isEditing: false,
            description,
        };
    }

    getChangeHandler = makeChangeHandlerFactory(this);

    render() {
        const { isEditing, description } = this.state;
        const { onSave } = this.props;
        const { props } = this;
        const prevDescription = props.description;
        return (
            <div>
                <textarea
                    style={
                        isEditing
                            ? styles.description.editing
                            : styles.description.notEditing
                    }
                    onChange={this.getChangeHandler("description")}
                    onClick={() => this.setState({ isEditing: true })}
                    placeholder="Description"
                    value={description}
                />

                {isEditing && (
                    <div>
                        <RadiumGlyphicon
                            glyph="ok-circle"
                            style={styles.save}
                            onClick={() => {
                                onSave(description);
                                this.setState({ isEditing: false });
                            }}
                        />
                        <RadiumGlyphicon
                            glyph="ban-circle"
                            style={styles.cancel}
                            onClick={() =>
                                this.setState({
                                    isEditing: false,
                                    description: prevDescription,
                                })
                            }
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default connect()(Description);
