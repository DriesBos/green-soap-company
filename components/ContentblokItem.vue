<template>
  <div>
    <h1>{{ blok.title }}</h1>
    <p>{{ blok.subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    // console.log(this.blok)
  }
}
</script>
