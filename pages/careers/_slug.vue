<template>
  <div class="view-CareersSingle">
    <component
      :is="blok.component | dashify"
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
    <section class="item careersItem contentContainer-Center">
      <div class="careersItem-Wrapper contentContainer-Center_Wrapper">
        <h1 class="title">{{ story.content.title }}</h1>
        <markdown :input="story.content.general" />
        <markdown :input="story.content.what_we_need" />
        <markdown :input="story.content.what_we_offer" />
        <a href="mailto:info@greensoapcompany.com" class="button">
          <div class="button-Background"></div>
          <div class="button-Text">Contact & apply !</div>
        </a>
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
    let endpoint = `cdn/stories/careers/${context.params.slug}`
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
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.careersItem
  h1, h5
    margin-bottom: var(--spacing-three)
  .markdown
    margin-bottom: var(--spacing-four)
  &-Wrapper
    > div:last-child
      margin-bottom: 0
</style>
