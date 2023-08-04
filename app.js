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
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));
app.use(express.json());

Examples(app);
UserController(app);

app.listen(process.env.PORT || 4000);
