import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Navbar = (props) => {
  const { history } = props;
  return (
    <Fragment>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            style={{ flexGrow: "2" }}
            onClick={() => history.push("/info")}
          >
            Valeed Anjum Siddiqui
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
          <Button style={{ color: "white" }}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default withRouter(Navbar);
