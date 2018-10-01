import React from "react";

// eslint-disable-next-line
export default class Item extends React.Component {
    render() {
        const { props } = this;
        return (
            <div style={{}}>
                <img src={props.image} alt={props.name} />
                <div style={{}}>
                    <p style={{}}>{props.name}</p>
                    {/* <p style={{}}>
                        {props.barcode}
                    </p> */}
                </div>
                <div style={{}}>
                    <p style={{}}>Only {props.quantity} Left!</p>
                </div>
            </div>
        );
    }
}
