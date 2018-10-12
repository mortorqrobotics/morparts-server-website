import React from "react";
import PropTypes from "prop-types";

const Item = props => {
    const { name, lastUpdatedBy, updatedAt } = props;
    return (
        <div style={{}}>
            <div style={{}}>{name}</div>
            <div style={{}}>
                {lastUpdatedBy} changed this at {updatedAt}
            </div>
        </div>
    );
};
Item.propTypes = {
    name: PropTypes.string,
    lastUpdatedBy: PropTypes.string,
    updatedAt: PropTypes.instanceOf(Date),
};
export default Item;
