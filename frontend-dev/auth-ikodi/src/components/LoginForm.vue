<template>
  <form @submit.prevent >
    <input type="text" name="email" placeholder="Email">
    <input type="password" name="password" placeholder="Mot de passe">
    <Button text="Connexion" className="--blue" width="100%" />
  </form>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'LoginForm',
  components: {
    Button,
  }
}
</script>

<style lang="scss">
  @import '../styles/form.scss';
</style>