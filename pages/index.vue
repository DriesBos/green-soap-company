<template>
  <div class="view-Home">
    <component
      :is="blok.component | dashify"
      v-for="blok in homeList.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
    <news-carousel :blok="newsList" />
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
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
      stories: {
        content: {}
      },
      homeList: {},
      newsList: {}
    }
  },
  mounted() {
    this.arrayLoop(this.stories)
  },
  methods: {
    arrayLoop(array) {
      let filteredArray = array.filter(function(el) {
        if (el.slug === "home") {
          return true
        }
      })
      this.newsList = array.filter(function(el) {
        if (el.content.component === "page-news") {
          return true
        }
      })
      this.homeList = filteredArray[0].content
    }
  }
}
</script>
