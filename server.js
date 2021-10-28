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

// view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// mongoDB connection
const mongoose = require("mongoose");
const MONGO_DB_URI = require("./const").MONGO_DB_URI;
const MONGO_ATLAS_URI = require("./const").MONGO_ATLAS_URI

mongoose
  .connect(MONGO_ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// routes
const indexRouter = require("./routes/index");
const catalogRouter = require("./routes/catalog");
const cartRouter = require("./routes/cart");

app.use("/", indexRouter);
app.use("/catalog", catalogRouter);
app.use("/cart", cartRouter);
app.use("*", (req, res) => res.render("error"));

app.listen(port, () => console.log(`Server started on port ${port}`));
