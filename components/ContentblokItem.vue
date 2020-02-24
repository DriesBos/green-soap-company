<template>
  <nuxt-link :to="blok.page_link.cached_url" tag="li">
    <div class="contentblok-AspectRatio">
      <h1>{{ blok.title }}</h1>
      <p>{{ blok.subtitle }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    // console.log(this.blok)
  }
}
</script>
