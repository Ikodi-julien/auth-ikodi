<template>
  <form @submit.prevent="onSubmit">
    <div class="inputrow">
      <label for="email">Email :</label>
      <input type="email" name="email" placeholder="Email" max="250" v-model="this.email" />
    </div>
    <div class="icon"></div>
    <div class="group">
      <div class="inputrow">
        <label for="password">Mot de passe :</label>
        <input
          :type="pwdIsVisible ? 'text' : 'password'"
          name="password"
          placeholder="Mot de passe"
          max="250"
          @input="checkPwd"
          v-model="password"
          :class="this.isPwdOk ? '--valid' : ''"
        />
        <FontAwesomeIcon :icon="visibleIcon" class="icon" @click="toggleVisible" />
      </div>
      <span :class="this.isPwdOk ? '--valid' : '--invalid'">
        {{
          this.isPwdOk ? "Ok !" : "Minimum 5 caractères dont au moins une majuscule et un nombre"
        }}
      </span>
    </div>
    <input type="text" name="app" v-show="false" v-model="this.app" />
    <Button @click="$emit('submit')" text="Connexion" className="--blue" width="80%" />
  </form>
</template>

<script>
import { BASE_URL } from "@/services/settings";
import controllers from "@/services/controllers";
import Button from "./Button.vue";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "LoginForm",
  components: {
    Button,
    FontAwesomeIcon,
  },
  data() {
    return {
      email: "",
      password: "",
      app: "auth",
      user: {},
      isPwdOk: false,
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
    const code = urlParams.get("code");

    if (code) controllers.alertCode(code);
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
        app: this.app,
      };
      const isForm = controllers.verifyLoginForm(formData);
      if (!isForm.valid) return alert(isForm.message);

      controllers.post(`${BASE_URL}/login`, formData);
    },
    checkPwd() {
      // console.log('checkPwd1');
      const matchRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,50}$/.test(this.password);
      this.isPwdOk = matchRegex;
    },
    toggleVisible(event) {
      this.pwdIsVisible = !this.pwdIsVisible;
    },
  },
  emits: ["submit"],
};
</script>

<style></style>
