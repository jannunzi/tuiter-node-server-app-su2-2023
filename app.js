// const express = require("express");
import express from "express";
import cors from "cors";
import Examples from "./examples/index.js";
import UserController from "./users/index.js";
import session from "express-session";
import mongoose from "mongoose";
// mongoose.connect("mongodb://127.0.0.1:27017/tuiter-su2-23");

mongoose.connect(
  "mongodb+srv://giuseppe:supersecretpassword@cluster0.erbnm4p.mongodb.net/tuiter-su2-23?retryWrites=true&w=majority"
);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
// app.set("trust proxy", 1);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
  },
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
