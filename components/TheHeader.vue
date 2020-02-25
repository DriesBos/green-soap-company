<template>
  <header class="testheader">
    <div class="menu" :class="{ open: menuOpen }">
      <span class="menu-circle"></span>
      <a href="#" class="menu-link" @click="toggleMenu">
        <span class="menu-icon">
          <span class="menu-line menu-line-1"></span>
          <span class="menu-line menu-line-2"></span>
          <span class="menu-line menu-line-3"></span>
        </span>
      </a>
    </div>

    <div class="menu-overlay" :class="{ open: menuOpen }">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/retail">Retail</nuxt-link>
      <nuxt-link to="/careers">Careers</nuxt-link>
      <nuxt-link to="/brands">Brands</nuxt-link>
      <nuxt-link to="/news">News</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>
