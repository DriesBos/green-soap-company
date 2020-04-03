<template>
  <nav class="nav">
    <div class="menu-Wrapper">
      <div class="menu-Wrapper_Content">
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
      </div>
    </div>

    <div class="menu-overlay" :class="{ open: menuOpen }" @click="toggleMenu">
      <div class="menu-links">
        <nuxt-link class="title" to="/">Home</nuxt-link>
        <nuxt-link class="title" to="/retail">Retail</nuxt-link>
        <nuxt-link class="title" to="/brands">Brands</nuxt-link>
        <nuxt-link class="title" to="/about">About</nuxt-link>
        <nuxt-link class="title" to="/careers">Careers</nuxt-link>
        <nuxt-link class="title" to="/history">History</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
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

.nav
  position: fixed
  left: 0
  top: 0
  bottom: 0
  width: 100vw
  height: 100vh
  overflow: hidden
  pointer-events: none
  z-index: 999
  .menu
    position: relative
    height: 50px
    width: 50px
    pointer-events: auto
    flex-grow: 0
    flex-shrink: 0
    &-Wrapper
      display: flex
      justify-content: center
      position: absolute
      top: var(--spacing-four)
      width: 100%
      padding-right: var(--spacing-four)
      &_Content
        display: flex
        justify-content: flex-end
        width: 100%
        // max-width: $content-container
    &-circle
      background-color: $color-black
      color: white
      width: 100%
      height: 100%
      position: absolute
      border-radius: 50%
      transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1)
      z-index: 1000
      overflow: hidden
    &:hover .menu-circle
      @media ( hover: hover )
        transform: scale(1.3)
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
      background: $color-black
      width: 100%
      height: 100%
      position: relative
      padding: var(--spacing-five)
      opacity: 0
      visibility: hidden
      transition: opacity 0.2s ease-in-out
      z-index: 1001
      overflow-y: auto
    &-overlay
      a
        display: inline-block
        text-decoration: none
        cursor: pointer
        color: white
        font-size: 3.5556em
        pointer-events: auto
        opacity: 0
        transform: translateY(100%)
        &:hover
          @media ( hover: hover )
            text-decoration: underline
      a:nth-child(1)
        transition: opacity .35s ease-in, transform .35s ease-out
      a:nth-child(2)
        transition: opacity .35s ease-in .05s, transform .35s ease-out .05s
      a:nth-child(3)
        transition: opacity .35s ease-in .1s, transform .35s ease-out .1s
      a:nth-child(4)
        transition: opacity .35s ease-in .15s, transform .35s ease-out .15s
      a:nth-child(5)
        transition: opacity .35s ease-in .2s, transform .35s ease-out .2s
      a:nth-child(6)
        transition: opacity .35s ease-in .25s, transform .35s ease-out .25s
    &-overlay.open
      opacity: 1
      visibility: visible
      transition-delay: 0.03s
      overflow: auto
      pointer-events: auto
      a
        opacity: 1
        transform: translateY(0)
    &-links
      position: relative
      display: flex
      flex-direction: column
      align-items: flex-start
</style>
