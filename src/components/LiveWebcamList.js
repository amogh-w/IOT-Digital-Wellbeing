import React from "react";
import { List, ListItem, Typography } from "@material-ui/core";

const LiveWebcamList = ({ emotionArray }) => {
  return (
    <div>
      <Typography variant={"h6"}>Predictions</Typography>
      <List>
        {emotionArray.map(emotion => {
          return (
            <ListItem key={emotion["0"]}>
              <Typography>
                {emotion["0"]}: {emotion["1"].toFixed(2)}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default LiveWebcamList;
