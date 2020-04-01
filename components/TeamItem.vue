<template>
  <!-- prettier-ignore -->
  <div class="team-Item">
    <div class="team-Item_Portrait">
      <img class="portrait" :src="blok.portrait" />
      <img class="portrait-Hover" :src="blok.portrait_on_hover" />
    </div>
    <div class="team-Item_Content">
      <p class="title">{{ blok.name }}</p>
      <p class="function">{{ blok.function }}</p>
      <p class="description">{{ blok.text }}</p>
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
.team
  &-Item
    width: calc((100% - 64px) / 3)
    margin-bottom: var(--spacing-four)
    margin-right: var(--spacing-three)
    &:nth-child(3n)
      margin-right: 0
    &:nth-last-child(2), &:last-child, &:nth-last-child(3)
      margin-bottom: 0
    &_Portrait
      position: relative
      height: 0
      padding-top: 133.3333%
      margin-bottom: var(--spacing-two)
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        object-fit: cover
      .portrait-Hover
        opacity: 0
      &:hover > .portrait-Hover
        opacity: 1
    .title
      margin-bottom: var(--spacing-one)
    .function
      margin-bottom: var(--spacing-one)
</style>
