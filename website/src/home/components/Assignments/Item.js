import React from "react";
import PropTypes from "prop-types";
import Button from "~/shared/components/Button";

// eslint-disable-next-line
export default class Item extends React.Component {
    static propTypes = {
        completed: PropTypes.func,
        workInProgress: PropTypes.func,
        name: PropTypes.string,
        description: PropTypes.string,
        path: PropTypes.arrayOf(PropTypes.object),
        partId: PropTypes.string,
    };

    render() {
        const {
            completed,
            workInProgress,
            name,
            description,
            path,
            partId,
        } = this.props;
        return (
            <div style={{}}>
                <div style={{}}>
                    <Button style={{}} text="Completed" onClick={completed} />
                    <Button
                        style={{}}
                        text="Work In Progress"
                        onClick={workInProgress}
                    />
                </div>
                <p style={{}} tooltip={description}>
                    {name}
                </p>
                <div style={{}}>
                    <p style={{}}>{path}</p>
                    <p style={{}}>{partId}</p>
                </div>
            </div>
        );
    }
}
