<template>
  <div class="view-Careers">
    <component
      :is="blok.component | dashify"
      v-for="blok in careerList.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
    <section v-if="vacancyList" class="vacancyList contentContainer-Center">
      <ul class="contentContainer-Center_Wrapper">
        <div class="section-Header">
          <h1 class="title">Open Positions</h1>
        </div>
        <!-- prettier-ignore -->
        <nuxt-link
          v-for="item in vacancyList"
          :key="item.id"
          :to="item.full_slug"
          tag="li"
          class="vacancyList-Item readmore-Wrapper"
        >
          <div class="name">
            <p class="contentDesktop">{{ item.content.title }}</p>
            <h3 class="title contentMobile">{{ item.content.title }}</h3>
          </div>
          <div class="period">
            <p>{{ item.content.subtitle }}</p>
          </div>
          <div class="more">
            <p class="title readmore">read more</p>
          </div>
        </nuxt-link>
      </ul>
    </section>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  components: {},
  mixins: [storyblokLivePreview],
  asyncData(context) {
    // prettier-ignore
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    return context.app.$storyapi
      .get("cdn/stories/", {
        version: version
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
      careerList: {},
      vacancyList: {}
    }
  },
  mounted() {
    this.arrayLoop(this.stories)
  },
  methods: {
    arrayLoop(array) {
      let filteredArray = array.filter(function(el) {
        if (el.name === "Careers") {
          return true
        }
      })
      this.vacancyList = array.filter(function(el) {
        if (el.content.component === "page-vacancy") {
          return true
        }
      })
      this.careerList = filteredArray[0].content
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.vacancyList
  ul
    li
      background: $color-green
      margin-bottom: var(--spacing-three)
      padding: var(--spacing-three)
      display: flex
      align-items: center
      justify-content: space-between
      cursor: pointer
      transition: background $transition-hover
      @media screen and ( max-width: $breakpoint-mobile)
        flex-direction: column
        padding-top: var(--spacing-five)
        padding-bottom: var(--spacing-five)
        .name
          margin-bottom: var(--spacing-two)
        .period
          display: none
      &:hover
        @media ( hover: hover )
          background: $color-green-hover
      > div:nth-child(2)
        flex-grow: 1
        margin-left: var(--spacing-four)
    li:last-child
      margin-bottom: 0
</style>
