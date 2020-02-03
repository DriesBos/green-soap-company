<template>
  <footer class="footer">
    <ul>
      <li class="title">Green Soap Company</li>
    </ul>
    <ul></ul>
    <ul>
      <li class="title">Pages</li>
      <nuxt-link to="/" class="link" tag="li">Home</nuxt-link>
      <nuxt-link to="/retail" class="link" tag="li">Retail</nuxt-link>
      <nuxt-link to="/career" class="link" tag="li">Career</nuxt-link>
      <nuxt-link to="/brands" class="link" tag="li">Brands</nuxt-link>
      <nuxt-link to="/news" class="link" tag="li">News</nuxt-link>
      <nuxt-link to="/about" class="link" tag="li">About</nuxt-link>
    </ul>
    <ul>
      <li class="title">Contact Us</li>
      <li class="link">
        <a href="mailto:info@driesbos.com">info@driesbos.com</a>
      </li>
      <li class="link">
        <a href="tel:+31636101262">+31(0)636101262</a>
      </li>
      <li>&nbsp;</li>
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
  </footer>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.footer
  display: flex
  justify-content: space-between
  background: black
  ul
    margin: var(--spacing-one)
    flex-basis: 25%
    li, a
      color: white
    li.title
      font-weight: bold
      margin-bottom: 1em
    li.link, a
      cursor: pointer
      text-decoration: none
      &::hover
        text-decoration: underline
</style>
