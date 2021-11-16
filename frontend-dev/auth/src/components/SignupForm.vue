<template>
  <!-- <form method="post" action="http://localhost:5050/signup" > -->
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      name="firstname"
      placeholder="Prénom"
      v-model="firstname"
    >
    <input
      type="text"
      name="lastname"
      placeholder="Nom"
      v-model="lastname"
    >
    <input
      type="email"
      name="email"
      placeholder="Email"
      v-model="email"
    >
    <input
      type="password"
      name="password1"
      placeholder="Mot de passe"
      v-model="password1"
    >
    <input
      type="password"
      name="password2"
      placeholder="Confirmation du mot de passe"
      v-model="password2"
    >
    <input
      type="text"
      name="app"
      v-show="false"
      v-model="this.app"
    >
    <Button
      text="Valider"
      className="--blue"
      width="80%"
    />
  </form>
</template>

<script>
import Button from './Button.vue';
import controllers from '@/services/controllers';
import {BASE_URL} from '@/services/settings';

export default {
  name: 'SignupForm',
  components: {
    Button
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password1: "",
      password2: "",
      app: ""
    }
  },
  mounted() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.app = urlParams.get('app');
  },
  methods: {
    onSubmit() {
      const formData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password1: this.password1,
        password2: this.password2,
        app: this.app
      }

      const isForm = controllers.verifySignupForm(formData);

      if (!isForm.valid) return alert(isForm.message);

      controllers.post(`${BASE_URL}/signup`, formData)
    }
  }
}
</script>

<style>

</style>
