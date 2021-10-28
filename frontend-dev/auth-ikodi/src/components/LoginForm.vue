<template>
  <form >
    <input type="text" name="email">
    <input type="password" name="password">
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

<style scoped lang="scss">
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 100%;
    
    & input {
      width: 100%;
      height: 25px;
    }
  }
</style>