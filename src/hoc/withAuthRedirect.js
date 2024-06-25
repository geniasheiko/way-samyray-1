import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
  });


//   export let AuthNavigate = (Component) => {
//     const checkAuth = useSelector(state => state.auth.isAuth);
//     class NavigateComponent extends React.Component {
//         render(){ 
//               return checkAuth ? <Component {...this.props}/>  :  <Navigate to={"/login"} /> 
//         }
//     }
//     return NavigateComponent
// }




export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to='/login' />
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
