<template>
  <section class="item statsItem contentContainer-Center">
    <ul class="contentContainer-Center_Wrapper">
      <li v-if="blok.value_one && blok.description_one">
        <p id="numbers" :data-count="blok.value_one" class="stats"></p>
        <p>{{ blok.description_one }}</p>
      </li>
      <li v-if="blok.value_two && blok.description_two">
        <p id="numbers" :data-count="blok.value_two" class="stats"></p>
        <p>{{ blok.description_two }}</p>
      </li>
      <li v-if="blok.value_three && blok.description_three">
        <p id="numbers" :data-count="blok.value_three" class="stats"></p>
        <p>{{ blok.description_three }}</p>
      </li>
      <li v-if="blok.value_four && blok.description_four">
        <p id="numbers" :data-count="blok.value_four" class="stats"></p>
        <p>{{ blok.description_four }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import anime from "animejs/lib/anime.es.js"

export default {
  props: {
    blok: Object
  },
  data() {
    return {
      countStarted: 0
    }
  },
  mounted() {
    window.addEventListener("scroll", this.startCounting)
  },
  methods: {
    startCounting() {
      var el = document.querySelector(".statsItem")
      var pos = el.getBoundingClientRect()
      var counters = document.querySelectorAll(".stats")
      if (pos.y < window.innerHeight && this.countStarted === 0) {
        // https://codepen.io/Vasonski123/pen/eYmmOEw
        counters.forEach(counter => {
          anime({
            targets: counter,
            innerHTML: [0, counter.getAttribute("data-count")],
            easing: "easeInOutQuart",
            round: 1,
            duration: 2000
          })
        })
        this.countStarted = 1
      }
    }
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
