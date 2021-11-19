<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      name="firstname"
      placeholder="Prénom"
      v-model="firstname"
    >
    <input
      type="text"
      name="lastname"
      placeholder="Nom"
      v-model="lastname"
    >
    <input
      type="email"
      name="email"
      placeholder="Email"
      v-model="email"
    >
    <div class="group">
      <input
        type="password"
        name="password1"
        placeholder="Mot de passe"
        @input="checkPwd1"
        v-model="password1"
        :class="this.isPwd1Ok ? '--valid' : ''"
      >
      <span :class="this.isPwd1Ok ? '--valid' : '--invalid'">
        {{this.isPwd1Ok ? 'Ok !' : 'Minimum 5 caractères dont au moins une majuscule et un nombre'}}
      </span>
    </div>

    <div class="group">
      <input
        type="password"
        name="password2"
        placeholder="Confirmation du mot de passe"
        v-model="password2"
        @input="checkPwd2"
        :class="this.isPwd1Ok && this.isPwd2Ok ? '--valid' : ''"
      >
    </div>
    <input
      type="text"
      name="app"
      v-show="false"
      v-model="this.app"
    >
    <Button
      text="Valider"
      className="--blue"
      width="80%"
    />
  </form>
</template>

<script>
import Button from './Button.vue';
import controllers from '@/services/controllers';
import {BASE_URL} from '@/services/settings';
import axios from 'axios';

export default {
  name: 'SignupForm',
  components: {
    Button
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password1: "",
      password2: "",
      app: "",
      isPwd1Ok: false,
      isPwd2Ok: false,
    }
  },
  mounted() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.app = urlParams.get('app');
  },
  methods: {
    async onSubmit() {
      const formData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password1: this.password1,
        password2: this.password2,
        app: this.app
      }

      const isForm = controllers.verifySignupForm(formData);

      if (!isForm.valid) return alert(isForm.message);

      try {
        const response = await axios.post(`${BASE_URL}/signup`, formData);
        if (response.data.code) controllers.alertCode(response.data.code);
        alert(response.data.message);
        this.$emit('toggle-signup')

      } catch(error) {
        error.response ?
          alert(error.response.data.message)
        :
          alert(error.toString());
      }
    },
    checkPwd1() {
      // console.log('checkPwd1');
      const matchRegex = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,50}$/).test(this.password1);
      this.isPwd1Ok = matchRegex;
      this.checkPwd2();
    },
    checkPwd2() {
      console.log('checkPwd2');
      return this.isPwd2Ok = (this.password1 === this.password2);
    },
  },
  emits: ['toggle-signup']
}
</script>

<style lang="scss">
@import '../styles/form.scss';

</style>
