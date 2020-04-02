<template>
  <section class="item newsCarousel contentContainer-Right">
    <div class="newsCarousel-Wrapper contentContainer-Right_Wrapper">
      <div class="section-Header newsCarousel-Header">
        <h2 class="title">Latest news</h2>
      </div>
      <ul class="newsCarousel-Container">
        <!-- prettier-ignore -->
        <li v-for="post in blok" :key="post._uid" class="newsCarousel-Item readmore-Wrapper">
          <nuxt-link :to="post.full_slug">
            <div class="newsCarousel-Image">
              <img :src="post.content.image" />
            </div>
            <div class="newsCarousel-Title">
              <h3 class="title">{{ post.content.title }}</h3>
            </div>
            <div class="newsCarousel-Excerpt">
              <p>{{ post.content.text }}</p>
            </div>
            <div class="newsCarousel-ReadMore">
              <p class="title readmore">Read More</p>
            </div>
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
  p
    display: -webkit-box
    -webkit-line-clamp: 3
    -webkit-box-orient: vertical
  h1, h2, h3
    display: -webkit-box
    -webkit-line-clamp: 1
    -webkit-box-orient: vertical
    overflow: hidden
  &-Image
    position: relative
    height: 0
    width: 100%
    padding-bottom: 75%
    margin-bottom: var(--spacing-three)
    img
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      object-fit: cover
  &-Title
    margin-bottom: var(--spacing-one)
    margin-left: var(--spacing-three)
    margin-right: var(--spacing-three)
  &-Excerpt
    margin-bottom: var(--spacing-four)
    margin-left: var(--spacing-three)
    margin-right: var(--spacing-three)
    overflow: hidden
  &-ReadMore
    text-align: right
    text-transform: uppercase
    margin: var(--spacing-two)
    margin-right: var(--spacing-three)
  ul
    display: flex
    flex-wrap: nowrap
    align-items: flex-start
    overflow-x: auto
    &:after
      content: ""
      flex: 0 0 var(--spacing-three)
    li
      position: relative
      width: 373px
      flex: 0 0 auto
      margin-right: var(--spacing-three)
      background: $color-orange
      transition: background $transition-hover
      &:hover
        background: $color-orange-hover
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
