<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="item landingItem">
    <div class="landingItem-Wrapper">
      <vue-carousel-item :images="blok.images" />
      <div class="landingItem-Buttons_Wrapper">
        <nuxt-link
          v-if="this.$route.name === 'retail-slug'"
          class="landingItem-Buttons prev button"
          to="/retail"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/arrow.svg?include')"></div>back
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.name === 'news-slug'"
          class="landingItem-Buttons prev button"
          to="/"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/arrow.svg?include')"></div>back
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.name === 'careers-slug'"
          class="landingItem-Buttons prev button"
          to="/careers"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/arrow.svg?include')"></div>back
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/careers'"
          class="landingItem-Buttons prev button"
          to="/retail"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/arrow.svg?include')"></div>join the revolution
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/retail'"
          class="landingItem-Buttons prev button"
          to="/"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/arrow.svg?include')"></div>news
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="this.$route.path === '/'"
          class="landingItem-Buttons prev button"
          to="/careers"
        >
          <div class="button-Background"></div>
          <div class="button-Text">
            <div class="icon arrow" v-html="require('~/assets/images/arrow.svg?include')"></div>join the team
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
            <div class="icon arrow" v-html="require('~/assets/images/arrow.svg?include')"></div>
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
            <div class="icon arrow" v-html="require('~/assets/images/arrow.svg?include')"></div>
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
            <div class="icon arrow" v-html="require('~/assets/images/arrow.svg?include')"></div>
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
// See LandingItem
</style>
