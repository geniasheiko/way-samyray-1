import React from 'react';

const LoginForm = (props) => {
    return(
    
     <form>
        <div>
            <input placeholder={"Login"}/>
        </div>
        <div>
        <input placeholder={"Password"}/>
        </div>
        <div>  
            <input type={"checkbox"}/>
            </div>
        <div>
            <button>Login</button>
        </div>
     </form>
    )
}

const Login = (props) => {
    return <div>
     <h1>LOGIN</h1>
    <LoginForm />
         </div>
}
export default Login;