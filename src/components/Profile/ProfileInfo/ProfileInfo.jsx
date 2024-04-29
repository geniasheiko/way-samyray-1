import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return ( 
   <div>
      <div>
         <img src='https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg' />
      </div>
      <div className={s.descriptionBlock}>
         ava+description
      </div>
   
   </div>
   )


}
export default ProfileInfo