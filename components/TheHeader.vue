<template>
  <header class="header">
    <div class="header-Logo">
      <div class="header-Logo_Wrapper">
        <img src="~/assets/images/logo.png" />
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.header
  position: relative
  width: 100%
  display: flex
  justify-content: center
  &-Logo
    max-width: $content-container
    width: 100%
    padding-top: var(--spacing-three)
    padding-bottom: var(--spacing-three)
    &_Wrapper
      img
        height: 2em
</style>
