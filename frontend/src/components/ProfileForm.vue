<template>
  <form @submit.prevent="onSubmit" class="partial">
    <div class="inputrow">
      <label for="nickname">Pseudo :</label>
      <input type="text" name="nickname" v-model="user.nickname" />
    </div>
    <div class="inputrow">
      <label for="firstname">Prénom :</label>
      <input type="text" name="firstname" placeholder="Prénom" v-model="user.firstname" />
    </div>
    <div class="inputrow">
      <label for="lastname">Nom :</label>
      <input type="text" name="lastname" placeholder="Nom" v-model="user.lastname" />
    </div>
    <div class="inputrow">
      <label for="email"><span>*</span>Email :</label>
      <input type="email" name="email" v-model="user.email" :disabled="user.apisignup" />
    </div>
    <div class="inputrow" v-show="!user.apisignup">
      <label for="password"><span>*</span>Mot de passe :</label>
      <input :type="pwdIsVisible ? 'text' : 'password'" name="password" v-model="password" />
      <FontAwesomeIcon :icon="visibleIcon" class="icon" @click="toggleVisible" />
    </div>
    <input type="text" name="app" v-show="false" v-model="this.app" />
    <Button text="Valider le profil" className="--blue" width="80%" />
  </form>
</template>

<script>
import Button from "./Button.vue";
import controllers from "@/services/controllers";
import { BASE_URL } from "@/services/settings";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";

export default {
  name: "ProfileForm",
  components: {
    Button,
    FontAwesomeIcon,
  },
  props: {
    user: {
      type: Object,
      default: { isLoggued: false },
    },
  },
  data() {
    return {
      password: "",
      app: null,
      pwdIsVisible: false,
    };
  },
  computed: {
    visibleIcon() {
      return this.pwdIsVisible ? faEyeSlash : faEye;
    },
  },
  created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.app = urlParams.get("app");
  },
  methods: {
    async onSubmit() {
      const formData = {
        nickname: this.user.nickname,
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
        apisignup: this.user.apisignup,
        password: this.user.apisignup ? "apisignup" : this.password,
        app: this.app,
      };

      const isForm = controllers.verifyProfileForm(formData);

      if (!isForm.valid) return isForm.messages.forEach((message) => alert(message));

      try {
        const response = await axios.put(`${BASE_URL}/me/credentials`, formData, {
          withCredentials: true,
        });
        if (response.data.code) return controllers.alertCode(response.data.code);
        if (response.data.message) {
          alert(response.data.message);
          this.$emit("toggle-profile");
        }
      } catch (error) {
        error.response ? alert(error.response.data.message) : alert(error.toString());
      }
    },
    toggleVisible() {
      this.pwdIsVisible = !this.pwdIsVisible;
    },
  },
  emits: ["toggle-profile"],
};
</script>
