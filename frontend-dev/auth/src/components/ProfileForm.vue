<template>
  <form @submit.prevent="onSubmit" class="partial">
    <div class="inputrow">
      <label for="nickname">Pseudo :</label>
      <input type="text" name="nickname" placeholder="Pseudo" v-model="nickname" />
    </div>
    <div class="inputrow">
      <label for="firstname">Prénom :</label>
      <input type="text" name="firstname" placeholder="Prénom" v-model="firstname" />
    </div>
    <div class="inputrow">
      <label for="lastname">Nom :</label>
      <input type="text" name="lastname" placeholder="Nom" v-model="lastname" />
    </div>
    <div class="inputrow">
      <label for="email">Email :</label>
      <input type="email" name="email" placeholder="Email" v-model="email" />
    </div>
    <div class="inputrow">
      <label for="password">Vérification mot de passe :</label>
      <input type="password" name="password" v-model="password" />
    </div>
    <input type="text" name="app" v-show="false" v-model="this.app" />
    <Button text="Valider le profil" className="--blue" width="80%" />
  </form>
</template>

<script>
import Button from "./Button.vue";
import controllers from "@/services/controllers";
import { BASE_URL } from "@/services/settings";
import axios from "axios";

export default {
  name: "ProfileForm",
  components: {
    Button,
  },
  props: {
    user: {
      type: Object,
      default: { isLoggued: false },
    },
  },
  data() {
    return {
      nickname: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      app: "auth",
    };
  },
  mounted() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.app = urlParams.get("app");
    this.nickname = this.user.nickname;
    this.firstname = this.user.firstname;
    this.lastname = this.user.lastname;
    this.email = this.user.email;
  },
  methods: {
    async onSubmit() {
      const formData = {
        nickname: this.nickname,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
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
  },
  emits: ["toggle-profile"],
};
</script>

<style lang="scss"></style>
