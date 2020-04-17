import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, setUsersAC } from '../../Redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(followAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(userId))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Users);