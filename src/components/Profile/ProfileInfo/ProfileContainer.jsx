import React from 'react';
import Profile from '../Profile'; 
import { connect } from 'react-redux';
import {getStatus, getUserProfile, updateStatus} from '../../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from '@reduxjs/toolkit';


export function withRouter(Children) {
  return(props) =>{
    const match = {params:useParams()};
    return <Children{...props} match={match}/>
  }
}

//  refreshProfile() 
//   let userId = this.props.match.params.userId;
//   if(!userId) {
//     userId = 2;
//   }
//  this.props.getUserProfile(userId);
//  this.props.getStatus(userId); 
// };


class ProfileContainer extends React.Component {

    componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId) {
        userId = 2;
      }
     this.props.getUserProfile(userId);
     this.props.getStatus(userId); 
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.props.match.params.userId != prevProps.match.params.userId){
  //   this.refreshProfile();
  //   }
  // }

  render() {
   return ( 
    <Profile {...this.props}
    // idOwner={!this.props.match.params.userId} 
    profile={this.props.profile} 
    status={this.props.status} 
    updateStatus={this.props.updateStatus}
   // savePhoto ={this.props.savePhoto}
    />
   )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, 
    {getUserProfile, getStatus, updateStatus}),
  withRouter
)(ProfileContainer);


