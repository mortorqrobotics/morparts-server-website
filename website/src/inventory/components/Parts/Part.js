import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import Button from "~/shared/components/Button";

@Radium
class Part extends React.Component {
    static propTypes = {
        part: PropTypes.shape({
            name: PropTypes.string,
        }),
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { part } = this.props;
        return (
            <div>
                <div>{part.name}</div>
                <div>
                    {part.quantity} Left ({part.minQuantity} minimum)
                </div>
            </div>
        );
    }
}

export default Part;
