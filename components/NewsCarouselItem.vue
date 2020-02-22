<template>
  <section class="item newsCarousel">
    <!-- prettier-ignore -->
    <ul class="newsCarousel-Container">
      <li v-for="post in blok" :key="post._uid">
        <h1>{{ post.content.title }}</h1>
        <p>{{ post.content.text }}</p>
        <img :src="post.content.image" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    blok: {}
  },
  mounted() {
    // console.log("NEWSCAROUSELITEM", this.blok)
  }
}
</script>
