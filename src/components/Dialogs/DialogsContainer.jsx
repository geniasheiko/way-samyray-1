import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from '@reduxjs/toolkit';


 
    let mapStateToProps = (state) => {
  return {
dialogsPage: state.dialogsPage
}
 }

 let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {            //!!
      dispatch(sendMessageCreator(newMessageBody));   
     },
    
  }
 }

 export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
 )(Dialogs);
 

 