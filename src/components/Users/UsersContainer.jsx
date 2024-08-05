import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from '@reduxjs/toolkit';
import { getPageSize, takeUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';


class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? < Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users:takeUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

let withRedirect = withAuthRedirect(UsersContainer)



    export default compose(
    
        connect(mapStateToProps, {
            follow, unfollow,
            setCurrentPage,
            toggleFollowingProgress, getUsers}),
            withAuthRedirect
    )(UsersContainer)