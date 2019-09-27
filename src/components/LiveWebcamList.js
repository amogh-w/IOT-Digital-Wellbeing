import React from "react";
import { List, ListItem, Typography } from "@material-ui/core";

const LiveWebcamList = ({ emotionArray }) => {
  return (
    <div>
      <List>
        {emotionArray.map(d => {
          return (
            <ListItem key={d["0"]}>
              <Typography>
                {d["0"]}: {d["1"].toFixed(2)}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default LiveWebcamList;
