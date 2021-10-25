<template>
  <section class="landing">
    <Hero />
    <div class="landing__options">
      <div class="landing__options__socialaccounts">
        <Button text='Google' icon='<img src="https://img.icons8.com/color/48/000000/google-logo.png"/>'/>
        <Button text='Github' />
        <Button text='Linkedin' />
      </div>
      <Divider text="OU" />
      <div class="landing__options__formcontainer">
        <form >
          <input type="text" name="email">
          <input type="password" name="password">
          <button type="submit">Connexion</button>
        </form>
      </div>
      <p class="landing__options__forgotpassword">Forgot password ?</p>
      <Divider />

      <div class="landing__options__createprofile">
        <Button 
          text='Create profile' 
          width="80%" 
          className="--grey"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Button from './Button.vue';
import Divider from './Divider.vue';
import Hero from './Hero.vue';

export default {
  name: 'Landing',
  components: {
    Button,
    Divider,
    Hero,
  }
}
</script>

<style scoped lang="scss">
@import '../styles/vars.scss';
.landing {
  height: 50%;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px dashed blue;
  
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
      width: 100%;
    }
    @media (max-width: 750px) {
      width: 80%;
    }
  }
      
  @media (max-width: 750px) {
    flex-direction: column;
    height: 80%;
    width: 100%;
  }
}

</style>