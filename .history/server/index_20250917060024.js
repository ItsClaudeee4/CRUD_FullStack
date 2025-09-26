const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("holla");
});

//DB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running at https://localhost:${PORT}`);
});
