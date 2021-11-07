<template>
  <section :class="showSignup ? 'modal --showModal' : 'modal'">
    <div class="formcontainer">
      <i class="fas fa-times" @click="$emit('toggle-signup')"></i>
      <h1 class="modal__title">Création de compte</h1>
      <Divider />
      <SignupForm />
    </div>
  </section>
</template>

<script>
import Divider from './Divider.vue';
import SignupForm from './SignupForm.vue';

export default {
  name: "SignupModal",
  props: {
    showSignup: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Divider,
    SignupForm
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
