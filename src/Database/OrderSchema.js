/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema(
  {
    CustomerID: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    Dishes: [
      {
    
      },
    ],
    Status: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
