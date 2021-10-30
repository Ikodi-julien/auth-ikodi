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
    <Button text="Connexion" className="--blue" width="100%" />
  </form>
</template>

<script>
import Button from './Button.vue';
import axios from 'axios';

export default {
  name: 'LoginForm',
  components: {
    Button,
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async onSubmit() {
      try {
        const response = await axios.get("http://localhost:3000/me");
        console.log(response.data);
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/form.scss';
</style>