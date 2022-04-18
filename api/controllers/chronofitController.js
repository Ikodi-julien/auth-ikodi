const chronofitQueries = require("../queries/chronofitQueries");

module.exports = {
  getTrainings: async (req, res) => {
    const data = await chronofitQueries.getTrainings();
    res.json({ data });
  },
  setNewTraining: async (req, res) => {
    try {
      const userId = 50;
      console.log(req.body);
      const newTraining = await chronofitQueries.insertTraining({
        training: req.body,
        userId,
      });

      res.json(newTraining);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};
