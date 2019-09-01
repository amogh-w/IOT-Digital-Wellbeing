import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography style={{ flex: 1 }}>Digital Wellbeing</Typography>
        <Tabs>
          {!currentUser ? (
            <React.Fragment>
              <Tab label="Login" component={Link} to="/login"></Tab>
              <Tab label="SignUp" component={Link} to="/signup"></Tab>
            </React.Fragment>
          ) : (
            <Tab label="Dashboard" component={Link} to="/"></Tab>
          )}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
