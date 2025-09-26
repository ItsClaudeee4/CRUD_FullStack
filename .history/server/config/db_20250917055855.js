const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB is connected");
  } catch (err) {
    console.log("DB is not connected", err.message);
    process.exit(1);
  }
};
