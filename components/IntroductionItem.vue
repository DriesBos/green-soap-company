<template>
  <section v-editable="blok" class="item introductionItem">
    <div class="introductionItem-Container">
      <div class="introductionItem-Left">
        <h1>{{ blok.title }}</h1>
        <markdown :input="blok.text" />
      </div>
      <div class="introductionItem-Right">
        <div class="aspectRatioBox">
          <img :src="blok.image" alt="" />
        </div>
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

<style lang="sass" scoped>
.introductionItem
  width: 100%
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  &-Container
    max-width: 1000px
    display: flex
    margin: var(--spacing-one)
    > div
      flex-basis: 50%
  &-Left
    display: flex
    flex-direction: column
    justify-content: center
    h1, h2
      padding-bottom: 1em
    h1, h2, .markdown
      margin-right: var(--spacing-one)
  &-Right
    .aspectRatioBox
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        object-fit: cover
</style>
