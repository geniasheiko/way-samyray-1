import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";

const Login = () => (
    <div>
        <h1>Login</h1>
        <Formik
        initialValues = {{email: "", password: "", rememberMe:false}}
        validate = {values => {
            const errors = {};
            if(!values.email) {
                errors.email = 'Required';
             } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email =  'Invalid email address';
        }
        return errors;
    }}
    onSubmit={(values) => {
        console.log(values)
    }}
    validationSchema={loginFormSchema}>
    {() => (
        <Form>
            <div>
                <Field type={'text'} name={'email'} placeholder={'e-mail'}/>
            </div>
            <ErrorMessage name="email" component="div"/>

            <div>
                <Field type={'password'} name={'password'} placeholder={'password'}/>
            </div>
            <ErrorMessage name="password" component="div"/>

            <div>
                <Field type={'checkbox'} name={'rememberMe'}/>
                <label htmlFor={'rememberMe'}> remember me </label>
            </div>

            <button type={'submit'}>Log in</button>
        </Form>
    )}
</Formik>
</div>
);









// const LoginForm = (props) => {
//     return(
    
//      <form>
//         <div>
//             <input placeholder={"Login"}/>
//         </div>
//         <div>
//         <input placeholder={"Password"}/>
//         </div>
//         <div>  
//             <input type={"checkbox"}/>
//             </div>
//         <div>
//             <button>Login</button>
//         </div>
//      </form>
//     )
// }

// const Login = (props) => {
//     return <div>
//      <h1>LOGIN</h1>
//     <LoginForm />
//          </div>
// }
export default Login;