<template>
  <div class="options">
    <div class="options__socialaccounts">
      <Button text='Google' color="white" icon='<img src="https://img.icons8.com/color/25/000000/google-logo.png"/>'/>
      <Button text='Github' color="white" icon='<img src="https://img.icons8.com/fluency/25/000000/github.png"/>'/>
      <Button text='Linkedin' color="white" icon='<img src="https://img.icons8.com/fluency/25/000000/linkedin.png"/>'/>
    </div>
    <Divider text="OU" />
    <div class="options__formcontainer">
      <LoginForm />
    </div>
    <p class="options__forgotpassword">Forgot password ?</p>
    <Divider />

    <div class="options__createprofile">
      <Button 
        @click="$emit('toggle-signup')"
        text='Create profile' 
        width="80%" 
        className="--grey"
      />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import Divider from './Divider.vue';
import LoginForm from './LoginForm.vue';

export default {
  components: {
    Button,
    Divider,
    LoginForm
  },
}
</script>

<style scoped lang="scss">
.options {
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
      flex-wrap: wrap;
      width: 80%;
      justify-content: space-between;
      align-items: center;
      
      @media (max-width: 500px) {
        width: 95%;
      }
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
    @media (max-width: 500px) {
      width: 100%;
      border: none;
    }
  }
</style>