<template>
  <section v-editable="blok" class="textItem contentContainer-Center">
    <div class="textItem-Wrapper contentContainer-Center_Wrapper">
      <div class="section-Header">
        <h1 v-if="blok.title" class="title">{{ blok.title }}</h1>
      </div>
      <markdown v-if="blok.text" :input="blok.text" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("textItem", this.blok)
  }
}
</script>
