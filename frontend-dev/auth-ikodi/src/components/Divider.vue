<template>
  <div class="divider" ><span>{{text}}</span></div>
</template>

<script>
export default {
  name: 'Divider',
  props: {
    text: {
      type: String,
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/vars.scss';

.divider {
  position: relative;
  width: 80%;
  border-top: 1px solid $dark;
  display: flex;
  justify-content: center;
  & span {
    position: absolute;
    background-color: $lighter;
    padding: 0 5px;
    top: -8px;
  }
}
</style>