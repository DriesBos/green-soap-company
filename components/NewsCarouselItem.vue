<template>
  <section class="item newsCarousel">
    <!-- prettier-ignore -->
    <ul class="newsCarousel-Container">
      <li v-for="post in blok" :key="post._uid">
        <nuxt-link :to="post.full_slug">
          <img :src="post.content.image" />
          <h1>{{ post.content.title }}</h1>
          <p>{{ post.content.text }}</p>
        </nuxt-link>
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
    console.log("NEWSCAROUSELITEM", this.blok)
  }
}
</script>
