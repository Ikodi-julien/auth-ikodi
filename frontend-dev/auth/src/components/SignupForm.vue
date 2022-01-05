<template>
  <form @submit.prevent="onSubmit">
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
      <label for="email"><span>*</span>Email :</label>
      <input type="email" name="email" placeholder="Email" v-model="email" />
    </div>

    <div class="group">
      <div class="inputrow">
        <label for="password1"><span>*</span>Mot de passe :</label>
        <input
          :type="pwdIsVisible ? 'text' : 'password'"
          name="password1"
          placeholder="Choix du mdp"
          minlength="8"
          @input="checkPwd1"
          v-model="password1"
          :class="this.isPwd1Ok ? '--valid' : ''"
        />

        <span :class="this.isPwd1Ok ? '--valid' : '--invalid pwdInfo'">
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
          placeholder="Confirmation du mdp"
          minlength="8"
          v-model="password2"
          @input="checkPwd2"
          :class="this.isPwd1Ok && this.isPwd2Ok ? '--valid' : ''"
        />
        <FontAwesomeIcon :icon="visibleIcon" class="icon" @click="toggleVisible" />
      </div>
    </div>
    <input type="text" name="app" v-show="false" v-model="this.app" />
    <Button text="Valider" className="--blue" width="80%" />
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
  name: "SignupForm",
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
      nickname: "",
      firstname: "",
      lastname: "",
      email: "",
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
        nickname: this.nickname,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password1: this.password1,
        password2: this.password2,
        app: this.app,
      };

      const isForm = controllers.verifySignupForm(formData);

      if (!isForm.valid) return isForm.messages.forEach((message) => alert(message));

      try {
        const response = await axios.post(`${BASE_URL}/signup`, formData);
        if (response.data.code) return controllers.alertCode(response.data.code);
        if (response.data.message) {
          alert(response.data.message);
          this.$emit("toggle-signup");
        }
      } catch (error) {
        error.response ? alert(error.response.data.message) : alert(error.toString());
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
    toggleVisible() {
      this.pwdIsVisible = !this.pwdIsVisible;
    },
  },
  emits: ["toggle-signup"],
};
</script>
