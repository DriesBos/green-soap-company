<template>
  <main>
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <the-header />
  </main>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue"

export default {
  components: {
    "the-header": TheHeader
  }
}
</script>
