<template>
  <div class="view-Retail">
    <component
      :is="blok.component | dashify"
      v-for="blok in retailList.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

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
      retailList: {},
      caseList: {}
    }
  },
  methods: {
    arrayLoop(array) {
      let filteredArray = array.filter(function(el) {
        if (el.name === "Retail") {
          return true
        }
      })
      this.caseList = array.filter(function(el) {
        if (el.content.component === "page-casestudy") {
          return true
        }
      })
      this.retailList = filteredArray[0].content
    }
  },
  mounted() {
    this.arrayLoop(this.stories)
    console.log("stories", this.stories)
    console.log("retailList", this.retailList)
    console.log("caseList", this.caseList)
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.vacancyList
  ul
    li
      background-color: $color-green
      margin-bottom: var(--spacing-three)
      padding: var(--spacing-three)
      display: flex
      align-items: center
      justify-content: space-between
      cursor: pointer
      > div:nth-child(2)
        flex-grow: 1
        margin-left: var(--spacing-four)
    li:last-child
      margin-bottom: 0
    .title
      text-transform: uppercase
</style>
