const express = require("express");
const EXPRESS_PORT = require("./const").EXPRESS_PORT;
const app = express();
const port = process.env.PORT || EXPRESS_PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// util modules
const favicon = require("serve-favicon");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// mongoDB connection
const mongoose = require("mongoose");
const MONGO_DB_URI = require("./const").MONGO_DB_URI;
const MONGO_ATLAS_URI = require("./const").MONGO_ATLAS_URI

mongoose
  .connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// routes
const routes = require('./routes');
app.use(routes);

app.listen(port, () => console.log(`Server started on port ${port}`));
