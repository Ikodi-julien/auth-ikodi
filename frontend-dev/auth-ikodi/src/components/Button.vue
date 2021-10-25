<template>
  <button 
    :href="href" 
    :text="text"
    :style="{
      width: width,
    }"
    :class="`btn ${className}`"
  >
    {{icon}} {{text}}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href:{
      type: String,
      default: 'https://ikodi.eu',
    },
    text: {
      type: String,
      default: 'Bouton',
    },
    width: {
      type: String,
      default: 'fit-content'
    },
    className: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/vars.scss';

  .btn {
    background-color: transparent;
    border: 1px solid $dark;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  }
  .--grey {
    border: none;
    background-color: #828282;
    color: $lighter;
  }
</style>