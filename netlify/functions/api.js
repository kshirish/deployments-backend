import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();

router.get("/test", function (req, res) {
  res.send({ status: "success", message: "Welcome, this is /test" });
});

router.get("/:id", function (req, res) {
  res.send("Welcome, this is /" + req.params.id);
});

api.use("/api/", router);

export const handler = serverless(api);
