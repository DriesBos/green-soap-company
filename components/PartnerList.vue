<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="section partnerList contentContainer-Center">
    <div class="partnerList-Wrapper contentContainer-Center_Wrapper">
      <div class="section-Header">
        <h2 v-if="blok.title" class="title">{{ blok.title }}</h2>
      </div>
      <img :src="blok.image" />
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

.partnerList
  width: 100%
  display: flex
  justify-content: center
  &-Wrapper
    width: 100%
    max-width: $content-container
  .title
    font-size: 3.5556em
    margin-bottom: var(--spacing-three)
</style>
