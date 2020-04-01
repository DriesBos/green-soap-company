<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="history contentContainer-Center">
    <div class="history-Wrapper contentContainer-Center_Wrapper">
      <component
        :is="blok.component | dashify"
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok"
      ></component>
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
.history
  &-Wrapper
    display: flex
    flex-direction: column
</style>
