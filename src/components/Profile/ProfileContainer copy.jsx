import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile";
import withRouter from "../../WithRouter";
import Login from "../Login/Login";
import { useParams, useNavigate } from "react-router-dom";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

function ProfileContainer(props) {
  let { userId } = useParams();
  if (!userId) {
    // userId = props.autorizedUserId;
    userId = 2;
    // if (!userId) {
    //   //  userId = props.history.push("/login");
    //   userId = props.router.navigate("/login");
    // }
  }

  useEffect(() => {
    props.getUserProfile(userId);
    props.getStatus(userId);
  }, [userId]);

  // if (!props.authorisedUserId && !props.router.params.userId) {
  //   return <Login />;
  // }
  //console.log("render PROFILE");
  return (
    <div>
      <Profile
        {...props}
        userProfile={props.userProfile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let mapStateToPropsRedirect = (state) => ({
//   isAuth: state.auth.isAuth,
// });
// AuthRedirectComponent = connect(mapStateToPropsRedirect)(AuthRedirectComponent);

let mapStateToProps = (state) => {
  // console.log("mapStateToProps PROFILE");
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

// export default connect(mapStateToProps, { getUserProfile })(
//   AuthRedirectComponent
// );

export default compose(
  withRouter,
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withAuthRedirect
)(ProfileContainer);

//export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);

// import React from "react";
// import axios from "axios";
// import Profile from "./Profile";
// import { setUserProfile } from "../../redux/profile-reducer";
// import { connect } from "react-redux";
// import { useParams, withRouter } from "react-router-dom";

// export function withRouter(Children) {
//   return (props) => {
//     const match = { params: useParams() };
//     return <Children {...props} match={match} />;
//   };
// }

// class ProfileContainer extends React.Component {
//   componentDidMount() {
//     debugger;
//     axios
//       .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//       .then((response) => {
//         this.props.setUserProfile(response.data);
//       });
//   }
//   render() {
//     return <Profile {...this.props} userProfile={this.props.userProfile} />;
//   }
// }
// let mapStateToProps = (state) => ({
//   userProfile: state.profilePage.userProfile,
// });
// let WithUrlDataContainerComponent= withRouter(ProfileContainer)
// export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);

{
  /* {props.userProfile.userId} */
}
{
  /* {props.userProfile.userId} {...props}  */
}

//
