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
    height: 0
    padding-top: 25%
    margin-bottom: var(--spacing-three)
    cursor: pointer
    transition: background $transition-hover
    @media screen and ( max-width: $breakpoint-mobile)
      margin-bottom: var(--spacing-three)
      width: 100%
      padding-top: 75%
  &-Item:last-child
    margin-bottom: 0
    padding-top: 35%
    @media screen and ( max-width: $breakpoint-mobile)
      padding-top: 75%
  &-Content
    position: absolute
    display: flex
    flex-direction: column
    align-items: center
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    text-align: center
    h3
      margin-bottom: var(--spacing-two)
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
    width: 8rem
    height: 8rem
    img
      width: 100%
      height: 100%
      object-fit: contain
</style>
