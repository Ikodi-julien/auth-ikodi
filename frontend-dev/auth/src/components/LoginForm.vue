<template>
  <form @submit.prevent="onSubmit" >
    <input
      type="text"
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
    <Button @click="$emit('submit')" text="Connexion" className="--blue" width="80%" />
  </form>
</template>

<script>
import axios from 'axios';
import {BASE_URL} from '@/BASE_URL.js';
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
      user: {}
    }
  },
  methods: {
    async onSubmit() {
      try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const app = urlParams.get('app');

        // // Se logguer et recevoir les jwt en httponly
        const response = await axios.post(`${BASE_URL}/login`, {
          email: this.email,
          password: this.password,
          app
        });

        console.log(response.headers);
        console.log(response.headers['set-cookie']);
        console.log(response.headers['content-type']);
        alert("Identification réussie, vous allez être redirigé.");


        // // await axios.get(`http://localhost:8001`, {
        // //   withCredentials: true
        // // })
        // location.assign(process.env.NODE_ENV = 'development' ? '/' : `https://${app}.ikodi.eu`);

      } catch(error) {
        const {message} = error.response.data;
        alert(message);
      }
    }
  },
  emits: ['submit']

}
</script>

<style lang="scss">
  @import '../styles/form.scss';
</style>
