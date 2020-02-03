<template>
  <main>
    <transition :name="transitionName" mode="out-in">
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
  },
  data() {
    return {
      transitionName: "pages"
    }
  },
  watch: {
    $route(from, to) {
      console.log(from, to)
      if (from.path === "/careers" && to.path === "/") {
        return (this.transitionName = "slideLeft")
      } else if (from.path === "/retail" && to.path === "/") {
        return (this.transitionName = "slideRight")
      } else {
        this.transitionName = "pages"
      }
    }
  },
  mounted() {}
}
</script>
