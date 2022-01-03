<template>
  <section>
    <Landing
      @toggle-signup="toggleSignup"
      @toggle-sendpass="toggleSendpass"
      @toggle-profile="toggleProfile"
    />
    <SignupModal :showSignup="showSignup" @toggle-signup="toggleSignup" />
    <SendPassModal :showSendpass="showSendpass" @toggle-sendpass="toggleSendpass" />
    <ProfileModal :showProfile="showProfile" @toggle-profile="toggleProfile" />
    <CookieConsent />
  </section>
</template>

<script>
import Landing from "./components/Landing.vue";
import SignupModal from "./components/SignupModal.vue";
import SendPassModal from "./components/SendPassModal.vue";
import ProfileModal from "./components/ProfileModal.vue";
import CookieConsent from "./components/CookieConsent.vue";

export default {
  name: "App",
  components: {
    Landing,
    SignupModal,
    SendPassModal,
    ProfileModal,
    CookieConsent,
  },
  data() {
    return {
      showSignup: false,
      showSendpass: false,
      showProfile: false,
    };
  },
  methods: {
    toggleSignup() {
      this.showSignup = !this.showSignup;
    },
    toggleSendpass() {
      this.showSendpass = !this.showSendpass;
    },
    toggleProfile() {
      this.showProfile = !this.showProfile;
    },
  },
};
</script>

<style lang="scss">
@import "styles/reset.css";
@import "styles/vars.scss";
@import "styles/global.scss";
@import "styles/cookie-consent";
@import "styles/cookie-consent-bottom";
@import "styles/cookie-consent-transition";
</style>
