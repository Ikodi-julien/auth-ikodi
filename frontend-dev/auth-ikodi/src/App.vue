<template>
  <section>
    <Landing 
      @toggle-signup="toggleSignup" 
    />
    <SignupModal 
      :showSignup="showSignup"
      @toggle-signup="toggleSignup" 
    />
  </section>
</template>

<script>
import Landing from './components/Landing.vue';
import SignupModal from './components/SignupModal.vue';

export default {
  name: 'App',
  components: {
    Landing,
    SignupModal
  },
  data() {
    return {
      showSignup: false,
    }
  },
  methods: {
    toggleSignup() {
      this.showSignup = !this.showSignup
    }
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
#app, section {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
