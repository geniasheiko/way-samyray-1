import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let newMessage = React.createRef();
     let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
     }

    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpFvCuOK7n5YMp4QB_YloMa3r1GuSP8ZxmQ&s' />   
        <NavLink to={path}>{props.name}</NavLink>
        {/* <div>
            <textarea ref= {newMessage}></textarea>
            <button onClick={ sendMessage }>Send message</button>
            </div> */}
    </div>
    
    }

   

 
   

export default DialogItem;