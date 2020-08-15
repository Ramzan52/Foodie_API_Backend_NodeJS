/** @format */
require("dotenv").config();
require("./src/Database/DatabaseConnection");

const express = require("express");
const cors = require('cors')
const app = express();

const adminRoutes = require('./src/routes/adminRoutes')
const custRoutes = require('./src/routes/custRoutes')
const dishRoutes = require('./src/routes/dishRoutes')
const orderRoutes = require('./src/routes/orderRoutes')

app.use(express.json())
app.use(cors())
app.use(orderRoutes)
app.use(adminRoutes)
app.use(dishRoutes)
app.use(custRoutes)
app.get("/", function (req, res) {
  res.send("FOODIE");
});


const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log("SERVER is Up and Running On port " + port);
});