const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

// static dignup method 

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("All Fields Are Required");
  }
  if (!validator.isEmail(email)) {
    throw Error("Invalid Email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Password should contain uppercase, lowercase, numbers and special character "
    );
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("user already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });

  return user;
};

// static login method

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All Fields Are Required");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Invalid Email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Invalid Password");
  }

  return user;
};

module.exports = mongoose.model("user", userSchema);
