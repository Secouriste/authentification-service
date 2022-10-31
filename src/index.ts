import express, { Express } from "express";

const app = express();
const { PORT } = require("./config");


app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello" });
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
