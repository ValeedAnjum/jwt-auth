import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submit = () => {
    console.log(name);

    console.log(email);
    console.log(password);
  };
  return (
    <div>
      <form style={{ width: "30%", margin: "auto", marginTop: "50px" }}>
        <TextField
          style={{ width: "100%", marginBottom: "10px" }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
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
          Signup
        </Button>
      </form>
    </div>
  );
};

export default Signup;
