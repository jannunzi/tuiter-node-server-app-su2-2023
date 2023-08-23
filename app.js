// const express = require("express");
import express from "express";
import cors from "cors";
import Examples from "./examples/routes.js";
import UserController from "./users/routes.js";
import CoursesController from "./canvas/courses/routes.js";
import SectionsController from "./canvas/sections/routes.js";
import EnrollmentsController from "./canvas/enrollments/routes.js";
import SessionController from "./session/routes.js";
import AlbumLikesRoutes from "./albumLikes/routes.js";
import GnrxApi from "./generic/index.js";
import FollowsRoutes from "./follows/routes.js";
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
GnrxApi({
  app,
  collection: "movies",
  schema: {
    title: String,
  },
});
GnrxApi({
  app,
  collection: "actors",
  schema: {
    firstName: String,
    lastName: String,
  },
});
GnrxApi({ app, collection: "casting", many1: "actors", many2: "movies" });
FollowsRoutes(app);

app.listen(process.env.PORT || 4000);
