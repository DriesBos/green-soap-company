<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="item landingItem">
    <div v-lazy-container="{ selector: 'img' }" class="landingItem-Wrapper vueLazy">
      <!-- image -->
      <picture>
        <img
          :srcset="`${transformImage(blok.image, '2880x0/filters:format(jpg):quality(50)')} 2880w, ${transformImage(blok.image, '2560x0/filters:format(jpg):quality(50)')} 2560w, ${transformImage(blok.image, '1920x0/filters:format(jpg):quality(50)')} 1920w, ${transformImage(blok.image, '1680x0/filters:format(jpg):quality(50)')} 1680w, ${transformImage(blok.image, '1370x0/filters:format(jpg):quality(50)')} 1370w, ${transformImage(blok.image, '900x0/filters:format(jpg):quality(50)')} 900w`"
          sizes="100vw"
          :data-src="blok.image | transformImage('1440x0/filters:format(jpg):quality(50)')"
        />
      </picture>
      <div class="landingItem-LetsScroll">
        <h4 class="title landingItem-LetsScroll_Title">SCROLL</h4>
        <div class="icon icon-ArrowLong" v-html="require('~/assets/images/arrow-long.svg?include')"></div>
      </div>
      <div class="landingItem-Buttons_Wrapper">
        <nuxt-link
          v-if="this.$route.name === 'retail-slug'"
          class="landingItem-Buttons prev button"
          to="/retail"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon icon-Arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>back
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.name === 'news-slug'"
          class="landingItem-Buttons prev button"
          to="/news"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon icon-Arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>back
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.name === 'careers-slug'"
          class="landingItem-Buttons prev button"
          to="/careers"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon icon-Arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>back
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/retail'"
          class="landingItem-Buttons prev button desktop"
          to="/"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon icon-Arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>Home
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/'"
          class="landingItem-Buttons prev button desktop"
          to="/careers"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon icon-Arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>join the team
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
            <div class="icon icon-Arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
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
            <div class="icon icon-Arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
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
            <div class="icon icon-Arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
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
  position: relative
  padding-left: 0
  padding-right: 0
  height: 56.25vw
  max-height: 90vh
  @media screen and ( max-width: $content-container)
    padding-top: 66.25vw
  @media screen and ( max-width: $breakpoint-mobile)
    padding-top: 100vw
  &-Wrapper
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
  img
    width: 100%
    height: 100%
    object-fit: cover
  &-LetsScroll
    display: none
    @media screen and ( orientation: landscape)
      position: absolute
      left: 50%
      transform: translateX(-50%)
      bottom: -39px
      display: flex
      flex-direction: column
      align-items: center
      .landingItem-LetsScroll_Line
        width: 1px
        height: 4rem
        margin-top: 1rem
        background: $color-black
      & .icon-ArrowLong
        margin-top: 1rem
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
      padding: var(--spacing-four)
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
      width: 20px
</style>
