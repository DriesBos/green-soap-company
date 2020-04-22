<template>
  <section class="newsPage contentContainer-Center">
    <div class="newsPage-Wrapper contentContainer-Center_Wrapper">
      <div class="section-Header">
        <h1 class="title">Latest news</h1>
      </div>
      <!-- prettier-ignore -->
      <ul class="newsPage-Container">
        <nuxt-link
          v-for="post in newsList"
          :id="post.content.id"
          :key="post.content.id"
          :to="post.full_slug"
          tag="li"
        >
          <div class="newsPage-Image">
            <img :src="post.content.image" />
          </div>
          <div class="newsPage-Title">
            <h3 class="title">{{ post.content.title }}</h3>
          </div>
          <div class="newsPage-Excerpt">
            <p>{{ post.content.text }}</p>
          </div>
          <div class="newsPage-ReadMore">
            <p class="title readmore">Read More</p>
          </div>
        </nuxt-link>
      </ul>
    </div>
  </section>
</template>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.newsPage
  margin-top: var(--spacing-six)
  p
    display: -webkit-box
    -webkit-line-clamp: 3
    -webkit-box-orient: vertical
  h1, h2, h3
    display: -webkit-box
    -webkit-line-clamp: 1
    -webkit-box-orient: vertical
    overflow: hidden
  &-Container
    display: flex
    justify-content: flex-start
    flex-wrap: wrap
    width: 100%
    li
      position: relative
      width: calc((100% - 64px) / 3)
      margin-right: var(--spacing-three)
      margin-bottom: var(--spacing-three)
      background: $color-orange
      cursor: pointer
      &:nth-child(3n)
        @media screen and ( min-width: $content-container)
          margin-right: 0
      @media screen and ( min-width: $breakpoint-mobile) and ( max-width: $content-container)
        width: calc((99% - 32px) / 2)
      &:nth-child(2n)
        @media screen and ( min-width: $breakpoint-mobile) and ( max-width: $content-container)
          margin-right: 0
      @media screen and ( max-width: $breakpoint-mobile)
        width: 100%
        margin-right: 0
        margin-bottom: var(--spacing-four)
      &:hover
        .readmore
          text-decoration: underline
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
</style>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  components: {},
  mixins: [storyblokLivePreview],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/", {
        version: "draft"
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      stories: { content: {} },
      newsList: {}
    }
  },
  methods: {
    arrayLoop(array) {
      this.newsList = array.filter(function(el) {
        if (el.content.component === "page-news") {
          return true
        }
      })
    }
  },
  mounted() {
    this.arrayLoop(this.stories)
  }
}
</script>
