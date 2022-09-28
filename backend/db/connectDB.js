const { default: mongoose } = require("mongoose");

const connectDB = (url) => {
  try {
    mongoose.connect(url);
    console.log("DB Connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
