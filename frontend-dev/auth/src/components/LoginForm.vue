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
    <Button @click="$emit('submit')" text="Connexion" className="--blue" width="100%" />
  </form>
</template>

<script>
import axios from 'axios';
import Button from './Button.vue';

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
  },
  emits: ['submit']

}
</script>

<style lang="scss">
  @import '../styles/form.scss';
</style>
