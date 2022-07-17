<template>
  <div class="hero">
    <div class="links">
      <a href="https://portfolio.ikodi.eu">
        <img src="../assets/portfolio_portfolio.png" alt="Ikodi" />
        <p>Portfolio</p>
      </a>
      <a href="https://blog.ikodi.eu">
        <img src="../assets/blog_20210104.png" alt="Le Blog" />
        <p>Le Blog</p>
      </a>
      <a href="https://concord.ikodi.eu">
        <img src="../assets/concord-portefolio.png" alt="concord" />
        <p>Concord</p>
      </a>
      <a href="https://chronofit.ikodi.eu">
        <img src="../assets/chronofit-v2.png" alt="chronofit" />
        <p>Chronofit</p>
      </a>

      <a href="https://ikodi.eu/games">
        <img src="../assets/games_medley.png" alt="Les jeux" />
        <p>Les jeux</p>
      </a>
      <a href="https://ikodi.eu/games">
        <img src="../assets/multiplicorne_portfolio.png" alt="Multiplicorne" />
        <p>Multiplicorne</p>
      </a>
      <a href="https://feedback.ikodi.eu">
        <img src="../assets/feedback_portfolio.png" alt="Multiplicorne" />
        <p>Feedback</p>
      </a>
    </div>
    <h1 class="hero__text">Se connecter ou créer un compte</h1>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped lang="scss">
@import "src/styles/vars";
.hero {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 750px) {
    width: 80%;
    margin-right: 0;
  }
  @media (max-width: 500px) {
    width: 100%;
  }

  & h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  & .links {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    & a {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 5px;
      text-decoration: none;
      color: $grey;
      background-color: white;
      border-radius: 5px;
      width: 95px;
      overflow: hidden;

      & img {
        width: 100%;
      }
      & p {
        padding: 5px;
        font-size: 0.9rem;
        font-weight: bold;
      }
    }
  }

  &__text {
    width: 90%;
    padding: 20px 0 20px 0;
    text-align: center;
    font-size: 1.5rem;
  }
}
</style>
