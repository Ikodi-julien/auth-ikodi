<template>
  <form @submit.prevent>
    <input type="email" name="email" placeholder="Email">
    <Button 
      text="Envoyer" 
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