<template>
  <section v-editable="blok" class="section brandItem contentContainer-Center">
    <div class="brandItem-Wrapper contentContainer-Center_Wrapper">
      <!-- prettier-ignore -->
      <div v-lazy-container="{ selector: 'img' }" class="brandItem-Image vueLazy">
        <picture>
          <img
            :srcset="`${transformImage(blok.image, '2880x0/filters:format(jpg):quality(80)')} 2880w, ${transformImage(blok.image, '2560x0/filters:format(jpg):quality(80)')} 2560w, ${transformImage(blok.image, '1920x0/filters:format(jpg):quality(80)')} 1920w, ${transformImage(blok.image, '1680x0/filters:format(jpg):quality(80)')} 1680w, ${transformImage(blok.image, '1370x0/filters:format(jpg):quality(80)')} 1370w, ${transformImage(blok.image, '900x0/filters:format(jpg):quality(80)')} 900w`"
            sizes="100vw"
            :data-src="blok.image | transformImage('1440x0/filters:format(jpg):quality(80)')"
          />
        </picture>
      </div>
      <div class="brandItem-Content">
        <div class="brandItem-Title">
          <h2 class="title">{{ blok.title }}</h2>
        </div>
        <div class="brandItem-Text">
          <markdown :input="blok.text" />
          <!-- prettier-ignore -->
          <a class="button" :href="blok.hyperlink.url" target="_blank">
            <div class="button-Background"></div>
            <div class="button-Text">visit {{ blok.title }}</div>
          </a>
        </div>
      </div>
    </div>
  </section>
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
    let pathOne = image.replace("https://a.storyblok.com", "")
      let pathTwo = pathOne.replace("//a.storyblok.com", "")
      return imageService + option + pathTwo
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.brandItem
  @media screen and ( max-width: $breakpoint-mobile)
    margin-top: var(--spacing-five)
  &-Image
    position: relative
    width: 100%
    height: 0
    padding-top: 66%
    margin-bottom: var(--spacing-three)
    img
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      object-fit: cover
  &-Text
    @media screen and ( max-width: $breakpoint-mobile)
      display: flex
      flex-direction: column
      a
        align-self: flex-end
  &-Content
    display: flex
    @media screen and ( max-width: $breakpoint-mobile)
      flex-direction: column
    .button
      margin-top: var(--spacing-three)
      @media screen and ( max-width: $breakpoint-mobile)
        margin-top: 1rem
    > div
      @media screen and ( min-width: $breakpoint-mobile)
        width: 50%
    .markdown
      width: 100%
  &-Title
    @media screen and ( min-width: $breakpoint-mobile)
      padding-right: var(--spacing-three)
    @media screen and ( max-width: $breakpoint-mobile)
      margin-bottom: 1rem
</style>
