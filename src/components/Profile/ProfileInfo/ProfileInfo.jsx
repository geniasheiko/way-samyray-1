import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
   if(!props.profile) {
      return <Preloader />
   }
   
   return ( 
   <div>
      <div>
         <img src='https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg' />
      </div>
      <div className={s.descriptionBlock}>
         <img src={props.profile.photos.large} />
         
         
      </div>
   
   </div>
   )


}
export default ProfileInfo