<template>
  <section :class="showSignup ? 'modal --showModal' : 'modal'">
    <div class="formcontainer">
      <i class="fas fa-times" @click="$emit('toggleSignup')"></i>
      <h1>Sign Up</h1>
      <Divider />
      <form >
        <div class="inputrow">
          <input type="text" name="firstname" >
          <input type="text" name="lastname" >
        </div>
        <input type="email" name="email" >
        <input type="password" name="password1" >
        <input type="password" name="password2" >
        <Button 
          text="Create profile" 
          className="--blue" 
        />
      </form>
    </div>
  </section>
</template>

<script>
import Button from './Button.vue';
import Divider from './Divider.vue';

export default {
  name: "SignupModal",
  props: {
    showSignup: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Button,
    Divider
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
  
  & .formcontainer {
    position: relative;
    padding: 15px;
    padding-top: 40px;
    border-radius: 5px;
    background-color: $lighter;
    width: 50%;
    max-width: 600px;
    min-width: 290px;
    
    & form {
      display: flex;
      flex-direction: column;
      
      & input {
        height: 25px;
        margin: 5px;
        margin-bottom: 10px;
      }
      
    }
  }
  
  &.--showModal {
    top: 0;
  }
}
</style>