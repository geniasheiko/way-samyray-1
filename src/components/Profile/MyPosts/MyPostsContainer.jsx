import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;





// import {addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
// import MyPosts from './MyPosts';
// import { connect } from 'react-redux';

// let mapStateToProps = (state) => {
//   return {
//     posts: state.profilePage.posts,
//      newPostText: state.profilePage.newPostText
//  }
// }
// let mapDispatchToProps = (dispatch) => {
//   return {
//  updateNewPostText: (text) => {
//   let action = updateNewPostTextActionCreator(text);
//       dispatch(action)
//     },
//     addPost: (newPostText) => {                //added newPostText
//       dispatch(addPostActionCreator());   
//     }
//   }
// }

// let mapDispatchToProps = (dispatch) => {
//   return {
//    addPost: (newPostText) => {
//     dispatch(addPostActionCreator(newPostText))
//    }
//     }
//   }
// const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps ) (MyPosts);
// export default MyPostsContainer