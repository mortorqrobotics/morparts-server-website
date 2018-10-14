import React from "react";
import PropTypes from "prop-types";
import style from "~/home/styles";
import WhiteBox from "~/shared/components/WhiteBox";

const Item = props => {
    const { name, lastUpdatedBy, updatedAt } = props;
    console.log(updatedAt);
    return (
        <WhiteBox style={style.itemBox}>
            <div style={{}}>{name}</div>
            <div style={{}}>
                {lastUpdatedBy} changed this at
                {` ${new Date(updatedAt).toLocaleString()}`}
            </div>
        </WhiteBox>
    );
};
Item.propTypes = {
    name: PropTypes.string,
    lastUpdatedBy: PropTypes.string,
    updatedAt: PropTypes.instanceOf(Date),
};
export default Item;
