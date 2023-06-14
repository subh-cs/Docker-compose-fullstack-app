const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/:name", (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hi ${name}, it's nice to meet you` });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
