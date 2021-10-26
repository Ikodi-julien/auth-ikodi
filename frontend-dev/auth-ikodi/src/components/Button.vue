<template>
  <button 
    :style="{
      width: width,
    }"
    :class="`btn ${className}`"
  >
    <span v-show="isIcon" v-html="icon"></span> {{text}}
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
  },
  computed: {
    isIcon() {
      if (typeof this.icon === 'undefined') return false;
      return true;
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/vars.scss';
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid $dark;
    padding: 5px 15px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
    
    & span {
      display: inline-block;
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
  }
  .--grey {
    border: none;
    background-color: #828282;
    color: $lighter;
  }
</style>