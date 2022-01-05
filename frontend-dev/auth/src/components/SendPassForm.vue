<template>
  <form @submit.prevent="onSubmit">
    <input type="email" name="email" placeholder="Email" v-model="this.email" />
    <Button text="Envoyer" className="--blue" width="100%" />
  </form>
</template>

<script>
import Button from "./Button.vue";
import axios from "axios";
import { BASE_URL } from "@/services/settings";

export default {
  name: "SendPassForm",
  components: {
    Button,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async onSubmit(evt) {
      const formData = {
        email: this.email,
      };
      if (this.email === "") return alert("Champ email vide");

      // console.log(formData);
      try {
        const response = await axios.post(`${BASE_URL}/forgot-pwd`, formData);
        alert(response.data.message);
        this.$emit("toggle-sendpass");
      } catch (error) {
        error.response ? alert(error.response.data.message) : alert(error.toString());
      }
    },
  },
  emits: ["toggle-sendpass"],
};
</script>
