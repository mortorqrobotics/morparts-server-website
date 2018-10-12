/* eslint-disable no-underscore-dangle */
import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import WhiteBox from "~/shared/components/WhiteBox";
import Item from "./Item";
import styles from "~/home/styles";

@Radium
class RecentChanges extends React.Component {
    static propTypes = {
        recentChanges: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.string,
                updated_at: PropTypes.instanceOf(Date),
                lastUpdatedBy: PropTypes.string,
                name: PropTypes.string,
            }),
        ),
        title: PropTypes.node,
    };

    render() {
        const { recentChanges, title } = this.props;
        return (
            <WhiteBox style={styles.whiteBox}>
                <h2 style={styles.title}>{title || "Recent Changes"}</h2>
                {recentChanges.map(change => (
                    <Item
                        partID={change._id}
                        updated_at={change.updatedAt}
                        lastUpdatedBy={change.lastUpdatedBy}
                        name={change.name}
                    />
                ))}
            </WhiteBox>
        );
    }
}

export default RecentChanges;
