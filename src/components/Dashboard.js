import React, { useState } from "react";
import fire_app from "../base";
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Card,
  CardContent
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import EmotionList from "./EmotionList";

const useStyles = makeStyles({
  buttons: {
    marginTop: "16px",
    marginBottom: "8px",
    marginRight: "8px"
  }
});

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Secret Key</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>{fire_app.auth().currentUser.uid}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
      <Card>
        <CardContent>
          <Typography>
            Welcome to your Dashboard, {fire_app.auth().currentUser.email}
          </Typography>
          <Button
            variant="contained"
            className={classes.buttons}
            onClick={handleClickOpen}
            color="secondary"
          >
            Secret Key
          </Button>
          <Button
            className={classes.buttons}
            variant="outlined"
            onClick={() => fire_app.auth().signOut()}
          >
            Sign Out
          </Button>
        </CardContent>
      </Card>
      <EmotionList></EmotionList>
    </React.Fragment>
  );
}
