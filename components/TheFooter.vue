<template>
  <footer class="footer contentContainer-Center">
    <div class="footer-Container contentContainer-Center_Wrapper">
      <div class="footer-RowOne">
        <ul>
          <img class="logo" src="~/assets/images/logo-white.png" />
        </ul>
        <ul>
          <!-- prettier-ignore -->
          <li>
            Green Soap Company
            <br />Roelof Hartplein 210,
            <br />1071 TT, Haarlem
            <br />
            <a
              href="mailto:info@greensoapcompany.com"
              target="_blank"
              rel="noopener noreferrer"
            >info@greensoapcompany.com</a>
            <br />
            <a href="tel:0031207992888" target="_blank" rel="noopener noreferrer">+31 20 799 28 88</a>
          </li>
        </ul>
      </div>
      <div class="footer-RowTwo">
        <ul></ul>
        <ul>
          <li class="title">Site</li>
          <nuxt-link to="/" class="link" tag="li">Home</nuxt-link>
          <nuxt-link to="/retail" class="link" tag="li">Retail</nuxt-link>
          <nuxt-link to="/career" class="link" tag="li">Career</nuxt-link>
          <nuxt-link to="/brands" class="link" tag="li">Brands</nuxt-link>
          <nuxt-link to="/news" class="link" tag="li">News</nuxt-link>
          <nuxt-link to="/about" class="link" tag="li">About</nuxt-link>
        </ul>
        <ul>
          <li class="title">Follow Us</li>
          <li class="link">
            <!-- prettier-ignore -->
            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">instagram</a>
          </li>
          <li class="link">
            <!-- prettier-ignore -->
            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">facebook</a>
          </li>
        </ul>
        <ul>
          <li class="title">Quick Links</li>
          <li class="link">Start selling our products</li>
          <li class="link">Join our team</li>
          <li class="link">Press contact</li>
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
  li, a
    color: white
    font-size: .8889rem
  a:hover, .link:hover
    text-decoration: underline
  .title
    text-transform: uppercase
  &-Container
    display: flex
    flex-direction: column
    ul
      margin-top: var(--spacing-four)
      margin-bottom: var(--spacing-four)
      flex-basis: 25%
      li.title
        margin-bottom: 1rem
      li.link, a
        cursor: pointer
        text-decoration: none
        &::hover
          text-decoration: underline
  &-RowOne
    display: flex
    justify-content: space-between
    border-bottom: 1px solid white
  &-RowTwo
    display: flex
</style>
