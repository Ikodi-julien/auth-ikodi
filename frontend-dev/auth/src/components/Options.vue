<template>
  <div class="options">
    <div class="options__socialaccounts">
      <a :href="this.GOOGLE_URL">
        <Button text='Google' color="white" icon='<img src="https://img.icons8.com/color/25/000000/google-logo.png"/>'/>
      </a>
      <a :href="this.GITHUB_URL">
        <Button text='Github' color="white" icon='<img src="https://img.icons8.com/fluency/25/000000/github.png"/>'/>
      </a>
      <Button text='Linkedin' color="white" icon='<img src="https://img.icons8.com/fluency/25/000000/linkedin.png"/>'/>
    </div>
    <Divider text="OU" />
    <div class="options__formcontainer">
      <LoginForm />
    </div>
    <p
      @click="$emit('toggle-sendpass')"
      className="options__forgotpassword"
      id="toggle-sendpass"
    >
      Mot de passe perdu ?
    </p>
    <Divider />

    <div class="options__createprofile">
      <Button
        @click="$emit('toggle-signup')"
        text='Create profile'
        width="80%"
        className="--grey"
        dataTest="toggle-signup"
      />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import Divider from './Divider.vue';
import LoginForm from './LoginForm.vue';
import {GOOGLE_URL, GITHUB_URL} from '../services/settings';

export default {
  components: {
    Button,
    Divider,
    LoginForm
  },
  data() {
    return {
      GOOGLE_URL,
      GITHUB_URL
    }
  },
  methods: {
    // googleLogin() {
    //   console.log('GOOGLE_URL', GOOGLE_URL);
    //   window.location = GOOGLE_URL;
    // }
  },
  mounted() {
    const cookies = document.cookie.split('; ');
    const appNameCookie = cookies.find(cookie => cookie.substring(0, 9) === 'app_ikodi');
    const appName = appNameCookie.split('=')[1];
    console.log(appName);
  },
  emits: ['toggle-signup', 'toggle-sendpass']
}
</script>

<style scoped lang="scss">
@import '../styles/vars.scss';

.options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 55%;
    height: 100%;
    border: 1px solid rgb(16, 92, 105);
    border-radius: 5px;

    &__socialaccounts {
      height: $h-socialheight;
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
      height: $h-formcontainer;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__forgotpassword {
      height: $h-forgotpass;
      width: 100%;
      text-align: center;
      cursor: pointer;
    }
    &__createprofile {
      display: flex;
      align-items: center;
      justify-content: center;
      height: $h-createprofile;
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
