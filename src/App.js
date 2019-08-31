import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Paper } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./auth";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Paper style={{ padding: "20px", margin: "20px" }} square>
        <Router>
          <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
        </Router>
      </Paper>
    </AuthProvider>
  );
}
