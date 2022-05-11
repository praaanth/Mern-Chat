const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true ,unique: true},
    password: { type: "String", required: true, 
    unique: true

  },
   
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);





// before saving the password to the database, we need to hash it
// userSchema.pre("save", async function (next) {
  // here pre is to tell that before saving we run this fun to hash the password
 userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

 })


const User = mongoose.model("User", userSchema);

module.exports = User;
