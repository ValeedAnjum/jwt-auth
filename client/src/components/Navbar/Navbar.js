import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Navbar = (props) => {
  const { history, auth, Logout, profile } = props;
  const tabs = auth ? (
    <Fragment>
      <Typography
        variant="h6"
        style={{ flexGrow: "2" }}
        onClick={() => history.push("/info")}
      >
        {profile && profile.name ? profile.name : "Loading"}
      </Typography>
      <Button style={{ color: "white" }} onClick={Logout}>
        Logout
      </Button>
    </Fragment>
  ) : (
    <Fragment>
      <Typography
        variant="h6"
        style={{ flexGrow: "2" }}
        onClick={() => history.push("/info")}
      >
        User Name
      </Typography>
      <Button
        style={{ color: "white" }}
        onClick={() => history.push("/signin")}
      >
        Sign In
      </Button>
      <Button
        style={{ color: "white" }}
        onClick={() => history.push("/signup")}
      >
        Register
      </Button>
    </Fragment>
  );
  return (
    <Fragment>
      <AppBar position="relative" color="primary">
        <Toolbar>{tabs}</Toolbar>
      </AppBar>
    </Fragment>
  );
};
const mapState = (state) => {
  return {
    auth: state.auth.auth,
    profile: state.auth.profile,
  };
};
const mapDispatch = (dispatch) => {
  return {
    Logout: () => dispatch({ type: "CLEAR_PROFILE" }),
  };
};
export default connect(mapState, mapDispatch)(withRouter(Navbar));
