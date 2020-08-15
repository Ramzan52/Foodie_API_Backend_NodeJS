const express = require('express')
const router = express.Router()
const Dish=require ("../Database/DishSchema");
router.post("/dish", async function (req, res) {
  try {
    const newDish = new Dish(req.body);
    await newDish.save();
    res.send(newDish)
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.get("/dish", async function (req, res) {
 try {
   let data = await Dish.find()
   res.send(data)
 } catch (error) {
  res.status(400).send(error.message);
 }
});

router.delete("/dish", async function (req, res) {
  try {
    //  res.send({name:req.body.name})
    //  console.log({name:req.body.name});
   let data = await Dish.remove({name:req.body.name})
   res.send(data)
  } catch (error) {
    res.status(400).send(error.message)
  }
});
router.patch("/dish/:id",async function (req, res) {
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