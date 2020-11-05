const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log("MongoDB connect...");
  } catch (err) {
    console.error(err.message);
    process.exit;
  }
};

module.exports = connectDB;

mongoose.Error.messages.general.required = "The '{PATH}' is required.";
mongoose.Error.messages.Number.min = "The '{VALUE}' is less than '{MIN}'.";
