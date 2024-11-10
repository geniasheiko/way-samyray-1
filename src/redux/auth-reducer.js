import { authAPI } from "../api/api";


const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
//const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';



let initialState = { 
    userId:null,
   email: null,
   login: null,
   isAuth: false,
   //captchaUrl: null     //if null, then captcha is not required
 };
 
 
 const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
        //case GET_CAPTCHA_URL_SUCCESS:
            return{
                ...state,
                ...action.data,
                isAuth: true
            }
            
            default:
                return state;
    }
 }

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:{ userId,  email, login, isAuth }});

//assinhron response
export const getAuthUserData = () => async (dispatch) => {
let response = await authAPI.me();
    
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
}

//for Captcha
// export const getCaptchaUrlSuccess = (captchaUrl) => ({
//     type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
// });

// Закоментирована, так как нет логина, еще не сделан
// export const login = (email, password, rememberMe) => async (dispatch) => {
//     let response = await authAPI.login(email, password, rememberMe);
//         if (response.data.resultCode === 0) {
//  //success, get auth data
//             dispatch(getAuthUserData())
//         } else  {
//         if(response.data.resultCode === 10) {
//         dispatch(getCaptchaUrl());
//             } 
//             let message = response.data.message.length > 0 ? response.data.resultCode[0] : "Some error";
//             dispatch(stopSubmit("login", {_error: message}));
//         }
//     }

//for Captcha
// export const getCaptchaUrl = () => async(dispatch) => {
//     const response = await securityAPI.getCaptchaUrl();
//     const captchaUrl = response.data.url;
// dispatch(getCaptchaUrlSuccess(captchaUrl));

// }

// export const logout = () => async (dispatch) => {
//     let response = await authAPI.logout();
//     if (response.data.resultCode === 0) {
//         dispatch(setAuthUserData(null, null, null, false));
//     }
// }


 export default authReducer;