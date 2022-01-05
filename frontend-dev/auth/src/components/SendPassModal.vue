<template>
  <section :class="showSendpass ? 'modal --showModal' : 'modal'">
    <div class="formcontainer">
      <i class="fas fa-times" @click="$emit('toggle-sendpass')"></i>
      <h1 class="modal__title">Réinitialiser le mot de passe</h1>
      <Divider />
      <SendPassForm @toggle-sendpass="$emit('toggle-sendpass')" />
    </div>
  </section>
</template>

<script>
import Divider from "./Divider.vue";
import SendPassForm from "./SendPassForm.vue";

export default {
  name: "SendPassModal",
  props: {
    showSendpass: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Divider,
    SendPassForm,
  },
};
</script>
