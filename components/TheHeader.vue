<template>
  <header class="header">
    <div class="header-Main" :class="{ show: showHeader }">
      <nuxt-link to="/">Green Soap Company</nuxt-link>
      <p @click="toggleHeader">toggle</p>
    </div>
    <transition name="fade">
      <nav v-if="openHeader" class="header-Content" @click="toggleHeader">
        <ul>
          <nuxt-link to="/" tag="li">Home</nuxt-link>
          <nuxt-link to="/retail" tag="li">Retail</nuxt-link>
          <nuxt-link to="/careers" tag="li">Careers</nuxt-link>
          <nuxt-link to="/brands" tag="li">Brands</nuxt-link>
          <nuxt-link to="/news" tag="li">News</nuxt-link>
          <nuxt-link to="/about" tag="li">About</nuxt-link>
        </ul>
      </nav>
    </transition>
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
