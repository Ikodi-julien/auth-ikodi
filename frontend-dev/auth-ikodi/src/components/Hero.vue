<template>
  <div class="hero">
    <img src="../assets/auth-hero.png" alt="hero img" class="hero__img" />
    <div class="hero__text">Se connecter ou créer un compte</div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped lang="scss">
.hero {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  
  & img {
    width: 100%;
    border-radius: 15px;
  }
  &__text {
    width: 90%;
    padding: 20px 0 20px 0;
    text-align: center;
    font-size: 1.5rem;
  }
  
  @media (max-width: 750px) {
  width: 80%;
  margin-right: 0;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
}
</style>