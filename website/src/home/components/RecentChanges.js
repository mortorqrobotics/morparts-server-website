/* eslint-disable no-underscore-dangle */
import React from "react";
import Radium from "radium";

import WhiteBox from "~/shared/components/WhiteBox";
import Container from "~/home/components/Container";
import styles from "~/home/styles";
import { connect } from "react-redux"

@Radium
class RecentChanges extends React.Component {

    render() {
            console.log(this.props.recentChanges)
        return (
            <Container title="Recent Changes">
                {this.props.recentChanges.map(change => (
                    <WhiteBox style={styles.itemBox}>
                        <a href={change.lastUpdatedBy.profilePage}>
                            <img
                                style={styles.profilePicture}
                                title={change.lastUpdatedBy.name}
                                src={`//www.morteam.com${change.lastUpdatedBy.picture}-60`}
                                alt="profile"
                            />
                        </a>
                        <div>
                            <p style={styles.p}>{change.lastUpdatedBy.name}</p>
                            <p style={styles.p}>
                                {change.name} was updated at
                                {` ${new Date(change.updated_at).toLocaleString()}`}
                            </p>
                        </div>
                    </WhiteBox>
                ))}
            </Container>
        );
    }
}

const getRecentChanges = changes => changes || [];

const mapStateToProps = state => ({
    recentChanges: getRecentChanges(state.changes),
});

export default connect(mapStateToProps)(RecentChanges);
