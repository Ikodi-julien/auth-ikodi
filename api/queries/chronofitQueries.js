const db = require("../database/psqlDB");

module.exports = {
  getTrainings: async () => {
    const queryString = `SELECT * FROM auth.trainings`;

    const result = await db.query(queryString);
    // console.log(result);
    return result.rows;
  },
  /**
   * Insert new training in table trainings
   * @returns {Object} training_id
   */
  insertTraining: async (data) => {
    const { training, userId } = data;

    const queryString = `INSERT INTO auth.trainings ("user_id", "training") VALUES ($1,$2) RETURNING id`;

    const result = await db.query(queryString, [userId, training]);
    return result.rows[0];
  },
};
