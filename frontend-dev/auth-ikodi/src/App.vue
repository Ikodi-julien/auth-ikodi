<template>
  <Landing />
</template>

<script>
import Landing from './components/Landing.vue';

export default {
  name: 'App',
  components: {
    Landing
  }
}
</script>

<style lang="scss">
@import 'styles/reset.css';
@import 'styles/vars.scss';

body {
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background-color: $lighter;
  color: $dark;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
