import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from "./ProfileStatus";
import userPhoto from '../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
// const ProfileInfo = (profile, status, updateStatus, isOwner, savePhoto) => {
//    if(!profile) {
//       return <Preloader />
//    }
   //    return ( 
//    <div>
      //       <div className={s.descriptionBlock}>
//          <img src={profile.photos.large} />
//          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
         //       </div>
   //    </div>
//    )
// }

const ProfileInfo = (props) => {
   if(!props.profile) {
      return <Preloader />
   }
    
   // //add handler event
   // const omMainPhotoSelected = (e) => {
   //    if (e.target.files.length) {
   //       savePhoto(e.target.files[0]);
   //    }
   //  }

   return ( 
   <div>
      <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large} className={s.mainPhoto} />
         {/* add button with loading foto
         <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} />
{ isOwner && <input type={"file"} />} onChange={omMainPhotoSelected}*/}

{/* editMode ? <ProfileDataForm profile={profile}/> : <ProfileData profile={profile} /> */}
         
         <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
         </div>
   </div>
   )

//    const ProfileData = ({profile}) => {
//     return   <div>
// <div>
//   <b>Fool name</b>: {profile.fullName}
//    </div>
// <div>
//   <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
//    </div>
//    { profile.lookingForAJob &&
//    <div>
//       <b>My professional skills</b>: {profile.lookingForAJobDescription}
//       </div>
// }
// <div>
//   <b>About me</b>: {profile.aboutMe}
// </div>
// <div>
//   <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
//    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
//    })}
// </div>
// </div> 
//    }

//    const Contact = ({contactTitle, contactValue}) => {
//       return <div><b>{contactTitle}</b>: {contactValue}</div>
//    }
}

export default ProfileInfo