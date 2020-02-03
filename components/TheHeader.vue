<template>
  <header class="header">
    <transition name="fade">
      <nav v-if="showHeader" class="header-Content" @click="toggleHeader">
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
    <div class="header-Main">
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
