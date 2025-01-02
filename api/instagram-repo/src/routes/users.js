const express = require("express");
const UserRepo = require("../repos/userRepo.js");

const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await UserRepo.find();
  res.send(users);
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await UserRepo.findById(id);

  !!user ? res.send(user) : res.sendStatus(404);
});

router.post("/users", async (req, res) => {});

router.put("/users/:id", async (req, res) => {});

router.delete("/users/:id", async (req, res) => {});

module.exports = router;
