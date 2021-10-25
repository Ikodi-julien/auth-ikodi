<template>
  <button :href="href" :text="text">
    {{text}}
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
    }
  }
}
</script>

<style>

</style>