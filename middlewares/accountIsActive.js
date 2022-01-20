const queries = require("../queries/authQueries");

module.exports = async (req, res, next) => {
  // Is account active ?
  const me = await queries.getOneByEmail(req.body.email);
  if (!me.active)
    return res.json({
      message:
        "Le compte est inactif pour l'instant, confirmer l'email via le lien fourni ou récréer un compte via le formulaire",
    });

  next();
};
