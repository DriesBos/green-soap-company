<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="item landingItem">
    <div class="landingItem-Wrapper">
      <img :src="blok.image" />
      <div class="landingItem-Buttons_Wrapper">
        <nuxt-link
          v-if="this.$route.name === 'retail-slug'"
          class="landingItem-Buttons prev button"
          to="/retail"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>back
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.name === 'news-slug'"
          class="landingItem-Buttons prev button"
          to="/"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>back
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.name === 'careers-slug'"
          class="landingItem-Buttons prev button"
          to="/careers"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>back
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/careers'"
          class="landingItem-Buttons prev button"
          to="/retail"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>join the revolution
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/retail'"
          class="landingItem-Buttons prev button"
          to="/"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>news
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/'"
          class="landingItem-Buttons prev button"
          to="/careers"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>join the team
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/'"
          class="landingItem-Buttons next button"
          to="/retail"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            join the revolution
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/retail'"
          class="landingItem-Buttons next button"
          to="/careers"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            join the team
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/careers'"
          class="landingItem-Buttons next button"
          to="/"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            news
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
          </div>
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
  padding-left: 0
  padding-right: 0
  &-Wrapper
    position: relative
    // margin-top: var(--spacing-three)
    height: calc(100vh - (144px + #{var(--spacing-three)}))
    height: calc(100vh - (#{var(--spacing-three)} * 2))
    height: 100vh
  img
    width: 100%
    height: 100%
    object-fit: cover
  &-Buttons
    // top: 50%
    margin: var(--spacing-three)
    @media screen and ( max-width: $content-container)
      margin: var(--spacing-one)
    &_Wrapper
      width: 100%
      top: 50%
      transform: translateY(-50%)
      left: 0
      position: absolute
      display: flex
      justify-content: space-between
    &.prev
      left: 0
      z-index: 999
      svg
        transform: rotate(180deg) translateY(-0.18em)
        margin-right: .5em
    &.next
      right: 0
      z-index: 999
      svg
        margin-left: .5em
        transform: translateY(.18em)
    svg
      width: 1em
</style>
