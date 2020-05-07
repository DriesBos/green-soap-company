<template>
  <footer class="footer ends contentContainer-Center">
    <!-- prettier-ignore -->
    <div class="footer-Container ends-Container contentContainer-Center_Wrapper">
      <ul>
        <li class="title">Pages</li>
        <nuxt-link to="/" class="link" tag="li">Home & News</nuxt-link>
        <nuxt-link to="/retail" class="link" tag="li">Retail</nuxt-link>
        <nuxt-link to="/brands" class="link" tag="li">All Brands</nuxt-link>
        <nuxt-link to="/careers" class="link" tag="li">Careers</nuxt-link>
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
      <ul class="footer-Contacts">
        <!-- prettier-ignore -->
        <li class="title">Contact Us</li>
        <li class="address contacts">
          <div class="icon" v-html="require('~/assets/images/location.svg?include')" />Voorhelmstraat 25-002,
          <br />2012 ZM, Haarlem
        </li>
        <li class="mail contacts">
          <div class="icon" v-html="require('~/assets/images/mail.svg?include')" />
          <a
            href="mailto:info@greensoapcompany.com"
            rel="noopener noreferrer"
          >info@greensoapcompany.com</a>
        </li>
        <li class="phone contacts">
          <div class="icon" v-html="require('~/assets/images/call.svg?include')" />
          <a href="tel:0031235422304" rel="noopener noreferrer">+31(0)235422304</a>
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

.footer // Layout CSS only. Rest shared with "ends"
  padding-left: var(--spacing-sides)
  padding-right: var(--spacing-sides)
  padding-top: var(--spacing-four)
  padding-bottom: var(--spacing-three)
  background: $color-black
  .mail
    hyphens: auto
  &-Container
    display: flex
    flex-wrap: wrap
    ul
      flex-basis: 25%
      padding-right: var(--spacing-three)
      margin-bottom: var(--spacing-three)
      @media screen and ( max-width: 1125px)
        flex-basis: 33.3333%
      @media screen and ( max-width: 750px)
        flex-basis: 50%
      @media screen and ( max-width: 500px)
        flex-basis: 100%
    ul.footer-Contacts
      @media screen and ( max-width: 1125px)
        flex-basis: 100%
        .contacts
          margin-left: 0
</style>
