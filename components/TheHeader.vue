<template>
  <!-- prettier-ignore -->
  <header class="header">
    <div class="headerFolded">
      <nuxt-link to="/" tag="div" class="headerFolded-Logo">
        <div v-html="require('~/assets/images/green-soap-company.svg?include')" />
      </nuxt-link>
    </div>
    <div class="headerToggle" @click="toggleHeader">
      <div
        v-if="headerActive"
        class="icon icon-Close"
        v-html="require('~/assets/images/close.svg?include')"
      />
      <div
        v-else
        class="icon icon-Hamburger"
        v-html="require('~/assets/images/hamburger.svg?include')"
      />
    </div>
    <div class="ends headerUnfolded contentContainer-Center" :class="{ active: headerActive}">
      <div class="headerUnfolded-Container ends-Container contentContainer-Center_Wrapper">
        <nuxt-link to="/" tag="div" class="headerUnfolded-Logo">
          <div v-html="require('~/assets/images/green-soap-company.svg?include')" />
        </nuxt-link>
        <ul>
          <li class="title">Pages</li>
          <nuxt-link to="/" class="link" tag="li">Home & News</nuxt-link>
          <nuxt-link to="/retail" class="link" tag="li">Retail</nuxt-link>
          <nuxt-link to="/brands" class="link" tag="li">All Brands</nuxt-link>
          <nuxt-link to="/career" class="link" tag="li">Careers</nuxt-link>
          <nuxt-link to="/about" class="link" tag="li">Our Team</nuxt-link>
          <nuxt-link to="/history" class="link" tag="li">Our History</nuxt-link>
          <br />
          <nuxt-link to="/press" class="link conditions" tag="li">Press</nuxt-link>
          <nuxt-link to="/terms-conditions" class="link conditions" tag="li">Terms & Conditions</nuxt-link>
          <nuxt-link to="/privacy-policy" class="link conditions" tag="li">Privacy Policy</nuxt-link>
        </ul>
        <ul>
          <li class="mail contacts">
            <div class="icon" v-html="require('~/assets/images/mail.svg?include')" />
            <a
              href="mailto:info@greensoapcompany.com"
              target="_blank"
              rel="noopener noreferrer"
            >mail</a>
          </li>
          <br />
          <li class="phone contacts">
            <div class="icon" v-html="require('~/assets/images/call.svg?include')" />
            <a href="tel:0031235422304" target="_blank" rel="noopener noreferrer">call</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerActive: false
    }
  },
  methods: {
    toggleHeader() {
      this.headerActive = !this.headerActive
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.ends
  padding-left: var(--spacing-sides)
  padding-right: var(--spacing-sides)
  width: 100%
  z-index: +10
  &-Container
    display: flex
    flex-wrap: wrap
    ul
      flex-basis: 25%
  li, a, svg, img
    color: white
    text-decoration: none
  .icon
    fill: white
    width: 22px
  a:hover, .link:hover
    @media ( hover: hover )
      text-decoration: underline
  .title
    text-transform: uppercase
    margin-bottom: 1rem
    font-size: 28px
    line-height: 38px
    @media screen and ( max-width: $breakpoint-mobile)
      margin-bottom: 0
  .contacts
    display: flex
    margin-left: -38px
    text-decoration: none
    > div
      flex-basis: 38px
  .conditions
    font-size: 12px
    line-height: 21px

.header
  z-index: +1
  .headerToggle
    position: fixed
    top: 0
    right: 0
    padding: var(--spacing-four)
    z-index: +3
  .headerUnfolded
    position: fixed
    left: 0
    top: 0
    right: 0
    transform: translateY(-100%)
    background: $color-black
    transition: transform .33s ease
    z-index: +2
    &.active
      transform: translateY(0%)
    ul
      padding-top: var(--spacing-four)
      padding-bottom: var(--spacing-four)
    ul:last-child
      display: flex
      flex-direction: column
      justify-content: flex-end
    &-Logo
      flex-basis: 50%
      padding-top: var(--spacing-four)
      padding-bottom: var(--spacing-four)
      svg
        height: 2.5rem
  .headerFolded
    position: absolute
    top: 0
    left: 0
    z-index: +1
    &-Logo
      width: 100%
      padding: var(--spacing-four)
      img, svg
        height: 2.5rem
</style>
