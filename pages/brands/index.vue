<template>
  <section class="view view-Brands">
    <!-- <component
      :is="stories[0].content.body[0] | dashify"
      v-if="stories[0].content.component"
      :key="stories[0].content._uid"
      :blok="stories[0].content"
    ></component>-->
    <ul>
      <!-- prettier-ignore -->
      <li v-for="post in stories" :id="post.content.id" :key="post.content.id">
        <nuxt-link :to="post.full_slug" tag="div">
          <h1>{{ post.content.title }}</h1>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/", {
        version: "draft",
        starts_with: "brands"
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
      stories: { content: {} }
    }
  },
  mounted() {
    // console.log(this.stories, "TEST")
  }
}
</script>

<style lang="sass" scoped>
.view-Brands
  li
    padding: var(--spacing-one)
</style>
