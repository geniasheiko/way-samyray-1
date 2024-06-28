import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    let addNewMessage = (values) => {
        props.sendMessage(values);
    }
    
    //if (!props.isAuth) return <Navigate to="/login" />;  ///для блокировки, если не залогинен
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

            </div>
           
            <AddMessageForm sendMessage={props.sendMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {

    let addNewMessage = (values) => {
        props.sendMessage(values);
    }
    return (
        <Formik initialValues={{newMessageBody:""}}
            onSubmit={(values, {resetForm}) => {
            addNewMessage( values.newMessageBody );
            resetForm( {values: ''} );
         }
         }>
        {() => (
            <Form><div>
                  <Field
                     name={'newMessageBody'}
                     as={'textarea'}
                     placeholder={'enter text'}
                  />
            </div>
            <button type={'submit'}>Send2</button>
            </Form>
    )}
       </Formik>
    )
}

// const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm );

export default Dialogs;