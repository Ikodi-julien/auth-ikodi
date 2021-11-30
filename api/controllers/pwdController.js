const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET;
const mailer = require('../services/mailer');
const resetPwdHtml = require('../assets/reset-pwd-html');
const {BASE_URL} = require('../services/settings');
const { getOneByEmail, getMe, updateMePassword } = require('../queries/authQueries');

module.exports = {
  sendLink: async (req, res, next) => {
    console.log('send link reset pwd');
    const {email} = req.body
    
    try {
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
      await mailer.sendMail(user.email, "Réinitialisation du mot de passe Ikodi", `${resetPwdHtml.beginning}${resetLink}${resetPwdHtml.end}`)
      
      res.status(200).json({message: `Un lien pour réinitialiser le mot de passe a été envoyé à ${user.email}, vérifiez votre boite mail ;-)`});
      
    } catch(error) {
      console.log(error.message);
      res.send(error.message);
    }
  },
  getResetPwd: async (req, res, next) => {
    console.log('get reset pwd');
    const {id, token} = req.params;
    
    // Check id in DB
    const user = await getMe(id)
    if (!user) return res.status(409).json({message: "Désolé, ça n'a pas fonctionné. Contacter le sav."});
    
    const secret = JWT_SECRET + user.password;
    try {
      const payload = jwt.verify(token, secret);
      res.render('reset-pwd', {email: user.email});
      
    } catch(error) {
      console.log(error.message);
      res.send(error.message);
    }
  },
  resetPwd: async (req, res, next) => {
    console.log('post reset pwd');
    const {id, token} = req.params;
    const {password1, password2} = req.body;
    // Check passwords
    if(password1 !== password2) return res.status(409).json({message: "Les mots de passe sont différents"});
    
    if (password1 === "" || password2 === "") return res.status(409).json({message: "Au moins un champ est vide"});
    
    if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,50}$/).test(password1)) return res.status(409).json({message: "Le mot de passe doit contenir au minimum 5 caractères dont au moins une majuscule et un nombre"});

    // Check id in DB
    const user = await getMe(id)
    if (!user) return res.status(409).json({message: "Désolé, ça n'a pas fonctionné. Contacter le sav."});
    
    const secret = JWT_SECRET + user.password;
    try {
      const payload = jwt.verify(token, secret);
      
      // hash password
      const hash = await bcrypt.hash(password1, 10);
      // Update the user
      user.password = hash;
      const newUser = await updateMePassword({id: user.id, newPassword: hash});
      console.log('newUser id', id)
      // Render page with update success and links ikodi.
      res.render('reset-pwd-success', {email: user.email});
      
    } catch(error) {
      console.log(error.message);
      res.send(error.message);
    }
  },
}
