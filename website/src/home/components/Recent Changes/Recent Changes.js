import React from "react";
import Radium from "radium";
import WhiteBox from "~/shared/components/WhiteBox";
import Item from "./Item";
import styles from "~/home/styles";

@Radium
class RecentChanges extends React.Component {
    render() {
        const { recentChanges, title } = this.props;
        return (
            <WhiteBox style={styles.whiteBox}>
                <h2 style={styles.title}>{title || "Recent Changes"}</h2>
                {recentChanges.map((change, i) => (
                    <Item
                        partID={change._id}
                        updated_at={change.updated_at}
                        lastUpdatedBy={change.lastUpdatedBy}
                        name={change.name}
                    />
                ))}
            </WhiteBox>
        );
    }
}

export default RecentChanges;
