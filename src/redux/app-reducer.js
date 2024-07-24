// import { authAPI } from "../api/api";
// import { getAuthUserData } from "./auth-reducer";
// import { getAuthProfileData } from "./auth-reducer";

// const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';   //экшен



// let initialState = { 
//   initialized: false
//  };
 
 
//  const appReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case INITIALIZED_SUCCESS:
//             return{
//                 ...state,
//                initialized: true
//             }
            
//             default:
//                 return state;
//     }
//  }

//  //диспатчим
// export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

// //диспатчим санку
// export const initializeApp = () => (dispatch) => {
//    let promise = dispatch(getAuthUserData());
//    //когда данные получены, мы диспачим
//    Promise.all([promise])
//    .then(() => {
//    dispatch(initializedSuccess());
//    });
// }


//  export default appReducer;