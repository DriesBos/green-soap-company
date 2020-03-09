<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="item landingItem">
    <img :src="blok.image" alt />
    <nuxt-link class="landingItem-Buttons prev button" to="/careers">
      <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>careers
    </nuxt-link>
    <nuxt-link class="landingItem-Buttons next button" to="/retail">
      retail
      <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
