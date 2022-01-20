<template>
  <section :class="showSignup ? 'modal --showModal' : 'modal'">
    <div class="formcontainer">
      <i class="fas fa-times" @click="$emit('toggle-signup')"></i>
      <h1 class="modal__title">Création de compte</h1>
      <Divider />
      <SignupForm @toggle-signup="$emit('toggle-signup')" />
      <p><em>* Saisie obligatoire</em></p>
    </div>
  </section>
</template>

<script>
import Divider from "./Divider.vue";
import SignupForm from "./SignupForm.vue";

export default {
  name: "SignupModal",
  props: {
    showSignup: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Divider,
    SignupForm,
  },

  emits: ["toggle-signup"],
};
</script>
