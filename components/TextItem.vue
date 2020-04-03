<template>
  <section v-editable="blok" class="section textItem">
    <div class="textItem-Wrapper">
      <h2 v-if="blok.title" class="title">{{ blok.title }}</h2>
      <markdown v-if="blok.text" :input="blok.text" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("textItem", this.blok)
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.textItem
  width: 100%
  display: flex
  justify-content: center
  &-Wrapper
    width: 100%
    max-width: $content-container
  .title
    font-size: 3.5556em
    @media screen and ( min-width: $breakpoint-mobile)
      margin-bottom: var(--spacing-three)
    @media screen and ( max-width: $breakpoint-mobile)
      margin-bottom: 1rem
</style>
