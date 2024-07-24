import { createSelector } from "@reduxjs/toolkit";

export const getUsersSelector = (state) => {
return state.usersPage.users;
}


    // в более сложный селектор первым параметром закидываем более примитивный
export const takeUsers = createSelector(getUsersSelector, getIsFetching,
     (users) => {
   return users.filter(u=>true); 
});

export const getPageSize = (state) => {
    return state.usersPage.getPageSize;
    }

    export const getTotalUsersCount = (state) => {
        return state.usersPage.totalUsersCount;
    }

    export const getCurrentPage = (state) => {
        return state.usersPage.currentPage;
    }    

    export const getIsFetching  = (state) => {
        return state.usersPage.isFetching;
    }  
    
    export const getFollowingInProgress = (state) => {
        return state.usersPage.followingInProgress;
    }  

    