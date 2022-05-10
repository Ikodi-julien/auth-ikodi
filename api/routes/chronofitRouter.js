const { Router } = require("express");
const chronofitRouter = Router();
const jwtMW = require("../middlewares/jwt.mw");
const redisMW = require("../middlewares/redis.mw");
const accountIsActive = require("../middlewares/accountIsActive");
const {
  getTrainings,
  setNewTraining,
  deleteTraining,
} = require("../controllers/chronofitController");

chronofitRouter.get("/chronofit/trainings-done", jwtMW.verify, getTrainings);
chronofitRouter.post("/chronofit/new-training", jwtMW.verify, setNewTraining);
chronofitRouter.delete("/chronofit/training/:id", jwtMW.verify, deleteTraining);

module.exports = chronofitRouter;
