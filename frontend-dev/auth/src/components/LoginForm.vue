<template>
  <form @submit.prevent="onSubmit" >
  <!-- <form method="post" action="http://localhost:5050/login" > -->
    <input
      type="email"
      name="email"
      placeholder="Email"
      v-model="this.email"
    >
    <input
      type="password"
      name="password"
      placeholder="Mot de passe"
      v-model="this.password"
    >
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
import axios from 'axios';
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
      user: {}
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
    }
  },
  emits: ['submit']
}
</script>

<style lang="scss">
  @import '../styles/form.scss';
</style>
