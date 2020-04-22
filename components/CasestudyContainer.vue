<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="casestudy contentContainer-Center">
    <div class="casestudy-Wrapper contentContainer-Center_Wrapper">
      <div class="section-Header">
        <h1 class="title">{{ blok.title }}</h1>
      </div>
      <div class="casestudy-ContentWrapper">
        <component
          :is="blok.component | dashify"
          v-for="blok in blok.body"
          :key="blok._uid"
          :blok="blok"
        ></component>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.casestudy
  &-Wrapper
    display: flex
    flex-direction: column
  &-ContentWrapper
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    @media screen and ( max-width: $breakpoint-mobile)
      flex-direction: column
  &-Item
    position: relative
    background: $color-blue
    width: calc(50% - #{var(--spacing-two)})
    margin-bottom: var(--spacing-three)
    cursor: pointer
    transition: background $transition-hover
    @media screen and ( max-width: $breakpoint-mobile)
      margin-bottom: var(--spacing-three)
      width: 100%
  &-Content
    width: 100%
    height: 0
    padding-top: 75%
    overflow: hidden
  &-Readmore
    position: absolute
    bottom: 1rem
    left: 50%
    transform: translateX(-50%)
    text-transform: uppercase
  &-Image
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    width: 40%
    height: 40%
    img
      width: 100%
      height: 100%
      object-fit: contain
</style>
