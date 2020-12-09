import React from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { combineValidators, isRequired } from "revalidate";
import { reduxForm, Field } from "redux-form";
import TextInput from "../Form/TextInput";
import { register } from "../../store/actions/authActions";
const validate = combineValidators({
  name: isRequired({ message: "Name is required" }),
  email: isRequired({ message: "Email is required" }),
  password: isRequired({ message: "Password is also required" }),
});

const Signup = ({ handleSubmit, Register, auth, history }) => {
  const submitVal = (val) => {
    const { name, email, password } = val;
    Register({ name, email, password });
  };
  if (auth) {
    return <Redirect to="/info" />;
  }
  return (
    <div>
      <form
        style={{ width: "30%", margin: "auto", marginTop: "50px" }}
        onSubmit={handleSubmit(submitVal)}
      >
        <Field
          name="name"
          component={TextInput}
          type="name"
          placeholder="Name"
        />
        <Field
          name="email"
          component={TextInput}
          type="email"
          placeholder="Email"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="Password"
        />
        <Button fullWidth type="submit">
          Signup
        </Button>
      </form>
    </div>
  );
};
const mapState = (state) => {
  return {
    auth: state.auth.auth,
  };
};
const mapDispatch = (dispatch) => {
  return {
    Register: (cred) => dispatch(register(cred)),
  };
};
export default connect(
  mapState,
  mapDispatch
)(reduxForm({ form: "SignupForm", validate })(withRouter(Signup)));
