<template>
  <header class="header">
    <transition name="fade">
      <nav v-if="openHeader" class="header-Content" @click="toggleHeader">
        <ul>
          <nuxt-link to="/" tag="li">Home</nuxt-link>
          <nuxt-link to="/brands" tag="li">Brands</nuxt-link>
          <nuxt-link to="/about" tag="li">About</nuxt-link>
          <nuxt-link to="/news" tag="li">News</nuxt-link>
          <nuxt-link to="/retail" tag="li">Retail</nuxt-link>
          <nuxt-link to="/careers" tag="li">Careers</nuxt-link>
        </ul>
      </nav>
    </transition>
    <div class="header-Main" :class="{ show: showHeader }">
      <nuxt-link to="/">Green Soap Company</nuxt-link>
      <p @click="toggleHeader">toggle</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      openHeader: false,
      showHeader: true
    }
  },
  mounted() {
    window.addEventListener("scroll", this.retractHeaderOnScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    toggleHeader() {
      this.openHeader = !this.openHeader
    },
    retractHeaderOnScroll() {
      // https://medium.com/@Taha_Shashtari/hide-navbar-on-scroll-down-in-vue-fb85acbdddfe
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 50) {
        return
      }
      if (this.$route.path === "/contact" || this.$route.name === "work-slug")
        return (this.showHeader = false)
      this.showHeader = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  z-index: 999
  &-Main
    position: fixed
    top: 0
    left: 0
    width: 100%
    padding: var(--spacing-one)
    border: 1px solid purple
    background: white
    display: flex
    justify-content: space-between
    transform: translate3d(0, -101%, 0)
    transition: 0.3s transform ease
    will-change: transform
    &.show
      transform: translate3d(0, 0%, 0)
    p, a
      text-decoration: none
      cursor: pointer
      &:hover
        text-decoration: underline
  &-Content
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    display: flex
    justify-content: center
    align-items: center
    background: white
    border: 1px solid purple
    z-index: 999
    li
      padding: .5em
      cursor: pointer
      text-align: center
      &:hover, &.nuxt-link-exact-active
        text-decoration: underline
</style>
