<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="casestudy contentContainer-Center">
    <div class="casestudy-Wrapper contentContainer-Center_Wrapper">
      <div class="section-Header">
        <h2 class="title">{{ blok.title }}</h2>
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
  },
  mounted() {
    console.log(this.blok)
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
    justify-content: space-between
    @media screen and ( max-width: $breakpoint-mobile)
      flex-direction: column
</style>
