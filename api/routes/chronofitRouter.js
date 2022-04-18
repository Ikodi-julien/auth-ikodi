const { Router } = require("express");
const chronofitRouter = Router();
const jwtMW = require("../middlewares/jwt.mw");
const redisMW = require("../middlewares/redis.mw");
const accountIsActive = require("../middlewares/accountIsActive");
const {
  getTrainings,
  setNewTraining,
} = require("../controllers/chronofitController");

chronofitRouter.get("/chronofit/trainings", getTrainings);
chronofitRouter.post("/chronofit/new-training", setNewTraining);

module.exports = chronofitRouter;
