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
    return {valid: true};
  },
  verifySignupForm: function(formData) {
    // console.log('formData', formData);
    // empty input
    if (formData.firstname === "" &&
    formData.lastname === "") return {valid: false, message: "Renseigner au moins un du prénom ou du nom"};
    if (formData.email === "" || formData.password1 === "" || formData.password2 === "") return {valid: false, message: "Email et mots de passe obligatoires"};
    // password diff
    if (formData.password1 !== formData.password2) return {valid: false, message: "Les mots de passe sont différents"};

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

      case 'invalidpwd':
        alert("Erreur de mot de passe");
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

      default:
        break;
    }
  }
}
export default controllers;
