<template>
  <section>
    <Landing 
      @toggle-signup="toggleSignup" 
      @toggle-sendpass="toggleSendpass" 
    />
    <SignupModal 
      :showSignup="showSignup"
      @toggle-signup="toggleSignup" 
    />
    <SendPassModal 
      :showSendpass="showSendpass"
      @toggle-sendpass="toggleSendpass" 
    />
  </section>
</template>

<script>
import Landing from './components/Landing.vue';
import SignupModal from './components/SignupModal.vue';
import SendPassModal from './components/SendPassModal.vue';

export default {
  name: 'App',
  components: {
    Landing,
    SignupModal,
    SendPassModal
  },
  data() {
    return {
      showSignup: false,
      showSendpass: false
    }
  },
  methods: {
    toggleSignup() {
      this.showSignup = !this.showSignup
    },
    toggleSendpass() {
      this.showSendpass = !this.showSendpass
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
  
  @media (max-width: 500px) {
    align-items: flex-start;
  }
}
</style>
