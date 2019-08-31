import React, { useState, useContext, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Typography, TextField, Button } from "@material-ui/core";
import fire_app from "../base";
import { AuthContext } from "../auth";

const Login = ({ history }) => {


  const handleLogin = () => {
    try {
      const { email, password } = values;
      fire_app.auth().signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({ email: "", password: "" });

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <React.Fragment>
      <Typography>Login</Typography>
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
        onClick={() => handleLogin()}
      >
        Login
      </Button>
    </React.Fragment>
  );
};

export default withRouter(Login);
