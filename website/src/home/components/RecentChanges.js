/* eslint-disable no-underscore-dangle */
import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";

import WhiteBox from "~/shared/components/WhiteBox";
import Container from "~/home/components/Container";
import styles from "~/home/styles";
import { connect } from "react-redux";

@Radium
class RecentChanges extends React.Component {
    static propTypes = {
        recentChanges: PropTypes.arrayOf(
            PropTypes.shape({
                lastUpdatedBy: PropTypes.shape({
                    profilePage: PropTypes.string,
                    name: PropTypes.string,
                    picture: PropTypes.string,
                }),
                updated_at: PropTypes.instanceOf(Date),
            }),
        ),
    };

    render() {
        const { recentChanges } = this.props;
        return (
            <Container title="Recent Changes">
                {recentChanges
                    .sort(change => -1 * change.updated_at.valueOf())
                    .map(change => (
                        <WhiteBox style={styles.itemBox}>
                            <a href={change.lastUpdatedBy.profilePage}>
                                <img
                                    style={styles.profilePicture}
                                    title={change.lastUpdatedBy.name}
                                    src={`${change.lastUpdatedBy.picture}-60`}
                                    alt="profile"
                                />
                            </a>
                            <div>
                                <p style={styles.p}>
                                    {change.lastUpdatedBy.name}
                                </p>
                                <p style={styles.p}>
                                    {change.name} was updated at
                                    {` ${change.updated_at.toLocaleString()}`}
                                </p>
                            </div>
                        </WhiteBox>
                    ))}
            </Container>
        );
    }
}

const getRecentChanges = changes =>
    (changes || [])
        .map(change => {
            const c = {
                ...change,
            };
            c.updated_at = new Date(change.updated_at);
            return c;
        })
        .sort(change => -1 * change.updated_at.valueOf());

const mapStateToProps = state => ({
    recentChanges: getRecentChanges(state.changes),
});

export default connect(mapStateToProps)(RecentChanges);
