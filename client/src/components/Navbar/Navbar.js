import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  return (
    <Fragment>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "2" }}>
            Valeed Anjum Siddiqui
          </Typography>
          <Button style={{ color: "white" }}>Sign In</Button>
          <Button style={{ color: "white" }}>Register</Button>
          <Button style={{ color: "white" }}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
