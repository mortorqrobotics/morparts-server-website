import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import style from "~/home/styles";
import WhiteBox from "~/shared/components/WhiteBox";

@Radium
class Item extends React.Component {
    static propTypes = {
        name: PropTypes.shape({
            name: PropTypes.string,
            picture: PropTypes.string,
        }),
        lastUpdatedBy: PropTypes.string,
        updatedAt: PropTypes.instanceOf(Date),
    };

    render() {
        const { name, lastUpdatedBy, updatedAt } = this.props;
        console.log(lastUpdatedBy);
        return (
            <WhiteBox style={style.itemBox}>
                <a href={lastUpdatedBy.profilePage}>
                    <img
                        style={style.profilePicture}
                        title={lastUpdatedBy.name}
                        src={`//www.morteam.com${lastUpdatedBy.picture}`}
                        alt="profile"
                    />
                </a>
                <div>
                    <div style={{}}>{lastUpdatedBy.name}</div>
                    {name} was updated at
                    {` ${new Date(updatedAt).toLocaleString()}`}
                </div>
            </WhiteBox>
        );
    }
}

export default Item;
