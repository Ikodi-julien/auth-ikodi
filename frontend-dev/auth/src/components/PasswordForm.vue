<template>
  <form @submit.prevent="onSubmit" class="partial">
    <div class="group">
      <div class="inputrow">
        <label for="password">Mot de passe actuel :</label>
        <input
          type="password"
          name="password"
          placeholder=""
          @input="checkPwd"
          v-model="password"
        />
      </div>
    </div>
    <div class="group">
      <div class="inputrow">
        <label for="password1">Nouveau :</label>
        <input
          type="password"
          name="password1"
          placeholder="Nouveau mot de passe"
          @input="checkPwd1"
          v-model="password1"
          :class="this.isPwd1Ok ? '--valid' : ''"
        />
      </div>
      <span :class="this.isPwd1Ok ? '--valid' : '--invalid'">
        {{
          this.isPwd1Ok ? "Ok !" : "Minimum 5 caractères dont au moins une majuscule et un nombre"
        }}
      </span>
    </div>

    <div class="group">
      <div class="inputrow">
        <label for="password2">Confirmation :</label>
        <input
          type="password"
          name="password2"
          placeholder="Confirmation"
          v-model="password2"
          @input="checkPwd2"
          :class="this.isPwd1Ok && this.isPwd2Ok ? '--valid' : ''"
        />
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

export default {
  name: "PasswordForm",
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
      password: "",
      password1: "",
      password2: "",
      app: "auth",
      isPwd1Ok: false,
      isPwd2Ok: false,
    };
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
      const matchRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,50}$/.test(this.password1);
      this.isPwd1Ok = matchRegex;
      this.checkPwd2();
    },
    checkPwd2() {
      console.log("checkPwd2");
      return (this.isPwd2Ok = this.password1 === this.password2);
    },
  },
  emits: ["toggle-profile"],
};
</script>

<style lang="scss"></style>
