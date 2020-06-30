<template>
  <div class="view-NewsSingle">
    <component
      :is="blok.component | dashify"
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
    <section class="item newsItem contentContainer-Center">
      <div class="contentContainer-Center_Wrapper">
        <h1 class="title">{{ story.content.title }}</h1>
        <markdown :input="story.content.text" />
      </div>
    </section>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    // prettier-ignore
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    let endpoint = `cdn/stories/news/${context.params.slug}`
    return context.app.$storyapi
      .get(endpoint, {
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
      story: { content: {} }
    }
  },
  mounted() {}
}
</script>

<style lang="sass">
.newsItem
  .title
    margin-bottom: var(--spacing-three)
</style>
