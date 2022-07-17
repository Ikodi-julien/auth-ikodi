<template>
  <form @submit.prevent="onSubmit" class="partial">
    <div class="group">
      <div class="inputrow">
        <label for="password"><span>*</span>Mot de passe :</label>
        <input
          :type="pwdIsVisible ? 'text' : 'password'"
          name="password"
          placeholder="Mot de passe actuel"
          max="250"
          @input="checkPwd"
          v-model="password"
        />
        <FontAwesomeIcon :icon="visibleIcon" class="icon" @click="toggleVisible" />
      </div>
    </div>
    <div class="group">
      <div class="inputrow">
        <label for="password1"><span>*</span>Nouveau :</label>
        <input
          :type="pwdIsVisible ? 'text' : 'password'"
          name="password1"
          placeholder="Nouveau mot de passe"
          @input="checkPwd1"
          v-model="password1"
          :class="this.isPwd1Ok ? '--valid' : ''"
        />
        <span :class="this.isPwd1Ok ? '--valid' : '--invalid'">
          {{
            this.isPwd1Ok ? "Ok !" : "Minimum 8 caractères dont au moins une majuscule et un nombre"
          }}
        </span>
        <FontAwesomeIcon :icon="visibleIcon" class="icon" @click="toggleVisible" />
      </div>
    </div>

    <div class="group">
      <div class="inputrow">
        <label for="password2"><span>*</span>Confirmation :</label>
        <input
          :type="pwdIsVisible ? 'text' : 'password'"
          name="password2"
          placeholder="Nouveau mot de passe"
          v-model="password2"
          @input="checkPwd2"
          :class="this.isPwd1Ok && this.isPwd2Ok ? '--valid' : ''"
        />
        <FontAwesomeIcon :icon="visibleIcon" class="icon" @click="toggleVisible" />
      </div>
    </div>
    <input type="text" name="app" v-show="false" v-model="this.app" />
    <Button text="Valider le mot de passe" className="--blue" width="80%" />
  </form>
</template>

<script>
import Button from "./Button.vue";
import controllers from "@/services/controllers";
import { BASE_URL } from "@/services/settings";
import axios from "axios";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "PasswordForm",
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
      password1: "",
      password2: "",
      app: "auth",
      isPwd1Ok: false,
      isPwd2Ok: false,
      pwdIsVisible: false,
    };
  },
  computed: {
    visibleIcon() {
      return this.pwdIsVisible ? faEyeSlash : faEye;
    },
  },
  mounted() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.app = urlParams.get("app");
  },
  methods: {
    async onSubmit() {
      const formData = {
        password: this.password,
        newPassword: this.password1,
        app: this.app,
      };

      if (this.isPwd1Ok && this.isPwd2Ok) {
        try {
          const response = await axios.put(`${BASE_URL}/me/password`, formData, {
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
      }
    },
    checkPwd1() {
      // console.log('checkPwd1');
      const matchRegex = controllers.testRegexPwd(this.password1);
      this.isPwd1Ok = matchRegex;
      this.checkPwd2();
    },
    checkPwd2() {
      console.log("checkPwd2");
      return (this.isPwd2Ok = this.password1 === this.password2);
    },
    toggleVisible(event) {
      this.pwdIsVisible = !this.pwdIsVisible;
    },
  },
  emits: ["toggle-profile"],
};
</script>

<style></style>
