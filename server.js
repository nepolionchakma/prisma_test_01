require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send("Hello from server");
});
app.listen(PORT, console.log(`server running port ${PORT}`));
