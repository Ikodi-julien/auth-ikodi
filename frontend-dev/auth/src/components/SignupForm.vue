<template>
  <form @submit.prevent="onSubmit" >
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
    <Button 
      text="Valider" 
      className="--blue" 
      width="100%"
    />
  </form>
</template>

<script>
import Button from './Button.vue';
import axios from 'axios';

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
      password2: ""
    }
  },
  methods: {
    async onSubmit() {
      
      if (this.password1 !== this.password2) {
        alert("Les mots de passe doivent être identiques");
        return;
      }
      
      const firstname = this.firstname;
      const lastname = this.lastname;
      const email = this.email;
      const password = this.password1;
      
      try {
        await axios.post("http://localhost:3000/new", {
          firstname,
          lastname,
          email,
          password
        });
        
      } catch(error) {
      console.log(error);
      }
    }
  }
}
</script>

<style>

</style>