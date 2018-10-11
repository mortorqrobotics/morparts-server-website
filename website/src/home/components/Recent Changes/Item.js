import React from "react";

// eslint-disable-next-line
export default class Item extends React.Component {
    render() {
        const { props } = this;
        console.log(props);
        return (
            <div style={{}}>
                <div style={{}}>
                    {props.name}
                </div>
                <div style={{}}>
                    {props.lastUpdatedBy} changed this at {props.updated_at}
                </div>
            </div>
        );
    }
}
