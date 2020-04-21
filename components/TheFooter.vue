<template>
  <footer class="footer ends contentContainer-Center">
    <!-- prettier-ignore -->
    <div class="footer-Container ends-Container contentContainer-Center_Wrapper">
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
        <li class="title">Brands</li>
        <nuxt-link to="/brands" class="link" tag="li">All Brands</nuxt-link>
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
          <a href="https://www.driehoekzeep.nl/" target="_blank" rel="noopener noreferrer">Driehoek</a>
        </li>
      </ul>
      <ul>
        <li class="title">Quick Links</li>
        <nuxt-link to="/retail" class="link" tag="li">Sell our products</nuxt-link>
        <nuxt-link to="/careers" class="link" tag="li">Join our team</nuxt-link>
      </ul>
      <ul>
        <!-- prettier-ignore -->
        <li class="title">Contact Us</li>
        <li class="address contacts">
          <div class="icon" v-html="require('~/assets/images/location.svg?include')" />Eindenhoutstraat 28,
          <br />2021 ML, Haarlem
        </li>
        <li class="mail contacts">
          <div class="icon" v-html="require('~/assets/images/mail.svg?include')" />
          <a
            href="mailto:info@greensoapcompany.com"
            target="_blank"
            rel="noopener noreferrer"
          >info@greensoapcompany.com</a>
        </li>
        <li class="phone contacts">
          <div class="icon" v-html="require('~/assets/images/call.svg?include')" />
          <a href="tel:0031235422304" target="_blank" rel="noopener noreferrer">+31(0)235422304</a>
        </li>
      </ul>
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
  @media screen and ( max-width: $breakpoint-mobile)
    padding-top: var(--spacing-four)
    padding-bottom: var(--spacing-four)
  li, a
    color: white
    font-size: 16px
    line-height: 26px
  .address
    a
      text-decoration: underline
  &-Container
    @media screen and ( min-width: $breakpoint-mobile)
      margin-top: var(--spacing-four)
      margin-bottom: var(--spacing-four)
    ul
      padding-right: var(--spacing-three)
      @media screen and ( min-width: $breakpoint-mobile) and ( max-width: $content-container)
        width: calc(100% / 3)
        margin-bottom: var(--spacing-three)
      @media screen and ( max-width: $breakpoint-mobile)
        width: 100%
        margin-top: 0
        margin-bottom: var(--spacing-four)
      li.link, a
        cursor: pointer
        text-decoration: none
        &::hover
          @media ( hover: hover )
            text-decoration: underline
    ul:first-child
      @media screen and ( max-width: $breakpoint-mobile)
        margin-top: var(--spacing-three)
        width: calc(100% / 2)
    ul:nth-child(2)
      @media screen and ( max-width: $breakpoint-mobile)
        width: calc(100% / 2)
</style>
