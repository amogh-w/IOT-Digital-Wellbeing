const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

app.listen(5000, () => {
  console.log("Running at 5000");
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema
  })
);

mongoose.connect(
  `mongodb+srv://amogh123:amogh123@amogh-first-cluster-vdru3.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("Connected to DB");
});
