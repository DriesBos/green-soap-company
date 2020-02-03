<template>
  <section v-editable="blok" class="item landingItem">
    <img :src="blok.image" alt="" />
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
.landingItem
</style>
