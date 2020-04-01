<template>
  <div class="view-Careers">
    <component
      :is="blok.component | dashify"
      v-for="blok in careerList.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
    <section class="vacancyList">
      <ul>
        <li v-for="item in vacancyList" :key="item.id">
          <nuxt-link :to="item.full_slug">
            <div>
              <p>{{ item.content.title }}</p>
            </div>
            <div>
              <p>{{ item.content.subtitle }}</p>
            </div>
            <div>
              <p>read more</p>
            </div>
          </nuxt-link>
        </li>
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
      careerList: {},
      vacancyList: {}
    }
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
  },
  mounted() {
    this.arrayLoop(this.stories)
    console.log("careerlist", this.careerList)
    console.log("vacencylist", this.vacancyList)
  }
}
</script>
