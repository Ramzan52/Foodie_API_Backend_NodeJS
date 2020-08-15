/** @format */

const express = require("express");
const router = express.Router();
const Order = require("../Database/OrderSchema");

router.get("/order", async function (req, res) {
  try {
    let data = await Order.find();
    res.send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.delete("/order", async function (req, res) {
  try {
    // res.send(req.body.name)
    let data = await Order.remove(req.body);
    res.send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.post("/order", async function (req, res) {
  try {
    console.log(req.body);

    let newOrder = new Order({
      CustomerID: req.body._id,
      Dishes: req.body.bucket,
    });
    await newOrder.save();

    res.send("OK");
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.patch("/order/:id", async function (req, res) {
  const update = Object.keys(req.body);

  try {
    const data = await Dish.findById(req.params.id);
    if (!data) {
      return res.status(404).send();
    }
    update.forEach((single) => {
      data[single] = req.body[single];
    });
    await data.save();
    res.send(data);
  } catch (error) {
    console.log("The error");
    res.status(400).send(error.message);
  }
});

module.exports = router;
