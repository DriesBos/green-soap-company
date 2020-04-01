<template>
  <footer class="footer contentContainer-Center">
    <div class="footer-Container contentContainer-Center_Wrapper">
      <div class="footer-RowOne">
        <ul>
          <img src="~/assets/images/logo-white.png" />
        </ul>
        <ul>
          <!-- prettier-ignore -->
          <li>
            Green Soap Company
            <br />Roelof Hartplein 210,
            <br />1071 TT, Haarlem
            <br />info@greensoapcompany.com
            <br />+31 20 799 28 88
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
          <li>Start selling our products</li>
          <li>Join our team</li>
          <li>Press contact</li>
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
    font-size: .8889em
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
        margin-bottom: 1em
      li.link, a
        cursor: pointer
        text-decoration: none
        &::hover
          text-decoration: underline
  &-RowOne
    display: flex
    justify-content: space-between
    border-bottom: 1px solid white
    img
      height: 2em
  &-RowTwo
    display: flex
</style>
