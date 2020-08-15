/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmpSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  phoNo: {

    type: String,
    required: true,
    unique:true
  },
  cnic: {
    type: String,
    required: true,
    unique: true,
  },
});
const Admin = mongoose.model("Admin", EmpSchema);
module.exports = Admin;
