const db = require("../database/psqlDB");

module.exports = {
  getTrainings: async (id) => {
    const queryString = `SELECT id, user_id, name, type, duration, timecap, exos, created_at, to_char(created_at, 'DD TMmon YYYY, HH24hMI') as date FROM auth.trainings 
    WHERE user_id=$1
    ORDER BY created_at DESC`;

    const result = await db.query(queryString, [id]);
    // console.log("getTrainings", result);
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
  deleteTraining: async (data) => {
    const { id, userId } = data;
    // console.log("deleteTraining : ", id, userId);
    const queryString = "DELETE FROM auth.trainings WHERE id=$1 and user_id=$2";

    try {
      const result = await db.query(queryString, [id, userId]);
      return result.rowCount ? true : false;
    } catch (error) {
      return error;
    }
  },
  updateTraining: async (data) => {
    const { id, userId, training } = data;

    const queryString = `UPDATE auth.trainings 
    SET "name"=$1, "type"=$2, "duration"=$3, "timecap"=$4, "exos"=$5 
    WHERE auth.trainings.id = $6
    AND auth.trainings.user_id = $7
    RETURNING id`;

    const result = await db.query(queryString, [
      training.name,
      training.type,
      training.duration,
      training.timecap,
      training.exos,
      id,
      userId,
    ]);
    console.log("updateTraining", result);
    return result.rows[0];
  },
};
