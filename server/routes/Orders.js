const express = require("express");
const {
  createOrder,
  fetchOrdersByUser,
  deleteOrder,
  updateOrder,
} = require("../controller/Order");

const router = express.Router();
router
  .post("/", createOrder)
  .get("/", fetchOrdersByUser)
  .patch("/:id", updateOrder);

exports.router = router;
