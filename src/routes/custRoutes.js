const express = require('express')
const router = express.Router()
const Customer=require ("../Database/CustomerSchema");
router.get("/customer",async function (req, res) {
  try {
    let data = await Customer.find()
    res.send(data)
  } catch (error) {
   res.status(400).send(error.message);
  }
});
router.delete("/customer", async function (req, res) {
  try {
    //  res.send({name:req.body.name})
    //  console.log({name:req.body.name});
   let data = await Customer.remove({name:req.body.name})
   res.send(data)
  } catch (error) {
    res.status(400).send(error.message)
  }
});
router.post("/customer", async function (req, res) {
  try {
    const tempdata = Customer.findOne({number:req.body.number})

    if(!tempdata){
      res.send(tempdata)
      console.log(tempdata);
    }
    const newCust = new Customer(req.body);
    await newCust.save();
    res.send(newCust);
  } catch (error) {
    res.status(400).send(error.message);
    console.log("SERVER is down  " );
  }
});

module.exports = router;