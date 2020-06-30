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
      retailList: {},
      caseList: {}
    }
  },
  mounted() {
    this.arrayLoop(this.stories)
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
  }
}
</script>
