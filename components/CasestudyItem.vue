<template>
  <!-- prettier-ignore -->
  <nuxt-link :to="blok.hyperlink.cached_url" tag="div" class="casestudy-Item readmore-Wrapper">
    <div class="casestudy-Content">
      <!-- <h3 class="title">{{ blok.title }}</h3> -->
      <div class="casestudy-Image">
        <picture>
          <img
            :srcset="`${transformImage(blok.logo, '300x0')} 300w, ${transformImage(blok.logo, '150x0')} 150w`"
            sizes="(max-width: 1025px) 100vw, (min-width: 1025px) 100vw"
            :data-src="blok.logo | transformImage('300x0')"
            alt
          />
        </picture>
      </div>
    </div>
    <p class="title casestudy-Readmore">Read More</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  methods: {
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""

      let imageService = "//img2.storyblok.com/"
      let path = image.replace("//a.storyblok.com", "")
      return imageService + option + path
    }
  }
}
</script>
