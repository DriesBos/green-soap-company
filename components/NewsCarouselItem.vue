<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="newsCarousel contentContainer-Right">
    <div class="newsCarousel-Wrapper contentContainer-Right_Wrapper">
      <div class="newsCarousel-Scroll contentDesktop"></div>
      <div class="section-Header">
        <h1 class="title">Latest news</h1>
      </div>
      <ul class="newsCarousel-Container">
        <li v-for="post in blok" :key="post._uid" class="newsCarousel-Item readmore-Wrapper">
          <nuxt-link :to="post.full_slug">
            <div v-lazy-container="{ selector: 'img' }" class="newsCarousel-Image vueLazy">
              <picture>
                <img
                  :srcset="`${transformImage(post.content.image, '750x0')} 325w`"
                  sizes="325px"
                  :data-src="post.content.image | transformImage('750x0')"
                />
              </picture>
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
        <nuxt-link class="newsCarousel-Buttons next button" to="/news" tag="li">
          <div class="button-Background"></div>
          <div class="button-Text">
            All news items
            <div class="icon arrow" v-html="require('~/assets/images/icon-arrow.svg?include')"></div>
          </div>
        </nuxt-link>
      </ul>
      <div class="newsCarousel-LetsScroll">
        <h4 class="title newsCarousel-LetsScroll_Title">SCROLL</h4>
        <div
          class="icon icon-ArrowLong newsCarousel-LetsScroll_Line"
          v-html="require('~/assets/images/arrow-long-right.svg?include')"
        ></div>
      </div>
    </div>
    <!-- prettier-ignore -->
  </section>
</template>

<script>
export default {
  props: {
    blok: {}
  },
  methods: {
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""

      let imageService = "//img2.storyblok.com/"
      let path = image.replace("//a.storyblok.com", "")
      return imageService + option + path
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

// prettier-ignore
.newsCarousel
  p
    display: -webkit-box
    -webkit-line-clamp: 3
    -webkit-box-orient: vertical
  a
    text-decoration: none
  h1, h2, h3
    display: -webkit-box
    -webkit-line-clamp: 1
    -webkit-box-orient: vertical
    overflow: hidden
  &-Buttons
    width: auto !important
    svg
      margin-left: .5em
      transform: translateY(.18em)
      width: 1em
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
  &-LetsScroll
    width: 140px
    margin-left: auto
    margin-top: var(--spacing-three)
    display: flex
    align-items: center
    margin-right: 1rem
    line-height: .9
    @media screen and ( max-width: $breakpoint-mobile)
      display: none
    &_Line
      margin-left: 1rem
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
  &-Wrapper
    position: relative
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
      margin-bottom: var(--spacing-three)
  ul
    position: relative
    display: flex
    flex-wrap: nowrap
    align-items: center
    overflow-x: auto
    @media screen and ( min-width: $content-container)
      padding-left: calc((100vw - #{$content-container}) / 2)
    @media screen and ( max-width: $breakpoint-mobile)
      flex-direction: column
      overflow-x: hidden
      align-items: flex-start
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
      border-right: var(--spacing-three) solid white
      background: $color-orange
      transition: background $transition-hover
      &:nth-child(n+6)
        display: none
      &:last-child
        display: flex
      @media screen and ( max-width: $breakpoint-mobile)
        width: 100%
        margin-right: 0
        margin-bottom: var(--spacing-four)
        border-right: 0
        &:nth-child(n+4)
          display: none
        &:last-child
          display: flex
  ul::-webkit-scrollbar
    display: none
</style>
