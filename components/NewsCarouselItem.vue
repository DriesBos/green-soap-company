<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="newsCarousel contentContainer-Right">
    <div class="newsCarousel-Wrapper contentContainer-Right_Wrapper">
      <div class="section-Header">
        <h1 class="title">Latest news</h1>
      </div>
      <ul class="newsCarousel-Container">
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
    @media screen and ( max-width: $breakpoint-mobile)
      margin-left: var(--spacing-four)
      margin-right: var(--spacing-four)
  .section-Header
    @media screen and ( min-width: $breakpoint-mobile)
      padding-left: calc((100vw - #{$content-container}) / 2)
    @media screen and ( min-width: $breakpoint-mobile) and ( max-width: $content-container)
      padding-left: var(--spacing-sides)
  &-Excerpt
    margin-bottom: var(--spacing-three)
    margin-left: var(--spacing-three)
    margin-right: var(--spacing-three)
    overflow: hidden
    @media screen and ( max-width: $breakpoint-mobile)
      margin-left: var(--spacing-four)
      margin-right: var(--spacing-four)
    p
      font-size: 14px
      line-height: 24px
  &-ReadMore
    text-align: right
    text-transform: uppercase
    margin: var(--spacing-two)
    margin-right: var(--spacing-three)
    @media screen and ( max-width: $breakpoint-mobile)
      margin-right: var(--spacing-four)
  ul
    display: flex
    flex-wrap: nowrap
    align-items: flex-start
    overflow-x: auto
    @media screen and ( min-width: $content-container)
      padding-left: calc((100vw - #{$content-container}) / 2)
    @media screen and ( max-width: $breakpoint-mobile)
      flex-direction: column
      overflow-x: hidden
    @media screen and ( min-width: $breakpoint-mobile) and ( max-width: $content-container)
      padding-left: var(--spacing-sides)
    &::after
      content: ""
      flex: 0 0 var(--spacing-three)
      width: 100px
    li
      position: relative
      width: calc(373px + #{var(--spacing-three)}
      flex: 0 0 auto
      // margin-right: var(--spacing-three)
      border-right: var(--spacing-three) solid white
      background: $color-orange
      transition: background $transition-hover
      @media screen and ( max-width: $breakpoint-mobile)
        width: 100%
        margin-right: 0
        margin-bottom: var(--spacing-three)
        border-right: 0
      // &:hover
      //   @media ( hover: hover )
      //     background: $color-green-hover
      a
        text-decoration: none
  ul::-webkit-scrollbar
    display: none
</style>
