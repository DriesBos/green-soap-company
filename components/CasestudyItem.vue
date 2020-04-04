<template>
  <!-- prettier-ignore -->
  <nuxt-link :to="blok.hyperlink.cached_url" tag="div" class="casestudy-Item readmore-Wrapper">
    <div class="casestudy-Content">
      <h3 class="title">{{ blok.title }}</h3>
      <p class="title readmore">Read More</p>
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
    background: $color-blue
    flex-grow: 1
    margin-right: var(--spacing-three)
    height: 0
    padding-top: 20%
    cursor: pointer
    transition: background $transition-hover
    @media screen and ( max-width: $breakpoint-mobile)
      margin-right: 0
      margin-bottom: var(--spacing-three)
      width: 100%
      padding-top: 75%
    &:last-child
      margin-right: 0
      padding-top: 30%
      @media screen and ( max-width: $breakpoint-mobile)
        padding-top: 75%
    // &:hover
    //   @media ( hover: hover )
    //     background: $color-purple-hover
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
