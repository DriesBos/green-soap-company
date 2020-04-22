<template>
  <!-- prettier-ignore -->
  <nuxt-link :to="blok.hyperlink.cached_url" tag="div" class="casestudy-Item readmore-Wrapper">
    <div class="casestudy-Content">
      <!-- <h3 class="title">{{ blok.title }}</h3> -->
      <div class="casestudy-Image">
        <img :src="blok.logo" />
      </div>
    </div>
    <p class="title casestudy-Readmore">Read More</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
