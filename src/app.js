import express from "express";
import routes from "./router/index.js";

const app = express();

// ALL ROUTES
app.use("/api", routes);

// NOT FOUND URL
app.use("/*", (req, res, next) => {
  next("URL not found!");
});

export default app;
