import React from "react";
import fire_app from "../base";
import { Typography, Button } from "@material-ui/core";

export default function Dashboard() {
  return(
      <React.Fragment>
          <Typography>Welcome to your Dashboard</Typography>
          <Button onClick={() => fire_app.auth().signOut()}>Sign Out</Button>
      </React.Fragment>
  );
}
