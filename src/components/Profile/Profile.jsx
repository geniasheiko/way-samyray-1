import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  
   return ( 
           <div>
      <ProfileInfo />
      <MyPostsContainer />
   </div>
   )


}
export default Profile