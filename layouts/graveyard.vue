<script setup>
const {path} = useRoute()
let pathParts = path.split("/")
pathParts.shift()

const {page} = useContent()
const yamlPartials = await queryContent(...pathParts).where({_partial: true, _type: "yaml"}).find()
const data = Object.assign({}, ...yamlPartials);
const pageID = useRoute().params.slug[0]
const graves = await queryContent("graves").where({graveyard: pageID}).find()
</script>

<template>
  <div class="container text-center" id="start">
    <h1 class="display-3">{{ page.name }}</h1>
    <br>
  </div>

  <div v-if="'maps' in page" class="container">
    <h1 class="display-4 text-center">
      Местоположение
    </h1>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <button
              v-if="'yandex' in page.maps"
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#yandexmaps"
              aria-expanded="false"
              aria-controls="yandexmaps">
            Яндекс Карты
          </button>
        </div>
        <div class="col">
          <button
              v-if="'google' in page.maps"
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#googlemaps"
              aria-expanded="false"
              aria-controls="googlemaps">
            Google Maps
          </button>
        </div>
      </div>
    </div>

    <div class="row">
      <div v-if="'yandex' in page.maps" class="collapse ratio ratio-4x3" id="yandexmaps">
        <iframe v-bind:src="page.maps.yandex" loading="lazy" allowfullscreen></iframe>
      </div>
      <div v-if="'google' in page.maps" class="collapse ratio ratio-4x3" id="googlemaps">
        <iframe v-bind:src="page.maps.google" loading="lazy" allowfullscreen></iframe>
      </div>
    </div>

    <br>
  </div>

  <div class="container">
    <hr>
    <p class="display-4 text-center">
      Могилы
    </p>

    <CardRows :items="graves">
      <template #title="item">
        {{ item.name }}
      </template>
    </CardRows>
  </div>


  <div v-if="'photos' in page" class="container px-4 pt-3">
    <hr>
    <p class="display-4 text-center">
      Фотографии
    </p>

    <Carousel :photos="page.photos" :id="pageID"/>
  </div>
</template>
