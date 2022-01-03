<template>
  <section :class="showProfile ? 'modal --showModal' : 'modal'">
    <div class="formcontainer">
      <i class="fas fa-times" @click="$emit('toggle-profile')"></i>
      <h1 class="modal__title">Modifier le Profil</h1>
      <Divider />
      <SignupForm @toggle-profile="$emit('toggle-profile')" />
    </div>
  </section>
</template>

<script>
import Divider from "./Divider.vue";
import SignupForm from "./SignupForm.vue";

export default {
  name: "ProfileModal",
  props: {
    showProfile: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Divider,
    SignupForm,
  },
  emits: ["toggle-profile"],
};
</script>

<style lang="scss">
@import "/src/styles/modal.scss";
</style>
