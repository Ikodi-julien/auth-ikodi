const bcrypt = require('bcrypt');

(async () => {
  const hash = await bcrypt.hash('un super secret', 10);
  console.log(hash);
})()