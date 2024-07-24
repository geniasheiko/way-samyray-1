import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field, handleChange, handleBlur } from 'formik';

const MyPosts = (props) => {

   let postsElement =
      props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

   let newPostElement = React.createRef();

   let onAddPost = () => {
      props.addPost();            //delete newPostText
   }
   let onPostChange = () => {
    let text= newPostElement.current.value;
    props.updateNewPostText(text);
   }
   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <AddNewPostForm onSubmit={onAddPost} />
         <div className={s.posts}>
            {postsElement}
         </div>
      </div >)
}

let AddNewPostForm = () => {
   return <Formik initialValues={{term:""}}
   onSubmit={{}}>
      {()=>(
      <Form>
      <div>
         <Field type={'text'} name="newPostText" 
       //onChange={handleChange}
       // onBlur={handleBlur}   
       />
      </div>
      <div>
         <button type={'submit'}>Add post</button>
      </div>
      </Form>
      )}
   </Formik>
}

export default MyPosts