import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   
   return <header className={s.header}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-lkijlO0g1F6MHKlfo2erxZ-z8FSlzTHRA&s' />
  
  <div className={s.loginBlock}>
   { props.isAuth ? props.login 
   : <NavLink to={'/login'}>Login</NavLink> }
   
  </div>
   </header>
}
export default Header;