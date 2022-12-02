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
    <h1>{{ page.name }}</h1>
    <br>
  </div>

  <div v-if="'maps' in page" class="container">
    <h2 class="text-center">
      Местоположение
    </h2>
    <div class="container">
      <div class="columns-auto gap-20">
        <button
            v-if="'yandex' in page.maps"
            class="btn"
            type="button"
            @click="toggleYandex"
        >
          Яндекс Карты
        </button>
        <button
            v-if="'google' in page.maps"
            class="btn"
            type="button"
            @click="toggleGoogle"
        >
          Google Maps
        </button>
      </div>

      <div class="flex mx-auto justify-center max-w-[80%]">
        <iframe
            v-if="'yandex' in page.maps && !yandexHidden"
            v-bind:src="page.maps.yandex"
            class="aspect-[4/3] w-full"
            loading="lazy"
            allowfullscreen
        />
        <iframe
            v-if="'google' in page.maps && !googleHidden"
            v-bind:src="page.maps.google"
            class="aspect-[4/3] w-full"
            loading="lazy"
            allowfullscreen
        />
      </div>

    </div>

    <br>
  </div>

  <div class="container">
    <hr>
    <h2 class="text-center">
      Могилы
    </h2>

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

<script>
export default {
  data() {
    return {
      googleHidden: true,
      yandexHidden: true,
    }
  },
  methods: {
    toggleGoogle() {
      this.googleHidden = !this.googleHidden
      this.yandexHidden = true
    },
    toggleYandex() {
      this.yandexHidden = !this.yandexHidden
      this.googleHidden = true
    },
  }
}
</script>
