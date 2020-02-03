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

<style lang="sass" scoped>
.landingItem
  position: relative
  width: 100%
  &-Buttons
    position: absolute
    bottom: 0
    margin: var(--spacing-one)
    &.prev
      left: 0
    &.next
      right: 0
.button
  padding: var(--spacing-one) var(--spacing-two)
  background: white
  border-radius: 100px
  border: 1px solid black
  text-decoration: none
</style>
