module.exports = {
  beginning: `
  <style>
    * {
      
    }
    body {

    }
    .container {
      width: 80%;
      padding: 20px;
      border-radius: 5px;
      background-color: rgb(255, 248, 236);
      color: rgb(54, 54, 54);
    }
  </style>
  <div style="
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
    background-color: rgb(208, 255, 231);
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
  ">
    <div style="
      width: 80%;
      padding: 20px;
      border-radius: 5px;
      background-color: rgb(255, 248, 236);
      color: rgb(54, 54, 54);
    ">
      <h1>Confirmation de la création d'un compte Ikodi</h1>
      <p>Lien valable 10mn pour confirmer l'adresse mail</p>
      <p>
  `,
  end: `
      </p>
      <p>Merci d'avoir créé un compte et à bientôt ;-)</p>
    </div>
  </div>
  `
}