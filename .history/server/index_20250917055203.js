const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("holla");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running at https://localhost:${PORT}`);
});
