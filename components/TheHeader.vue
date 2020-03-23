<template>
  <header class="header">
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

    <div class="menu-overlay" :class="{ open: menuOpen }" @click="toggleMenu">
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

<style lang="sass">
@import '~/assets/styles/variables.sass'

.header
  position: fixed
  left: 0
  top: 0
  width: 100vw
  height: 100vh
  overflow: hidden
  pointer-events: none
  z-index: 999
  .menu
    position: absolute
    top: var(--spacing-two)
    right: var(--spacing-two)
    height: 50px
    width: 50px
    pointer-events: auto
    &-circle
      background-color: $color-green
      color: white
      width: 100%
      height: 100%
      position: absolute
      border-radius: 50%
      transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1)
      z-index: 1000
      overflow: hidden
    &:hover .menu-circle
      transform: scale(1.5)
    &.open .menu-circle
      transform: scale(60)
    &-link
      width: 100%
      height: 100%
      position: absolute
      z-index: 1002
    &-icon
      position: absolute
      width: 20px
      height: 14px
      margin: auto
      left: 0
      top: 0
      right: 0
      bottom: 1px
    &-line
      background-color: white
      height: 2px
      width: 100%
      border-radius: 2px
      position: absolute
      left: 0
      transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    &-line-1
      top: 0
    &-line-2
      top: 0
      bottom: 0
      margin: auto
    &-line-3
      bottom: 0
    &.open .menu-line-1
      transform: translateY(7px) translateY(-50%) rotate(-135deg)
    &.open .menu-line-2
      opacity: 0
    &.open .menu-line-3
      transform: translateY(-7px) translateY(50%) rotate(135deg)
    &-overlay
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      background-color: $color-green
      height: 100%
      width: 100%
      max-width: 100vw
      max-height: 100vh
      position: fixed
      top: 0
      left: 0
      opacity: 0
      visibility: hidden
      text-align: center
      transition: opacity 0.2s ease-in-out
      z-index: 1001
      overflow: hidden
    &-overlay.open
      opacity: 1
      visibility: visible
      transition-delay: 0.03s
    &-overlay a
      display: inline-block
      text-decoration: none
      cursor: pointer
      color: white
      font-size: 1.618em
      margin-bottom: .5em
      pointer-events: auto
      &:hover
        text-decoration: underline
</style>
