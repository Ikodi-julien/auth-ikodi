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
    const { userId, name, type, duration, timecap, exos } = data;

    const queryString = `INSERT INTO auth.trainings ("user_id", "name", "type", "duration", "timecap", "exos") VALUES ($1,$2,$3,$4,$5,$6) RETURNING id, user_id, name, type, duration, timecap, exos, created_at`;

    const result = await db.query(queryString, [
      userId,
      name,
      type,
      duration,
      timecap,
      exos,
    ]);
    return result.rows[0];
  },
};
