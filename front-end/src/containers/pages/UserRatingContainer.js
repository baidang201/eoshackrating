import { connect } from 'react-redux';
import React from 'react';
import { UserRatingComponent } from 'components/pages';
import { appSelectors } from 'ducks/app';
import { userSelectors } from 'ducks/user';
import ImmutablePropTypes from 'react-immutable-proptypes';

const UserRatingContainer = ( props ) => {
    const { user } = props;
    return <UserRatingComponent
        user={ user }
    />;
};

UserRatingContainer.propTypes = {
    user: ImmutablePropTypes.map,
};

export default connect(
    state => {
        const index = +appSelectors.selectQueryParam(state, 'id');
        return ({
            ...userSelectors.user(state, index),
        });
    },
    null,
)(UserRatingContainer);
