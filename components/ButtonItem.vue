<template>
  <section v-editable="blok" class="buttonItem contentContainer-Center">
    <div class="buttonItem-Wrapper contentContainer-Center_Wrapper">
      <a class="button" :href="blok.hyperlink.url" target="_blank">
        <div class="button-Background"></div>
        <div class="button-Text">{{ blok.button_text }}</div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log("button item", this.blok)
  }
}
</script>
