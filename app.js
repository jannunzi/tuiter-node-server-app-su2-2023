// const express = require("express");
import express from "express";
import cors from "cors";
import Examples from "./examples/routes.js";
import UserController from "./users/routes.js";
import CoursesController from "./courses/routes.js";
import SectionsController from "./sections/routes.js";
import EnrollmentsController from "./enrollments/routes.js";
import SessionController from "./session/routes.js";
import AlbumLikesRoutes from "./albumLikes/routes.js";
import session from "express-session";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
  process.env.DATA_DB || "mongodb://127.0.0.1:27017/tuiter-su2-23"
);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  })
);
const sessionOptions = {
  secret: process.env.supersecretpassword || "super secret password",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
  },
};
if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
  app.set("trust proxy", 1);
}
app.use(session(sessionOptions));
app.use(express.json());

Examples(app);
UserController(app);
CoursesController(app);
SectionsController(app);
EnrollmentsController(app);
SessionController(app);
AlbumLikesRoutes(app);

app.listen(process.env.PORT || 4000);
