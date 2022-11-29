<template>
  <default-layout>
    <div class="container text-center" id="start">
      <h1 class="display-3">{{ page.name }}</h1>
    </div>

    <div v-if="'maps' in page" class="container">
      <h1 class="display-4 text-center">
        Местоположение
      </h1>
      <p>
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
      </p>

      <div class="row">
        <div v-if="'yandex' in page.maps" class="collapse ratio ratio-4x3" id="yandexmaps">
          <iframe v-bind:src="page.maps.yandex" allowfullscreen="true"></iframe>
        </div>
        <div v-if="'google' in page.maps" class="collapse ratio ratio-4x3" id="googlemaps">
          <iframe v-bind:src="page.maps.google" allowfullscreen="true"></iframe>
        </div>
      </div>
    </div>

    <div class="container">
      <p class="display-4 text-center">
        Могилы
      </p>

      <div class="container px-4 pt-3">
        <div class="row row-cols-auto g-3">
          <div v-for="grave in graves" class="col">
            <div class="card col-md-4 text-center" style="width: 18rem;">
              <div class="card-body col-sm">
                <h5 class="card-title">
                  {{ grave.name }}
                </h5>
              </div>
              <a class="btn btn-primary stretched-link" :href="`${grave._path}#start`">
                Подробнее...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr v-if="'photos' in page" />

    <div v-if="'photos' in page" class="container px-4 pt-3">
      <p class="display-4 text-center">
        Фотографии
      </p>

      <div class="row row-cols-auto g-5">
        <div v-for="photo in page.photos" class="col">
          <figure class="figure">
            <img :src="photo.path" class="figure-img img-fluid rounded" style="max-height: 90vh; width: 35rem;">
            <figcaption class="figure-caption text-center font-weight-bold">
              {{ photo.caption }}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </default-layout>
</template>

<script setup>
import DefaultLayout from "~/layouts/default.vue";

const {path} = useRoute()
var pathParts = path.split("/")
pathParts.shift()

const {page} = useContent()
const yamlPartials = await queryContent(...pathParts).where({_partial: true, _type: "yaml"}).find()
const data = Object.assign({}, ...yamlPartials);
const pageID = useRoute().params.slug[0]
const graves = await queryContent("graves").where({graveyard: pageID}).find()
</script>
