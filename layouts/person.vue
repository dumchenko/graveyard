<script setup>
import Carousel from "~/components/Carousel.vue";
import LastWords from "~/components/LastWords.vue";

const {path, params} = useRoute()
let pathParts = path.split("/")
pathParts.shift()
const pageID = params.slug[0]

const {page} = useContent()
const yamlPartials = await queryContent(...pathParts).where({_partial: true, _type: "yaml"}).find()
const data = Object.assign({}, ...yamlPartials);
const lastWords = await queryContent(...pathParts).where({
  _partial: true,
  _dir: "_last_words",
  _type: "markdown"
}).find()
const memories = await queryContent(...pathParts).where({_partial: true, _dir: "_memories", _type: "markdown"}).find()
</script>

<template>
  <div class="container text-center" id="start">
    <h1 class="display-3">{{ page.name }}</h1>
    <p class="display-6 text-muted">{{ page.birthDate }} - {{ page.deathDate }}</p>
    <br>
  </div>

  <Carousel v-if="page.photos" :photos="page.photos" :id="pageID"/>
  <LastWords v-if="lastWords" :items="lastWords"/>
  <Memories v-if="memories" :items="memories"/>
</template>
