<template>
  <section :class="showSendpass ? 'modal --showModal' : 'modal'">
    <div class="formcontainer">
      <i class="fas fa-times" @click="$emit('toggle-sendpass')"></i>
      <h1 class="modal__title">Réinitialiser le mot de passe</h1>
      <Divider />
      <SendPassForm @toggle-sendpass="$emit('toggle-sendpass')"/>
    </div>
  </section>
</template>

<script>
import Divider from './Divider.vue';
import SendPassForm from './SendPassForm.vue';

export default {
  name: "SendPassModal",
  props: {
    showSendpass: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Divider,
    SendPassForm
  }
}
</script>

<style lang="scss">
@import '../styles/vars';
.fa-times {
  position: absolute;
  font-size: 2rem;;
  top: 15px;
  right: 15px;
  cursor: pointer;
}
.modal {
  position: absolute;
  top: -100vh;
  left: 0;
  background-color: rgba(0,0,0, 0.95);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__title {
    width: 80%;
    text-align: left;
    font-size: 2rem;
    margin-bottom: 8px;
  }

  & .formcontainer {
    position: relative;
    padding: 15px;
    padding-top: 40px;
    border-radius: 5px;
    background-color: $lighter;
    width: 50%;
    max-width: 600px;
    min-width: 290px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &.--showModal {
    top: 0;
  }
}
</style>
