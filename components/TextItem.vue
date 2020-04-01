<template>
  <section v-editable="blok" class="section textItem">
    <div class="textItem-Wrapper">
      <markdown :input="blok.title" />
      <markdown :input="blok.text" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("text", this.blok)
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
</style>
