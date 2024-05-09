import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
   return (
   <nav className={s.nav}>
      <div className={s.item}>
         <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
         <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to="/New" activeClassName={s.active}>New</NavLink>
          </div>
      <div className={s.item}>
      <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
      </div>
      <div className={s.item}>
         <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
      </div>
   </nav>
   )
}
export default Navbar