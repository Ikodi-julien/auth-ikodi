<template>
  <form @submit.prevent >
    <input type="text" name="firstname" placeholder="Prénom">
    <input type="text" name="lastname" placeholder="Nom">
    <input type="email" name="email" placeholder="Email">
    <input type="password" name="password1" placeholder="Mot de passe">
    <input type="password" name="password2" placeholder="Confirmation du mot de passe">
    <Button 
      text="Valider" 
      className="--blue" 
      width="100%"
    />
  </form>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'SignupForm',
  components: {
    Button
  }
}
</script>

<style>

</style>