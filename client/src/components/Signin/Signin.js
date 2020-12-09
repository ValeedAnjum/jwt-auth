import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { combineValidators, isRequired } from "revalidate";
import { reduxForm, Field } from "redux-form";
import TextInput from "../Form/TextInput";
import { signIn } from "../../store/actions/authActions";
const validate = combineValidators({
  email: isRequired({ message: "Email is required" }),
  password: isRequired({ message: "Password is also required" }),
});

const Signin = (props) => {
  const { signIn, handleSubmit, auth } = props;
  console.log(auth);
  if (auth) {
    return <Redirect to="/info" />;
  }
  const submitVal = (val) => {
    const { email, password } = val;
    console.log(email, password);
    signIn({ email, password });
  };

  return (
    <div>
      <form
        style={{ width: "30%", margin: "auto", marginTop: "50px" }}
        onSubmit={handleSubmit(submitVal)}
      >
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
          Signin
        </Button>
      </form>
    </div>
  );
};
const mapState = (state) => {
  return { auth: state.auth.auth };
};
const mapDispatch = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password)),
  };
};

export default connect(
  mapState,
  mapDispatch
)(reduxForm({ form: "LoginForm", validate })(Signin));
