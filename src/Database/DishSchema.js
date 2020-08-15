/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 5,
  },
 
});
const Dish = mongoose.model("Dish", DishSchema);
module.exports = Dish;
