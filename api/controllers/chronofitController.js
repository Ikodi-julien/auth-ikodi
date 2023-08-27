const chronofitQueries = require('../queries/chronofitQueries')

module.exports = {
    getTrainings: async (req, res) => {
        const { id } = req.user
        try {
            const result = await chronofitQueries.getTrainings(id)
            // console.log(result);
            // const trainingsDone = result.map((training) => {
            //   // training.created_at = training.created_at.slice(0, 9);
            //   return training;
            // });
            res.json(result)
        } catch (error) {
            console.log('getTrainings', error)
            res.status(500).json({ error })
        }
    },
    setNewTraining: async (req, res) => {
        const { id } = req.user
        try {
            // console.log(req.body);
            const newTraining = await chronofitQueries.insertTraining({
                ...req.body,
                userId: id,
            })
            // console.log(newTraining.data);
            res.json(newTraining)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    },
    deleteTraining: async (req, res) => {
        const { id } = req.params
        const userId = req.user.id

        try {
            const isDeleted = await chronofitQueries.deleteTraining({
                id,
                userId,
            })
            res.json({ data: isDeleted ? true : false })
        } catch (error) {
            console.log('delete training error : ', error)
            res.status(500).json({ error })
        }
    },
    updateTraining: async (req, res) => {
        const { id } = req.params
        const userId = req.user.id
        try {
            const isPut = await chronofitQueries.updateTraining({
                id,
                userId,
                ...req.body,
            })
            res.json({ data: isPut ? true : false })
        } catch (error) {
            console.log('update training error : ', error)
            res.status(500).json({ error })
        }
    },
}
