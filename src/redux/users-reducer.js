const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = { 
     users: [
    // {id:1, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJt6KL2ZjHurjeQ4PvBP0-7oxvQljSesFUw&s', followed: false, fullName:'Dimych', status: 'I am a boss', location: {city: 'Mariupol', country: 'Ukraine'}},
    // {id:2, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJt6KL2ZjHurjeQ4PvBP0-7oxvQljSesFUw&s', followed: true, fullName:'Sasha', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}},
    // {id:3, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJt6KL2ZjHurjeQ4PvBP0-7oxvQljSesFUw&s', followed: false, fullName:'Andrew', status: 'I am a boss too', location: {city: 'New York', country: 'USA'}},
    
  ]
  };

 const usersReducer = (state=initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }

      case UNFOLLOW:
        return {
          ...state,
          users: state.users.map( u => {
            if (u.id === action.usersId) {
              return {...u, followed: false}
            }
            return u;
          })
        }

        case SET_USERS: {
          return { ...state, users: [...state.users, ...action.users ]}
        }
    
        default:
      return state
  }
}





export const followAC = (userId) => ({type: FOLLOW,userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default  usersReducer;