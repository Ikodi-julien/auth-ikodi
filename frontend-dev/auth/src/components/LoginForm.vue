<template>
  <form @submit.prevent="onSubmit" >
    <input
      type="email"
      name="email"
      placeholder="Email"
      v-model="this.email"
    >
    <div class="group">
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        @input="checkPwd"
        v-model="password"
        :class="this.isPwdOk ? '--valid' : ''"
      >
      <span :class="this.isPwdOk ? '--valid' : '--invalid'">
        {{this.isPwdOk ? 'Ok !' : 'Minimum 5 caractères dont au moins une majuscule et un nombre'}}
      </span>
    </div>
    <input
      type="text"
      name="app"
      v-show="false"
      v-model="this.app"
    >
    <Button @click="$emit('submit')" text="Connexion" className="--blue" width="80%" />
  </form>
</template>

<script>
import {BASE_URL} from '@/services/settings';
import controllers from '@/services/controllers';
import Button from './Button.vue';

export default {
  name: 'LoginForm',
  components: {
    Button,
  },
  data() {
    return {
      email: "",
      password: "",
      app: "auth",
      user: {},
      isPwdOk: false
    }
  },
  mounted() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.app = urlParams.get('app');
    const code = urlParams.get('code');

    if (code) controllers.alertCode(code);
  }
  ,
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
        app: this.app,
      }
      const isForm = controllers.verifyLoginForm(formData);
      if (!isForm.valid) return alert(isForm.message);

      controllers.post(`${BASE_URL}/login`, formData );
    },
    checkPwd() {
      // console.log('checkPwd1');
      const matchRegex = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,50}$/).test(this.password);
      this.isPwdOk = matchRegex;
    },
  },
  emits: ['submit']
}
</script>

<style lang="scss">
  @import '../styles/form.scss';
</style>
