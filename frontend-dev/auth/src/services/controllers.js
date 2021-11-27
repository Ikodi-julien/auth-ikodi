const controllers = {
  post: function(to, data) {
    const form = document.createElement("form");
    form.method="post" ;
    form.action = to ;
    for (const item in data) {
      const input = document.createElement("input") ;
      input.setAttribute("name", item) ;
      input.setAttribute("value", data[item]);
      form.appendChild(input) ;
    }
    document.body.appendChild(form) ;
    form.submit() ;
    document.body.removeChild(form) ;
  },
  verifyLoginForm: function(formData) {
    // input empty ?
    for (const item in formData) {
      if (formData[item] === "") return {valid: false, message: "Il manque l'email ou le mot de passe"};
    }
    if (formData.password.length < 5) return {valid: false, message: "Le mot de passe doit être composé de 5 caractères au minimum dont au moins une majuscule et un nombre."}

    return {valid: true};
  },
  verifySignupForm: function(formData) {
    let messages = [];

    // empty input
    if (formData.firstname === "" &&
    formData.lastname === "") messages.push("Renseigner au moins un du prénom ou du nom");
    if (
      formData.email === "" ||
      formData.password1 === "" ||
      formData.password2 === "") messages.push("Email et mots de passe obligatoires");

    // password diff
    if (formData.password1 !== formData.password2) messages.push("Les mots de passe sont différents");

    // password don't pass regex
    if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,50}$/).test(formData.password1)) messages.push("Le mot de passe doit être composé de 5 caractères au minimum dont au moins une majuscule et un nombre.");

    if (messages.length) return {valid: false, messages};
    return {valid: true};
  },
  alertCode: function(code) {
    switch (code) {
      case 'empty':
        alert("Au moins un des champs n'est pas rempli");
        break;

      case 'invalidemail':
        alert("Le format de l'email est invalide");
        break;

      case 'usernotindb':
        alert("Cet email ne correspond à aucun compte connu");
        break;

      case 'isapisignup':
        alert("Compte créer à partir d'un compte Google ou Github ou autre, donc peut-être réessayer avec un de ceux là ?");
        break;

      case 'diffpwd':
        alert("Les mots de passe ne sont pas identiques");
        break;

      case 'minname':
        alert("Au minimun un nom ou un pseudo est nécessaire");
        break;

      case 'exist':
        alert("Un compte existe déjà pour cet email, utiliser le lien pour récupérer un mot de passe perdu");
        break;

      case 'inactive':
        alert("L'email pour ce compte n'a pas été confirmé. Vous pouvez soit suivre le lien reçu par mail (valable 10 minutes) ou recréer un compte puis valider le nouveau lien reçu");
        break;

      case 'invalidpwd':
        alert("Le mot de passe doit contenir au minimum 5 caractères dont au moins une majuscule et un nombre");
        break;

      default:
        break;
    }
  }
}
export default controllers;
