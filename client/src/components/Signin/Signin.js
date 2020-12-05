import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submit = () => {
    console.log(email);
    console.log(password);
  };
  return (
    <div>
      <form style={{ width: "30%", margin: "auto", marginTop: "50px" }}>
        <TextField
          style={{ width: "100%", marginBottom: "10px" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <TextField
          style={{ width: "100%", marginBottom: "10px" }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <Button fullWidth onClick={submit}>
          Signin
        </Button>
      </form>
    </div>
  );
};
const mapState = (state) => {
  return {};
};
export default connect(mapState)(Signin);
