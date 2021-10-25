<template>
  <section class="landing">
    <div class="hero">
      <img src="../assets/auth-hero.png" alt="hero img" class="hero__img" />
      <div class="hero__text">Connect or Signup to IKODI apps</div>
    </div>
    <div class="landing__options">
      <div class="landing__options__socialaccounts">
        <Button text='Google' />
        <Button text='Github' />
        <Button text='Linkedin' />
      </div>
      <div class="divider --text"></div>
      <div class="landing__options__formcontainer">
        <form >
          <input type="text" name="email">
          <input type="password" name="password">
          <button type="submit">Connexion</button>
        </form>
      </div>
      <p class="landing__options__forgotpassword">Forgot password ?</p>
      <div class="divider"></div>
      <div class="landing__options__createprofile">
        <button>Create profile</button>
      </div>
    </div>
  </section>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Landing',
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">
@import '../styles/vars.scss';
.landing {
  height: 50%;
  width: 75%;
  display: flex;
  border: 1px dashed blue;
  
  &__options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    border: 1px solid rgb(16, 92, 105);
    border-radius: 5px;
    &__socialaccounts {
      height: 25%;
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
    }
    &__formcontainer {
      height: 40%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__forgotpassword {
      height: 10%;
      width: 100%;
      text-align: center;
    }
    &__createprofile {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 25%;
    }
  }
}
.hero {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid green;
  & img {
    width: 100%;
    border-radius: 15px;
  }
  &__text {
    padding: 20px 0 20px 0;
    text-align: center;
    font-size: 1.5rem;
  }
}
.divider {
  width: 80%;
  border-top: 1px solid $dark;
}
</style>