const {Router} = require("express");
const router = Router();
const {resolve} = require('path');

const {login, signup, count, deleteMe} = require('../controllers/authController');

router.get('/', (req, res) => {
  console.log('GET /');
  res.status(200).json({data: 'IKODI auth server API'})
});
router.get('/doc', (req, res) => res.sendFile(resolve('doc.html')));
router.get('/count', count);

router.post('/login', login);
router.post('/signup', signup);
router.delete('/test/:id', deleteMe);

module.exports = router;