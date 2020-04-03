<template>
  <!-- prettier-ignore -->
  <div class="team-Item">
    <div class="team-Item_Portrait">
      <img v-if="blok.portrait" class="portrait" :src="blok.portrait" />
      <img v-if="blok.portrait_on_hover" class="portrait-Hover" :src="blok.portrait_on_hover" />
    </div>
    <div class="team-Item_Content">
      <p v-if="blok.name" class="title">{{ blok.name }}</p>
      <p v-if="blok.function" class="function">{{ blok.function }}</p>
      <markdown v-if="blok.text" class="description" :input="blok.text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.team
  &-Item
    width: calc((100% - 64px) / 3)
    margin-bottom: var(--spacing-four)
    margin-right: var(--spacing-three)
    @media screen and ( max-width: $content-container)
      width: calc((100% - 32px) / 2)
    &:nth-child(3n)
      @media screen and ( min-width: $content-container)
        margin-right: 0
    &:nth-child(2n)
      @media screen and ( max-width: $content-container)
        margin-right: 0
    @media screen and ( max-width: $breakpoint-mobile)
      width: 100%
      margin-right: 0
    &:nth-last-child(2), &:last-child, &:nth-last-child(3)
      @media screen and ( min-width: $content-container)
        margin-bottom: 0
    &_Portrait
      position: relative
      height: 0
      padding-top: 133.3333%
      margin-bottom: var(--spacing-one)
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        object-fit: cover
      .portrait-Hover
        opacity: 0
        transition: opacity $transition-portrait
      &:hover > .portrait-Hover
        @media ( hover: hover )
          opacity: 1
    &_Content
      p
        @media screen and ( max-width: $breakpoint-mobile)
          display: inline-block
    .title
      margin-bottom: var(--spacing-one)
    .title::after
      @media screen and ( max-width: $breakpoint-mobile)
        content: ","
    .function
      margin-bottom: var(--spacing-two)
    .function, .description
      font-size: .8889rem
      @media screen and ( max-width: $breakpoint-mobile)
        font-size: 1rem
</style>
