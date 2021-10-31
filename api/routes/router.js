const {Router} = require("express");
const router = Router();
const {resolve} = require('path');

router.get('/', (req, res) => {
  console.log('GET /');
  res.status(200).json({data: 'IKODI auth server API'})
});
router.get('/doc', (req, res) => res.sendFile(resolve('doc.html')));

module.exports = router;