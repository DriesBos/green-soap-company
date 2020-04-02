<template>
  <!-- prettier-ignore -->
  <nuxt-link :to="blok.hyperlink.cached_url" tag="div" class="casestudy-Item">
    <div class="casestudy-Content">
      <h3 class="title">{{ blok.title }}</h3>
      <p class="title">Read More</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("Casestudy item", this.blok)
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.casestudy
  &-Item
    position: relative
    background: $color-purple
    flex-grow: 1
    margin-right: var(--spacing-three)
    height: 0
    padding-top: 20%
    cursor: pointer
    transition: background $transition-hover
    &:last-child
      margin-right: 0
      padding-top: 30%
    &:hover
      background: $color-purple-hover
  &-Content
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    text-align: center
    h3
      margin-bottom: var(--spacing-two)
    p
      text-transform: uppercase
</style>
