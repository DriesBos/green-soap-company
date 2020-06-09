<template>
  <!-- prettier-ignore -->
  <div class="history-Item">
    <div v-lazy-container="{ selector: 'img' }" class="history-Item_Image vueLazy">
      <picture>
        <img
          :srcset="`${transformImage(blok.image, '1140x0/filters:format(jpg):quality(80)')} 1140w, ${transformImage(blok.image, '570x0/filters:format(jpg):quality(80)')} 570w`"
          sizes="(max-width: 800px) 100vw, 50vw"
          :data-src="blok.image | transformImage('1140x0/filters:format(jpg):quality(80)')"
          alt
        />
      </picture>
    </div>
    <div class="history-Item_Text">
      <markdown :input="blok.text" />
    </div>
  </div>
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

<style lang="sass">
@import '~/assets/styles/variables.sass'

.history
  &-Item
    display: flex
    margin-bottom: var(--spacing-four)
    @media screen and ( max-width: $breakpoint-mobile)
      flex-direction: column
    &_Image
      img
        width: 100%
      @media screen and ( max-width: $breakpoint-mobile)
        margin-bottom: var(--spacing-three)
    .markdown
      width: 100%
    &:nth-child(even)
      @media screen and ( min-width: $breakpoint-mobile)
        flex-direction: row-reverse
      .markdown
        @media screen and ( min-width: $breakpoint-mobile)
          padding-right: var(--spacing-three)
      img
        @media screen and ( min-width: $breakpoint-mobile)
          padding-left: var(--spacing-three)
    &:nth-child(odd)
      .markdown
        @media screen and ( min-width: $breakpoint-mobile)
          padding-left: var(--spacing-three)
      img
        @media screen and ( min-width: $breakpoint-mobile)
          padding-right: var(--spacing-three)
    &:last-child
      margin-bottom: 0
    > div
      flex-basis: 50%
      @media screen and ( max-width: $breakpoint-mobile)
        flex-basis: 100%
</style>
