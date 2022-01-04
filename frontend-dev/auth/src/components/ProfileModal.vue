<template>
  <section :class="showProfile ? 'modal --showModal' : 'modal'">
    <div class="formcontainer">
      <i class="fas fa-times" @click="$emit('toggle-profile')"></i>
      <h1 class="modal__title">Modifier le Profil</h1>
      <Divider />
      <ProfileForm @toggle-profileform="$emit('toggle-profileform')" :user="user" />
      <h2 class="modal__title">Modifier le mot de passe</h2>
      <Divider />
      <PasswordForm @toggle-passform="$emit('toggle-passform')" :user="user" />
    </div>
  </section>
</template>

<script>
import Divider from "./Divider.vue";
import ProfileForm from "./ProfileForm.vue";
import PasswordForm from "./PasswordForm.vue";

export default {
  name: "ProfileModal",
  props: {
    showProfile: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      default: {},
    },
  },
  components: {
    Divider,
    ProfileForm,
    PasswordForm,
  },
  emits: ["toggle-profile"],
};
</script>

<style lang="scss"></style>
