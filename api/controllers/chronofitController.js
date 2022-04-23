const chronofitQueries = require("../queries/chronofitQueries");

module.exports = {
  getTrainings: async (req, res) => {
    const result = await chronofitQueries.getTrainings();
    // console.log(result);
    res.json(result);
  },
  setNewTraining: async (req, res) => {
    try {
      const userId = 50;
      console.log(req.body);
      const newTraining = await chronofitQueries.insertTraining({
        ...req.body,
        userId,
      });
      // console.log(newTraining.data);
      res.json(newTraining);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};
