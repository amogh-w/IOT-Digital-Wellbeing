import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Paper } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import About from "./components/About";
import { AuthProvider } from "./auth";
import PrivateRoute from "./components/PrivateRoute";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:5000/graphql"
});

const client = new ApolloClient({
  cache,
  link
});

export default function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <Paper style={{ padding: "20px", margin: "20px" }} square>
            <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/about" component={About}></Route>
          </Paper>
        </Router>
      </ApolloProvider>
    </AuthProvider>
  );
}
