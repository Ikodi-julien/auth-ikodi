<template>
  <section class="landing">
    <Hero />
    <Options @toggle-signup="$emit('toggle-signup')"/>
  </section>
</template>

<script>
import Hero from './Hero.vue';
import Options from './Options.vue';

export default {
  name: 'Landing',
  components: {
    Hero,
    Options
  },
}
</script>

<style scoped lang="scss">
@import '../styles/vars.scss';
.landing {
  height: 50%;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    flex-direction: column;
    height: 80%;
    width: 100%;
  }
}

</style>