const bcrypt = require('bcrypt');
const pwd = process.argv[2];

(async () => {
  if (!pwd) return console.log("il manque l'arg password à crypter")
  const hash = await bcrypt.hash(pwd, 10);
  console.log(pwd);
  console.log(hash);
})()