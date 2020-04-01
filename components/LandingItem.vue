<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="item landingItem contentContainer-Right">
    <div class="landingItem-Wrapper contentContainer-Right_Wrapper">
      <img :src="blok.image" alt />
      <div class="landingItem-Buttons_Wrapper">
      <nuxt-link v-if="this.$route.name === 'careers-slug'" class="landingItem-Buttons prev button" to="/careers">
        <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>back
      </nuxt-link>
      <nuxt-link v-if="this.$route.path === '/careers'" class="landingItem-Buttons prev button" to="/retail">
        <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>retail
      </nuxt-link>
      <nuxt-link v-if="this.$route.path === '/retail'" class="landingItem-Buttons prev button" to="/">
        <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>news
      </nuxt-link>
      <nuxt-link v-if="this.$route.path === '/'" class="landingItem-Buttons prev button" to="/careers">
        <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>careers
      </nuxt-link>
      <nuxt-link v-if="this.$route.path === '/'" class="landingItem-Buttons next button" to="/retail">retail
        <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
      </nuxt-link>
      <nuxt-link v-if="this.$route.path === '/retail'" class="landingItem-Buttons next button" to="/careers">careers
        <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
      </nuxt-link>
      <nuxt-link v-if="this.$route.path === '/careers'" class="landingItem-Buttons next button" to="/">news
        <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
      </nuxt-link>
      </div>
    </div>
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
  height: calc(100vh - 100px)
  &-Wrapper
    position: relative
  img
    width: 100%
    height: 100%
    object-fit: cover
  &-Buttons
    bottom: 0
    margin: var(--spacing-three)
    &_Wrapper
      width: 100%
      max-width: calc(#{$content-container} + #{var(--spacing-three)})
      position: absolute
      bottom: 0
      display: flex
      justify-content: space-between
    &.prev
      left: 0
      svg
        transform: rotate(180deg) translateY(-0.18em)
        margin-right: 1em
    &.next
      // right: 0
      right: calc(50vw - (#{$content-container} / 2)
      svg
        margin-left: 1em
        transform: translateY(.18em)
    svg
      width: 1em
</style>
