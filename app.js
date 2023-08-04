// const express = require("express");
import express from "express";
import cors from "cors";
import Examples from "./examples/index.js";
import UserController from "./users/index.js";
import session from "express-session";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.set("trust proxy", 1);
app.use(express.json());
let sess = {
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  //   cookie: { secure: false },
};
// if (app.get("env") === "production") {
//   app.set("trust proxy", 1);
//   sess.cookie.secure = true;
// }
app.use(session(sess));

Examples(app);
UserController(app);

app.listen(4000);
