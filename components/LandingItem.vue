<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="item landingItem">
    <img :src="blok.image" alt />
    <nuxt-link class="landingItem-Buttons prev button" to="/careers">careers</nuxt-link>
    <nuxt-link class="landingItem-Buttons next button" to="/retail">retail</nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
