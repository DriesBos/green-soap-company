<template>
  <header class="header">
    <transition name="fade">
      <nav v-if="showHeader" class="header-Content" @click="toggleHeader">
        <ul>
          <nuxt-link to="/" tag="li">Home</nuxt-link>
          <nuxt-link to="/brands" tag="li">Brands</nuxt-link>
          <nuxt-link to="/about" tag="li">About</nuxt-link>
          <nuxt-link to="/about" tag="li">News</nuxt-link>
          <nuxt-link to="/about" tag="li">Retail</nuxt-link>
          <nuxt-link to="/about" tag="li">Careers</nuxt-link>
        </ul>
      </nav>
    </transition>
    <div class="header-Toggle" @click="toggleHeader">
      <p>toggle</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      showHeader: false
    }
  },
  methods: {
    toggleHeader() {
      this.showHeader = !this.showHeader
    }
  }
}
</script>
