<template>
  <main>
    <the-header />
    <transition :name="transitionName" mode="out-in">
      <nuxt />
    </transition>
    <the-nav />
    <the-footer />
  </main>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue"
import TheNav from "~/components/TheNav.vue"
import TheFooter from "~/components/TheFooter.vue"

export default {
  components: {
    "the-header": TheHeader,
    "the-nav": TheNav,
    "the-footer": TheFooter
  },
  data() {
    return {
      transitionName: "pages"
    }
  },
  watch: {
    $route(from, to) {
      if (from.path === "/careers" && to.path === "/") {
        return (this.transitionName = "slideLeft")
      } else if (from.path === "/retail" && to.path === "/") {
        return (this.transitionName = "slideRight")
      } else {
        this.transitionName = "pages"
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>
