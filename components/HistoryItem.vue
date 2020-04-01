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
.history
  &-Item
    display: flex
    margin-bottom: var(--spacing-five)
    &:nth-child(even)
      flex-direction: row-reverse
    &:last-child
      margin-bottom: 0
    > div
      flex-basis: 50%
</style>
