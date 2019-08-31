import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Typography, TextField, Button } from "@material-ui/core";
import fire_app from "../base";

const SignUp = ({ history }) => {
  const handleSignUp = () => {
    try {
      const {email, password} = values
      fire_app.auth().createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({ email: "", password: "" });

  return (
    <React.Fragment>
      <Typography>Sign Up</Typography>
      <TextField
        name="email"
        label="Email"
        margin="normal"
        value={values.email}
        onChange={handleInputChange}
      ></TextField>
      <br></br>
      <TextField
        name="password"
        label="Password"
        type="password"
        margin="normal"
        value={values.password}
        onChange={handleInputChange}
      ></TextField>
      <br></br>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "16px", marginBottom: "8px" }}
        onClick={() => handleSignUp()}
      >
        Create an Account
      </Button>
    </React.Fragment>
  );
};

export default withRouter(SignUp);
