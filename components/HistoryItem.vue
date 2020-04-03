<template>
  <!-- prettier-ignore -->
  <div class="history-Item">
    <div class="history-Item_Image">
      <img :src="blok.image" />
    </div>
    <div class="history-Item_Text">
      <markdown :input="blok.text" />
    </div>
  </div>
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

.history
  &-Wrapper
    margin-top: var(--spacing-four)
  &-Item
    display: flex
    margin-bottom: var(--spacing-five)
    @media screen and ( max-width: $breakpoint-mobile)
      flex-direction: column
    &_Image
      img
        width: 100%
      @media screen and ( max-width: $breakpoint-mobile)
        margin-bottom: var(--spacing-three)
    .markdown
      width: 100%
    &:nth-child(even)
      @media screen and ( min-width: $breakpoint-mobile)
        flex-direction: row-reverse
      .markdown
        @media screen and ( min-width: $breakpoint-mobile)
          padding-right: var(--spacing-four)
    &:nth-child(odd)
      .markdown
        @media screen and ( min-width: $breakpoint-mobile)
          padding-left: var(--spacing-four)
    &:last-child
      margin-bottom: 0
      @media screen and ( max-width: $breakpoint-mobile)
        margin-bottom: var(--spacing-four)
    > div
      flex-basis: 50%
      @media screen and ( max-width: $breakpoint-mobile)
        flex-basis: 100%
</style>
