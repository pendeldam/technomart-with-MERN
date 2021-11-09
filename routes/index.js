const express = require("express");
const router = express.Router();

const indexRouter = require("./home");
const catalogRouter = require("./catalog");
const cartRouter = require("./cart");

router.use("/", indexRouter);
router.use("/catalog", catalogRouter);
router.use("/cart", cartRouter);
router.use("*", (req, res) => res.send("Sorry, page not found"));

module.exports = router;
