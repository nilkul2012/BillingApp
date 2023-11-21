const express = require("express");

const router = express.Router();

router.get("/user", (req, res) => {
  res.status(200).json({ message: "Get User Deatils" });
});

router.post("/user", (req, res) => {
  console.log(req.body)
  res.status(200).json({ message: "Post User Deatils" });
});

module.exports = router;