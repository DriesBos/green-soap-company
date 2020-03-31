<template>
  <section class="item newsCarousel contentContainer-Right">
    <div class="newsCarousel-Wrapper contentContainer-Right_Wrapper">
      <h2>Latest news.</h2>
      <ul class="newsCarousel-Container">
        <li v-for="post in blok" :key="post._uid">
          <nuxt-link :to="post.full_slug">
            <img :src="post.content.image" />
            <h3 class="title">{{ post.content.title }}</h3>
            <p>{{ post.content.text }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- prettier-ignore -->
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

<style lang="sass">
@import '~/assets/styles/variables.sass'

.newsCarousel
  overflow-x: auto
  h1, h2
    margin-bottom: var(--spacing-four)
  h3
    padding: var(--spacing-three)
    padding-bottom: var(--spacing-two)
  p
    padding: var(--spacing-three)
    padding-top: 0
  ul
    display: flex
    flex-wrap: nowrap
    align-items: flex-start
    overflow-x: auto
    &:after
      content: ""
      flex: 0 0 var(--spacing-three)
    li
      width: 373px
      flex: 0 0 auto
      margin-right: var(--spacing-three)
      background-color: $color-green
      h1, img
        // margin-bottom: 1em
      a
        text-decoration: none
    // li:first-child
      // margin-left: var(--spacing-three)
    // li:last-child
      // margin-right: 100px
  ul::-webkit-scrollbar
    display: none
</style>
