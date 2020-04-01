<template>
  <section class="statsItem contentContainer-Center">
    <ul class="contentContainer-Center_Wrapper">
      <li>
        <p class="stats">{{ blok.value_one }}</p>
        <p>{{ blok.description_one }}</p>
      </li>
      <li>
        <p class="stats">{{ blok.value_two }}</p>
        <p>{{ blok.description_two }}</p>
      </li>
      <li>
        <p class="stats">{{ blok.value_three }}</p>
        <p>{{ blok.description_three }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("stats", this.blok)
  }
}
</script>

<style lang="sass">
.statsItem
  ul
    display: flex
    li
      flex-basis: 25%
      p
        font-size: .8889rem
      .stats
        font-size: 3rem
        margin-bottom: .25rem
</style>
