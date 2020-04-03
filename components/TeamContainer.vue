<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="team contentContainer-Center">
    <div class="team-Wrapper contentContainer-Center_Wrapper">
      <div class="section-Header">
        <h2 class="title">Meet the team</h2>
      </div>
      <div class="team-PortraitsWrapper">
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
  }
}
</script>

<style lang="sass">
.team
  &-Wrapper
    display: flex
    flex-direction: column
  &-PortraitsWrapper
    display: flex
    flex-wrap: wrap
    justify-content: flex-start
</style>
