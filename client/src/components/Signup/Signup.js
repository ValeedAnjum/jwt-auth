import React from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { combineValidators, isRequired } from "revalidate";
import { reduxForm, Field } from "redux-form";
import TextInput from "../Form/TextInput";
const validate = combineValidators({
  name: isRequired({ message: "Name is required" }),
  email: isRequired({ message: "Email is required" }),
  password: isRequired({ message: "Password is also required" }),
});

const Signup = ({ handleSubmit }) => {
  const submitVal = (val) => {
    console.log(val);
  };
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
  return {};
};

export default connect(mapState)(
  reduxForm({ form: "SignupForm", validate })(Signup)
);
