<template>
  <section v-editable="blok" class="section brandItem contentContainer-Center">
    <div class="brandItem-Wrapper contentContainer-Center_Wrapper">
      <div class="brandItem-Image">
        <img class="portrait" :src="blok.image" />
      </div>
      <div class="brandItem-Text">
        <div class="brandItem-Title">
          <h2 class="title">{{ blok.title }}</h2>
        </div>
        <markdown :input="blok.text" />
      </div>
      <p>{{ blok.hyperlink.url }}</p>
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

.brandItem
  &-Image
    position: relative
    width: 100%
    height: 0
    padding-top: 66%
    margin-bottom: var(--spacing-three)
    img
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      object-fit: cover
  &-Text
    display: flex
    > div
      width: 50%
</style>
