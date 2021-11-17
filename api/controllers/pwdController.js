const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const {BASE_URL} = require('../services/settings');
const { getOneByEmail, getMe } = require('../queries/authQueries');

module.exports = {
  sendLink: async (req, res, next) => {
    const {email} = req.body
    // Vérifier que le user existe en DB
    const partialUser = await getOneByEmail(email);
    if (!partialUser.userId) return res.status(409).json({message: "Désolé, cet email n'est pas enregistré"});
    if (partialUser.apisignup) return res.status(409).json({message: "Ce compte a été créé à partir d'un compte Google, Github ou autre... Vous pouvez essayer de vous connecter avec ce compte"});
    // get user from id
    const user = await getMe(partialUser.userId);
    
    // Create a onetime link valid for 15min
    const secret = JWT_SECRET + user.password;
    const payload = {
      email: user.email,
      id: user.id
    }
    const token = jwt.sign(payload, secret, {expiresIn: '10m'})
    
    const resetLink = `${BASE_URL}/reset-pwd/${user.id}/${token}`;
    
    // send resetLink via email
    console.log(resetLink);
    
    //
    res.status(200).json({message: `Un lien pour réinitialiser le mot de passe a été envoyé à ${user.email}`});
  },
  getResetPwd: (req, res, next) => {
    const {id, token} = req.params;
    
    res.json({message: `${id}, ${token}`});
  },
  resetPwd: (req, res, next) => {},
}
