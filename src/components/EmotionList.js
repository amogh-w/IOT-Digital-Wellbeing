import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useQuery } from "@apollo/react-hooks";
import { GET_EMOTIONS_ALL } from "../queries/queries";
import * as dayjs from "dayjs";

const useStyles = makeStyles({
  table: {
    margin: "16px 8px"
  }
});

export default function EmotionList() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_EMOTIONS_ALL);
  
  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error...</Typography>;

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>User</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Emotion</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.emotions.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.user.name}</TableCell>
            <TableCell>{dayjs(row.date).format("YYYY-MM-DD")}</TableCell>
            <TableCell>{row.detectedEmotion}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
