import express, { Express } from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello" });
});

export {app}


