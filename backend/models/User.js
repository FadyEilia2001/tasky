const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
    maxLength: 50,
    minLength: 3,
  },
  email: {
    type: String,
    required: [true, "please provide an email address"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    minLength: 6,
  },
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id, name: this.name }, "fadySuperSecretKey", {
    expiresIn: "30d",
  });
};

module.exports = mongoose.model("User", UserSchema);
