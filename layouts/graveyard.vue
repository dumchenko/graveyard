<script setup lang="ts">
const { path } = useRoute()
const pathParts = path.split('/')
pathParts.shift()

const { page } = useContent()
const pageID = useRoute().params.slug[0]
const graves = await queryContent('graves').where({ graveyard: pageID }).find()
</script>

<template>
  <div>
    <div class="container text-center">
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
            :src="page.maps.yandex"
            class="aspect-[4/3] w-full"
            loading="lazy"
            allowfullscreen
          />
          <iframe
            v-if="'google' in page.maps && !googleHidden"
            :src="page.maps.google"
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
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      googleHidden: true,
      yandexHidden: true
    }
  },
  methods: {
    toggleGoogle () {
      this.googleHidden = !this.googleHidden
      this.yandexHidden = true
    },
    toggleYandex () {
      this.yandexHidden = !this.yandexHidden
      this.googleHidden = true
    }
  }
}
</script>
