<template>
  <section>
    <Landing
      @toggle-signup="toggleSignup"
      @toggle-sendpass="toggleSendpass"
      @toggle-profile="toggleProfile"
      :isLoggued="isLoggued"
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
import axios from "axios";

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
      // user state
      isLoggued: false,
      userId: "-1",
      nickname: "",
      firstname: "",
      lastname: "",
      email: "",
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:5050/me", { withCredentials: true });

      console.log(response.data);
      // set user state
      this.userId = response.data.id;
      this.nickname = response.data.nickname;
      this.firstname = response.data.firstname;
      this.lastname = response.data.lastname;
      this.email = response.data.email;
      this.isLoggued = true;
    } catch (error) {
      console.log(error.message);
    }
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
