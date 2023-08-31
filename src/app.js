import dotenv from "dotenv";
import express from "express";
import routes from "./router/index.js";
import cors from "cors";

// Environ Variable
dotenv.config();

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// ALL ROUTES
app.use("/api", routes);

// NOT FOUND URL
app.use("/*", (req, res, next) => {
  next("URL not found!");
});

export default app;
