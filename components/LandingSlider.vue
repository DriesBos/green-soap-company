<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="item landingSlider">
    <vue-carousel-item :images="blok.images" />
    <!-- <nuxt-link class="landingSlider-Buttons prev button" to="/careers">
      <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>careers
    </nuxt-link>
    <nuxt-link class="landingSlider-Buttons next button" to="/retail">
      retail
      <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
    </nuxt-link>-->
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log(this.blok)
  }
}
</script>

<style lang="sass">
.landingSlider
  position: relative
  width: 100%
  height: 100vh
  padding: var(--spacing-one)
  > div
    height: 100%
</style>
