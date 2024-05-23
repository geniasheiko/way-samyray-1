import React from 'react';
import styles from './users.module.css';

let Users =(props) => {
    if (props.users.length===0){
    props.setUsers( [
         {id:1, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJt6KL2ZjHurjeQ4PvBP0-7oxvQljSesFUw&s', followed: false, fullName:'Dimych', status: 'I am a boss', location: {city: 'Mariupol', country: 'Ukraine'}},
     {id:2, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJt6KL2ZjHurjeQ4PvBP0-7oxvQljSesFUw&s', followed: true, fullName:'Sasha', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}},
     {id:3, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJt6KL2ZjHurjeQ4PvBP0-7oxvQljSesFUw&s', followed: false, fullName:'Andrew', status: 'I am a boss too', location: {city: 'New York', country: 'USA'}},
    ]
    )
}
    return <div>
        {
            props.users.map( u => <div key={u.ud}>
                <span>
                     <div>
                         <img src={u.photoUrl} className={styles.usersPhoto} />
                      </div>
                     <div>
                        { u.followed 
                          ? <button onClick={() => {props.unfollow(u.id)}}>UnFollow</button>
                          : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
     
                       </div>
               </span>
               <span>
                      <span>
                          <div>{u.fullName}</div>
                          <div>{u.status}</div> 
                     </span>
                 <span>
                     <div>{u.location.country}</div>
                      <div>{u.location.city}</div> 
                 </span>
               </span>
              
                </div>)
        }
    </div>
}
       

export default Users;