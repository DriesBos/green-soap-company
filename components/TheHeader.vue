<template>
  <!-- prettier-ignore -->
  <header class="header">
    <div class="headerToggle" @click="toggleHeader">
      <div class="icon icon-Hamburger" v-html="require('~/assets/images/hamburger.svg?include')" />
    </div>
    <div class="headerFolded">
      <nuxt-link to="/" tag="div" class="headerFolded-Logo">
        <div
          class="icon icon-Logo"
          v-html="require('~/assets/images/green-soap-company.svg?include')"
        />
      </nuxt-link>
      <div class="headerFolded-Toggle">
        <div class="icon icon-Hamburger" v-html="require('~/assets/images/hamburger.svg?include')" />
      </div>
    </div>
    <div class="ends headerUnfolded contentContainer-Center" :class="{ active: headerActive}">
      <div class="headerUnfolded-Container ends-Container contentContainer-Center_Wrapper">
        <nuxt-link to="/" tag="div" class="headerUnfolded-Logo">
          <div
            class="icon icon-Logo"
            v-html="require('~/assets/images/green-soap-company.svg?include')"
          />
        </nuxt-link>
        <ul>
          <li class="title">Pages</li>
          <nuxt-link to="/" class="link" tag="li" @click.native="toggleHeader">Home & News</nuxt-link>
          <nuxt-link to="/retail" class="link" tag="li" @click.native="toggleHeader">Retail</nuxt-link>
          <nuxt-link to="/brands" class="link" tag="li" @click.native="toggleHeader">All Brands</nuxt-link>
          <nuxt-link to="/careers" class="link" tag="li" @click.native="toggleHeader">Careers</nuxt-link>
          <nuxt-link to="/about" class="link" tag="li" @click.native="toggleHeader">Our Team</nuxt-link>
          <nuxt-link to="/history" class="link" tag="li" @click.native="toggleHeader">Our History</nuxt-link>
        </ul>
        <ul class="header-Contacts">
          <li class="mail contacts">
            <div class="icon" v-html="require('~/assets/images/mail.svg?include')" />
            <a href="mailto:info@greensoapcompany.com" rel="noopener noreferrer">mail</a>
          </li>
          <li class="phone contacts">
            <div class="icon" v-html="require('~/assets/images/call.svg?include')" />
            <a href="tel:0031235422304">call</a>
          </li>
        </ul>
      </div>
      <div class="headerUnfolded-Toggle" @click="toggleHeader">
        <div class="icon icon-Close" v-html="require('~/assets/images/close.svg?include')" />
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
  watch: {
    $route() {
      this.headerActive = false
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
  .link, a
    cursor: pointer
    text-decoration: none
  li, a
    color: white
  li, a
    font-size: 16px
    line-height: 26px
  .icon
    color: white
    fill: white
  a:hover, .link:hover
    @media ( hover: hover )
      text-decoration: underline
  .title
    text-transform: uppercase
    margin-bottom: 1rem
    font-size: 28px
    line-height: 38px
    @media screen and ( max-width: $breakpoint-header)
      margin-bottom: 0
  .contacts
    display: flex
    > div
      flex-shrink: 0
      margin-right: 1rem
  .conditions
    font-size: 12px
    line-height: 21px

.header

  .headerToggle
    position: fixed
    display: flex
    top: 0
    right: 0
    z-index: +5
    padding: var(--spacing-four)

  .headerFolded
    position: absolute
    display: flex
    top: 0
    left: 0
    right: 0
    z-index: +5
    pointer-events: none
    .icon-Logo
      pointer-events: auto
    &-Logo
      width: 100%
      padding: var(--spacing-four)
      padding-right: 0
      color: currentColor
    &-Toggle
      padding: var(--spacing-four)
      visibility: hidden

  .headerUnfolded // Layout CSS only. Rest shared with "ends"
    position: fixed
    left: 0
    top: 0
    right: 0
    transform: translateY(-100%)
    padding-left: var(--spacing-sides)
    padding-right: var(--spacing-sides)
    padding-top: var(--spacing-four)
    padding-bottom: var(--spacing-three)
    background: $color-black
    transition: transform $transition-nav
    z-index: +6
    & .title
      @media screen and ( min-width: 700px)
        line-height: .8
    &-Toggle
      position: absolute
      top: 0
      right: 0
      padding: var(--spacing-four)
      z-index: +7
      @media screen and ( max-width: 750px)
        top: auto
        bottom: 0
    &-Container
      display: flex
      flex-wrap: wrap
      @media screen and ( max-width: 750px)
        justify-content: flex-end
      @media screen and ( max-width: 700px)
        justify-content: flex-start
    &.active
      transform: translateY(0%)
    ul
      flex-basis: 25%
      padding-bottom: var(--spacing-three)
      @media screen and ( max-width: 1000px)
        flex-basis: auto
        flex-grow: 1
      @media screen and ( max-width: 750px)
        flex-basis: 50%
        flex-grow: 0
      @media screen and ( max-width: 700px)
        flex-basis: 100%
    ul.header-Contacts
      display: flex
      flex-direction: column
      justify-content: flex-end
      .mail
        margin-bottom: .5rem
    &-Logo
      flex-basis: 50%
      padding-bottom: var(--spacing-three)
      pointer-events: none
      .icon
        pointer-events: auto
      @media screen and ( max-width: 700px)
        flex-basis: 100%
        padding-bottom: var(--spacing-four)
</style>
