const controllers = {
  post: function (to, data) {
    const form = document.createElement("form");
    form.method = "post";
    form.action = to;
    for (const item in data) {
      const input = document.createElement("input");
      input.setAttribute("name", item);
      input.setAttribute("value", data[item]);
      form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  },
  verifyLoginForm: function (formData) {
    // input empty ?
    for (const item in formData) {
      if (formData[item] === "")
        return { valid: false, message: "Il manque l'email ou le mot de passe" };
    }
    // password don't pass regex
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,50}$/.test(formData.password))
      return {
        valid: false,
        message:
          "Le mot de passe doit être composé de 5 caractères au minimum dont au moins une majuscule et un nombre.",
      };

    return { valid: true };
  },
  verifySignupForm: function (formData) {
    let messages = [];

    // empty input
    // if (formData.firstname === "" && formData.lastname === "")
    //   messages.push("Renseigner au moins un du prénom ou du nom");
    if (formData.email === "" || formData.password1 === "" || formData.password2 === "")
      messages.push("Email et mots de passe obligatoires");

    // password diff
    if (formData.password1 !== formData.password2)
      messages.push("Les mots de passe sont différents");

    // password don't pass regex
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,50}$/.test(formData.password1))
      messages.push(
        "Le mot de passe doit être composé de 8 caractères au minimum dont au moins une majuscule et un nombre."
      );

    if (messages.length) return { valid: false, messages };
    return { valid: true };
  },
  verifyProfileForm: function (formData) {
    let messages = [];

    // empty input
    // if (formData.firstname === "" && formData.lastname === "" && formData.nicckname === "")
    // messages.push("Renseigner au moins un du prénom ou du nom");
    if (formData.email === "" || formData.password === "")
      messages.push("Email et mot de passe obligatoires");

    if (messages.length) return { valid: false, messages };
    return { valid: true };
  },
  alertCode: function (code) {
    const textData = {
      empty: "Au moins un des champs n'est pas rempli",
      invalidemail: "Le format de l'email est invalide",
      usernotindb: "Cet email ne correspond à aucun compte connu",
      isapisignup:
        "Compte créer à partir d'un compte Google ou Github ou autre, donc peut-être réessayer avec un de ceux là ?",
      diffpwd: "Les mots de passe ne sont pas identiques",
      minname: "Au minimun un nom ou un pseudo est nécessaire",
      exist:
        "Un compte existe déjà pour cet email, utiliser le lien pour récupérer un mot de passe perdu",
      inactive:
        "L'email pour ce compte n'a pas été confirmé. Vous pouvez soit suivre le lien reçu par mail (valable 10 minutes) ou recréer un compte puis valider le nouveau lien reçu",
      invalidpwd:
        "Le mot de passe doit contenir au minimum 8 caractères dont au moins une majuscule et un nombre",
    };
    let text = textData[code] || "Oups, ce n'est pas le message prévu...";
    alert(text);
  },
};
export default controllers;
