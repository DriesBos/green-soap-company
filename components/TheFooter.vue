<template>
  <footer class="footer contentContainer-Center">
    <!-- prettier-ignore -->
    <div class="footer-Container contentContainer-Center_Wrapper">
      <div class="footer-RowTwo">
        <ul>
          <li class="title">Site</li>
          <nuxt-link to="/" class="link" tag="li">Home & News</nuxt-link>
          <nuxt-link to="/retail" class="link" tag="li">Retail</nuxt-link>
          <nuxt-link to="/brands" class="link" tag="li">Brands</nuxt-link>
          <nuxt-link to="/about" class="link" tag="li">About & Team</nuxt-link>
          <nuxt-link to="/career" class="link" tag="li">Careers</nuxt-link>
          <nuxt-link to="/history" class="link" tag="li">GSC History</nuxt-link>
          <br />
          <nuxt-link to="/terms-conditions" class="link conditions" tag="li">Terms & Conditions</nuxt-link>
          <nuxt-link to="/privacy-policy" class="link conditions" tag="li">Privacy Policy</nuxt-link>
        </ul>
        <ul>
          <li class="title">Brands</li>
          <nuxt-link to="/brands" class="link" tag="li">Overview</nuxt-link>
          <li class="link">
            <!-- prettier-ignore -->
            <a
              href="https://www.marcelsgreensoap.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >Marcel's Green Soap</a>
          </li>
          <li class="link">
            <!-- prettier-ignore -->
            <a
              href="https://www.driehoekzeep.nl/"
              target="_blank"
              rel="noopener noreferrer"
            >Driehoek</a>
          </li>
        </ul>
        <ul>
          <li class="title">Quick Links</li>
          <nuxt-link to="/retail" class="link" tag="li">Join the revolution</nuxt-link>
          <nuxt-link to="/careers" class="link" tag="li">Join our team</nuxt-link>
        </ul>
        <ul>
          <!-- prettier-ignore -->
          <li class="title">Contact Us</li>
          <li class="address contacts">
            <div v-html="require('~/assets/images/location.svg?include')" />Eindenhoutstraat 28,
            <br />2021 ML, Haarlem
          </li>
          <li class="mail contacts">
            <div v-html="require('~/assets/images/mail.svg?include')" />
            <a
              href="mailto:info@greensoapcompany.com"
              target="_blank"
              rel="noopener noreferrer"
            >info@greensoapcompany.com</a>
          </li>
          <li class="phone contacts">
            <div v-html="require('~/assets/images/call.svg?include')" />
            <a href="tel:0031207992888" target="_blank" rel="noopener noreferrer">+31 20 799 28 88</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.footer
  background: $color-black
  padding-left: var(--spacing-sides)
  padding-right: var(--spacing-sides)
  svg
    fill: white
    width: 22px
  .contacts
    display: flex
    > div
      flex-basis: 38px
  @media screen and ( max-width: $breakpoint-mobile)
    padding-top: var(--spacing-four)
    padding-bottom: var(--spacing-four)
  li, a
    color: white
    font-size: 16px
    line-height: 26px
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
  .address
    a
      text-decoration: underline
  .conditions
    font-size: 12px
    line-height: 21px
  &-Container
    display: flex
    flex-direction: column
    ul
      flex-basis: 33.3333%
      @media screen and ( max-width: $breakpoint-mobile)
        flex-basis: 100% !important
        width: 100%
        margin-top: 0
        margin-bottom: var(--spacing-four)
      li.link, a
        cursor: pointer
        text-decoration: none
        &::hover
          @media ( hover: hover )
            text-decoration: underline
  &-RowOne
    display: flex
    justify-content: space-between
    @media screen and ( min-width: $breakpoint-mobile)
      margin-top: var(--spacing-four)
      padding-bottom: var(--spacing-three)
      border-bottom: 1px solid white
    @media screen and ( max-width: $breakpoint-mobile)
      flex-wrap: wrap
  &-RowTwo
    display: flex
    @media screen and ( min-width: $breakpoint-mobile)
      margin-top: var(--spacing-three)
      margin-bottom: var(--spacing-four)
    // @media screen and ( max-width: $content-container)
    //   ul:first-child
    //     display: none
    @media screen and ( max-width: $breakpoint-mobile)
      flex-wrap: wrap
</style>
