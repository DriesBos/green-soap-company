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

<style lang="sass">
@import '~/assets/styles/variables.sass'

.landingItem
  position: relative
  width: 100%
  height: 100vh
  padding: var(--spacing-one)
  a
    color: white !important
  img
    width: 100%
    height: 100%
    object-fit: cover
  &-Buttons
    position: absolute
    display: inline-flex
    align-items: center
    bottom: 0
    color: white
    margin-left: var(--spacing-two)
    margin-right: var(--spacing-two)
    border-radius: 1000px !important
    margin-bottom: var(--spacing-two)
    &.prev
      left: 0
      svg
        transform: rotate(180deg) translateY(-0.18em)
        margin-right: 1em
    &.next
      right: 0
      svg
        margin-left: 1em
        transform: translateY(.18em)
    svg
      width: 1em
.button
  padding: .5em 1em
  background-color: $color-green
  border-radius: $border-radius
  text-decoration: none
</style>
