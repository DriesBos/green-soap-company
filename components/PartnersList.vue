<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="section partnerList contentContainer-Center">
    <div class="partnerList-Wrapper contentContainer-Center_Wrapper">
      <div class="section-Header">
        <h1 v-if="blok.title" class="title">{{ blok.title }}</h1>
      </div>
      <img class="contentDesktop" :src="blok.image" />
      <img class="contentMobile" :src="blok.image_mobile" />
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

.partnerList
  width: 100%
  display: flex
  justify-content: center
  &-Wrapper
    width: 100%
    max-width: $content-container
</style>
