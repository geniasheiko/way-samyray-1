import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field } from 'formik';

const MyPosts = (props) => {
   let postsElement = props.posts.map(p => (
      <Post key={p.id} message={p.message} likesCount={p.likesCount} />
   ));

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <AddNewPostForm addPost={props.addPost} />
         <div className={s.posts}>
            {postsElement}
         </div>
      </div>
   );
};

const AddNewPostForm = ({ addPost }) => {
   return (
      <Formik
         initialValues={{ newPostText: "" }}
         onSubmit={(values, { resetForm }) => {
            addPost(values.newPostText);  // отправляем текст нового поста в addPost
            resetForm();  // очищаем поле после отправки
         }}
      >
         {() => (
            <Form>
               <div>
                  <Field
                     as="textarea"
                     name="newPostText"
                     placeholder="Enter your post"
                  />
               </div>
               <div>
                  <button type="submit">Add post</button>
               </div>
            </Form>
         )}
      </Formik>
   );
};

export default MyPosts;





// import React from 'react';
// import s from './MyPosts.module.css';
// import Post from './Post/Post';
// import { Formik, Form, Field, handleChange, handleBlur } from 'formik';

// const MyPosts = (props) => {

//    let postsElement =
//       props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

//       let newPostElement = React.createRef();
      
//       let addPost = () => {
// let text = newPostElement.current.value;
// props.addPost(text);
//newPostElement.current.value = '';
     // }


   // let onAddPost = () => {
   //    props.addPost();            //delete newPostText
   // }
   // let onPostChange = () => {
   //  let text= newPostElement.current.value;
   //  props.updateNewPostText(text);
   // }
   // return (
   //    <div className={s.postsBlock}>
   //       <h3>My posts</h3>
   //       <div>
   //          <div>
   //             <textarea onChange={ onPostChange } ref={newPostElement}
   //             value={props.newPostText}></textarea>
   //          </div>
   //          <div>
   //             <button onClick={addPost}>Add post</button>
   //          </div>
   //       </div>
   //       <div className={s.posts}>
   //          {postsElement}
   //       </div>
         {/* <AddNewPostForm onSubmit={onAddPost} />
         <div className={s.posts}>
            {postsElement}
//          </div> */}
//       </div >)
// }

// let AddNewPostForm = () => {
//    return <Formik initialValues={{term:""}}
//    onSubmit={{}}>
//       {()=>(
//       <Form>
//       <div>
//          <Field type={'text'} name="newPostText" 
//        //onChange={handleChange}
//        // onBlur={handleBlur}   
//        />
//       </div>
//       <div>
//          <button type={'submit'}>Add post</button>
//       </div>
//       </Form>
//       )}
//    </Formik>
//}

//export default MyPosts