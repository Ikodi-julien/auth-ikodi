<template>
  <section class="landing">
    <Hero />
    <Options
      @toggle-signup="$emit('toggle-signup')"
      @toggle-sendpass="$emit('toggle-sendpass')"
      @toggle-profile="$emit('toggle-profile')"
    />
  </section>
</template>

<script>
import Hero from "./Hero.vue";
import Options from "./Options.vue";

export default {
  name: "Landing",
  components: {
    Hero,
    Options,
  },
  emits: ["toggle-signup", "toggle-sendpass", "toggle-profile"],
};
</script>

<style scoped lang="scss">
@import "../styles/vars.scss";
.landing {
  height: 50%;
  width: 80%;
  max-width: 900px;
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
