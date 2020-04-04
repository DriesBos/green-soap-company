<template>
  <header class="header">
    <div class="header-Logo">
      <nuxt-link to="/" tag="div" class="header-Logo_Wrapper">
        <img class="logo" src="~/assets/images/logo.png" />
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.header
  position: absolute
  top: 0
  left: 0
  width: 100%
  display: flex
  justify-content: center
  z-index: +1
  &-Logo
    // max-width: $content-container
    width: 100%
    padding: var(--spacing-three)
</style>
