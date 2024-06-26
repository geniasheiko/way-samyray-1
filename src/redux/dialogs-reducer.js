//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = { 
    dialogs: [
    {id:1, name:'Dimych'},
    {id:2, name:'Ahdrey'},
    {id:3, name:'Sveta'},
    {id:4, name:'Sasha'},
    {id:5, name:'Viktor'},
    {id:6, name:'Valera'}
  ],
  messages: [
    {id:1, message:'Hi'},
    {id:2, message:'How are you'},
    {id:3, message:'Yo'},
    {id:4, message:'Yo'},
    {id:5, message:'Yo'},
    {id:6, message:'Yo'}
  ],
  //newMessageBody: ""
}

 const dialogsReducer = (state=initialState, action) => {

  switch (action.type) {
    // case UPDATE_NEW_MESSAGE_BODY:
    //   return {
    //     ...state,
    //     newMessageBody: action.body
    //   }
        case SEND_MESSAGE:
          let body = action.newMessageBody;     //state.newMessageBody - заменили na action.newMessageBody
          return {
            ...state,
            //newMessageBody: '',
            messages: [...state.messages, {id: 6, message: body}]
          };
      
     default:
        return state;
}
 }

 export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody }) //newMessageBody  -убрать
// export const updateNewMessageBodyCreator = (body) => ({
//                type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default  dialogsReducer