const bcrypt = require('bcrypt');

(async () => {
  const hash = await bcrypt.hash('un super secret pour le deploy', 10);
  console.log(hash);
})()