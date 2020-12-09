import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const Info = (props) => {
  const { history, auth, profile } = props;
  if (!auth) {
    return <Redirect to="/signin" />;
  }
  const { name, _id, isVarified, email } = profile;
  {
    return (
      profile &&
      profile.name && (
        <div>
          Name:{name}
          <br /> Id:{_id}
          <br /> IsVarified:{`${isVarified}`}
          <br /> Email:{`${email}`}
        </div>
      )
    );
  }
};

const mapState = (state) => {
  return {
    auth: state.auth.auth,
    profile: state.auth.profile,
  };
};

export default connect(mapState)(withRouter(Info));
