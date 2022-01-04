<template>
  <section>
    <Landing
      @toggle-signup="toggleSignup"
      @toggle-sendpass="toggleSendpass"
      @toggle-profile="toggleProfile"
      :user="user"
    />
    <SignupModal :showSignup="showSignup" @toggle-signup="toggleSignup" />
    <SendPassModal :showSendpass="showSendpass" @toggle-sendpass="toggleSendpass" />
    <ProfileModal :showProfile="showProfile" @toggle-profile="toggleProfile" :user="user" />
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
      user: {
        isLoggued: false,
        id: "-1",
        nickname: "",
        firstname: "",
        lastname: "",
        email: "",
        apisignup: false,
      },
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:5050/me", { withCredentials: true });

      console.log(response.data);
      // set user state
      this.user.id = response.data.id;
      this.user.nickname = response.data.nickname;
      this.user.firstname = response.data.firstname;
      this.user.lastname = response.data.lastname;
      this.user.email = response.data.email;
      this.user.apisignup = response.data.apisignup;
      this.user.isLoggued = true;
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
@import "styles/modal.scss";
@import "styles/form.scss";
</style>
