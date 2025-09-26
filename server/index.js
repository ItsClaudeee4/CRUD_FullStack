const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

const todoRoutes = require("./routes/todoRoutes");

app.get("/", (req, res) => {
  res.send("holla");
});

//Routes
app.use("/api/todos", todoRoutes);

//DB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
