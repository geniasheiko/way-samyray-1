import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It\'s my first post', likesCount: 11 },
    { id: 3, message: 'Blabla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 }
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length + 1,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(p => p.id !== action.postId) };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;






// import {profileAPI, usersAPI } from '../api/api'

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const SET_USER_PROFILE = 'SET_USER_PROFILE';
// const SET_STATUS ='SET_STATUS';
// const DELETE_POST = 'DELETE_POST';
//const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

// если вначале State не передали, а его и нет вначале, то передаем это
// let initialState = {
//   posts: [
//     { id: 1, message: 'Hi, how are you?', likesCount: 12 },
//     { id: 2, message: 'It\'s my first post', likesCount: 11 },
//     { id: 3, message: 'Blabla', likesCount: 11 },
//     { id: 4, message: 'Dada', likesCount: 11 },

//   ],
//    newPostText: "",   ///'it-kamasutra.com'
//   profile: null,
//   status: ""
// };

// const profileReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_POST: {
//       let newPost = {
//         id:5,
//         message: action.newPostText,  //state change action
//         lekesCount: 0
//       };
//       return {
//         ...state,
//         posts: [...state.posts, newPost],
//         //newPostText: ''
//       };
//     }
//     case UPDATE_NEW_POST_TEXT: {
//       return {
//         ...state,
//         newPostText: action.newText
//       }
//     }
//     case SET_STATUS: {
//       return {
//         ...state,
//         status: action.status
//       };
//       }
//     case SET_USER_PROFILE: {
//       return { ...state, profile: action.profile }
//     }
//     case DELETE_POST:
//       return {...state, posts: state.posts.filter(p => p.id !=action.postId)}

// case SAVE_PHOTO_SUCCESS: 
// return {...state, profile: {...state.profile, photos: action.photos}}

//     default:
//       return state;
//   }
// };

// export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })    //added newPostText
// export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
// export const setStatus = (status) => ({ type: SET_STATUS, status })
// export const deletePost = (postId) => ({ type: DELETE_POST, postId})
// export const updateNewPostText = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText})
//export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

//То же, что и нижу, но сделано через then, что бы без async
// export const getUserProfile = (userId) => (dispatch) => {
//   usersAPI.getProfile(userId).then(response => {  
//     dispatch(setUserProfile(response.data));
// });
// }
//То же, что и выше, но сделано через async, что бы без then
// export const getUserProfile = (userId) => async (dispatch) => {
//   const response = await usersAPI.getProfile(userId);
//     dispatch(setUserProfile(response.data));
// }

// export const getStatus = (userId) => async (dispatch) => {
//   let response = await profileAPI.getStatus(userId);
//   dispatch(setStatus(response.data));
// }

// export const updateStatus = (status) => async (dispatch) => {
//  let response = await profileAPI.updateStatus(status)
  
//    if (response.data.resultCode === 0) {
//     dispatch(updateStatus(status));
//    }
// }

// export const updateStatus = (status) => async (dispatch) => {
//   const response = await profileAPI.updateStatus(status);
//   if (response.data.resultCode === 0) {
//     dispatch(setStatus(status));
//   }
// };

// export const savePhoto = (file) => async (dispatch) => {
//   let response = await profileAPI.savePhoto(file);

//   if(response.data.resultCode === 0) {
//     dispatch(savePhotoSuccess(response.data.data.photos));
//   }
// }

// export const updateNewPostTextActionCreator = (text) => ({
//   type: UPDATE_NEW_POST_TEXT, newText: text
// })
// export default profileReducer;