const bcrypt = require('bcrypt');

(async () => {
  const hash = await bcrypt.hash('bob', 10);
  console.log(hash);
})()