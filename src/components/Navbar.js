import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography style={{ flex: 1}}>Digital Wellbeing</Typography>
          <Tabs>
            <Tab label="Dashboard" component={Link} to="/"></Tab>
            <Tab label="Login" component={Link} to="/login"></Tab>
            <Tab label="SignUp" component={Link} to="/signup"></Tab>
          </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
