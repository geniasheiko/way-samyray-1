import axios from 'axios';
import { unfollow } from '../redux/users-reducer';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }

});


export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
follow(userId) {
    return instance.post(`follow/${userId}`)
},
unfollow(userId) {
    return instance.delete(`follow?page=${userId}`)
       },
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object.')
   return profileAPI.getProfile(userId);
    
  }     
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
   },
   getStatus(userId) {
    return instance.get(`profile/status/` + userId);
   },
   updateStatus(status) {
   return instance.put('profile/status', { status: status });
   },
   
//    savePhoto(photosFile) {
//     const formData = new FormData();
//     formData.append("image", photoFile);
//  return instance.put(`profile\photo`, formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     });
//    }
}

export const authAPI = {
    me() {
     return instance.get(`auth/me`)
           }
}

//for Capcha
// export const securityAPI = {
//     getCaptchaUrl() {
//         return instance.get(`security/get-captcha-url`);
//     }
// }










