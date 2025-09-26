const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("holla");
});

app.listen(PORT, () => {
  console.log(`server is running in https://localhost:${PORT}`);
});
