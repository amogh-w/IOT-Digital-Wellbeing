import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Paper } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Paper style={{ padding: "20px", margin: "20px" }} square>
        <Router>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
        </Router>
      </Paper>
    </React.Fragment>
  );
}
