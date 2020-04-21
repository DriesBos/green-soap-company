<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="item landingItem">
    <div class="landingItem-Wrapper vueLazy" v-lazy-container="{ selector: 'img' }">
      <!-- image -->
      <picture>
        <img
          :srcset="`${transformImage(blok.image, '2880x0')} 2880w, ${transformImage(blok.image, '2560x0')} 2560w, ${transformImage(blok.image, '1920x0')} 1920w, ${transformImage(blok.image, '1680x0')} 1680w, ${transformImage(blok.image, '1370x0')} 1370w, ${transformImage(blok.image, '900x0')} 900w`"
          sizes="(max-width: 1025px) 100vw, (min-width: 1025px) 100vw"
          :data-src="blok.image | transformImage('1440x0')"
          alt
        />
      </picture>
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
          v-if="this.$route.path === '/retail'"
          class="landingItem-Buttons prev button desktop"
          to="/"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>Home
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/'"
          class="landingItem-Buttons prev button desktop"
          to="/careers"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>join the team
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/'"
          class="landingItem-Buttons next button desktop"
          to="/retail"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            Sell our products
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/careers'"
          class="landingItem-Buttons next button desktop hide"
          to="/"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            Home
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/careers'"
          class="landingItem-Buttons next button desktop"
          to="/"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            Home
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
  },
  methods: {
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""

      let imageService = "//img2.storyblok.com/"
      let path = image.replace("//a.storyblok.com", "")
      return imageService + option + path
    }
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
    height: calc(100vh - (144px + #{var(--spacing-three)}))
    height: calc(100vh - (#{var(--spacing-three)} * 2))
    height: 100vh
  img
    width: 100%
    height: 100%
    object-fit: cover
  &-Buttons
    // top: 50%
    @media screen and ( max-width: $content-container)
      margin: var(--spacing-one)
    &.desktop
      @media screen and ( max-width: $breakpoint-mobile)
        display: none
    &.hide
      visibility: hidden
    &_Wrapper
      width: 100%
      top: 50%
      transform: translateY(-50%)
      left: 0
      position: absolute
      display: flex
      justify-content: space-between
      padding: var(--spacing-three)
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
