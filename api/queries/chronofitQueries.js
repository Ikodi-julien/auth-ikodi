// const db = require("../database/psqlDB");
const { myQuery, myQueryReturnInsertId } = require("../database/mysqlDB");

module.exports = {
    getTrainings: async (id) => {
        const queryString = `SELECT id, user_id, name, type, duration, timecap, exos, created_at, date_format(created_at, '%d/%M/%Y, %H:%i') as date FROM chronofit.trainings 
    WHERE user_id= ?
    ORDER BY created_at DESC`;

        const results = await myQuery(queryString, [id]);
        // console.log("getTrainings", result);
        return results;
    },
    /**
     * Insert new training in table trainings
     * @returns {Object} training_id
     */
    insertTraining: async (data) => {
        const { userId, name, type, duration, timecap, exos } = data;

        const queryString = `INSERT INTO chronofit.trainings (user_id, name, type, duration, timecap, exos) VALUES (?,?,?,?,?,?) `;

        const insertId = await myQueryReturnInsertId(queryString, [
            userId,
            name,
            type,
            duration,
            timecap,
            JSON.stringify(exos),
        ]);

        const queryString_2 = `SELECT * FROM chronofit.trainings WHERE id = ?`;
        const result = await myQuery(queryString_2, [insertId]);
        return result;
    },
    deleteTraining: async (data) => {
        const { id, userId } = data;
        // console.log("deleteTraining : ", id, userId);
        const queryString =
            "DELETE FROM chronofit.trainings WHERE id= ? and user_id= ?";

        try {
            const result = await myQuery(queryString, [id, userId]);
            return result.rowCount ? true : false;
        } catch (error) {
            return error;
        }
    },
    updateTraining: async (data) => {
        const { id, userId, training } = data;

        const queryString = `UPDATE chronofit.trainings 
    SET name=?, type=?, duration=?, timecap=?, exos=? 
    WHERE chronofit.trainings.id = ?
    AND chronofit.trainings.user_id = ?
    `;

        const resultId = await myQueryReturnInsertId(queryString, [
            training.name,
            training.type,
            training.duration,
            training.timecap,
            JSON.stringify(training.exos),
            id,
            userId,
        ]);
        console.log("updateTraining", resultId);
        return resultId;
    },
};
