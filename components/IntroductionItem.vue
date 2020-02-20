<template>
  <section v-editable="blok" class="item introductionItem">
    <div class="introductionItem-Container">
      <div class="introductionItem-Left">
        <h1>{{ blok.title }}</h1>
        <markdown :input="blok.text" />
      </div>
      <div class="introductionItem-Right">
        <div class="aspectRatioBox">
          <img :src="blok.image" alt />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>
