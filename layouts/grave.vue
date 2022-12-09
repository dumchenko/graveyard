<script setup lang="ts">
const { page } = useContent()
const { path, params } = useRoute()
const pageID = params.slug[0]

const pathParts = path.split('/')
pathParts.shift()

const directions = await queryContent(...pathParts).where({
  title: 'Directions',
  _partial: true,
  _type: 'markdown'
}).findOne()

const buried = [
  ...(('buried' in page.value) ? page.value.buried : []),
  ...(await queryContent('people').where({ grave: pageID }).find())
]
</script>

<template>
  <div>
    <div class="container text-center">
      <h1>{{ page.name }}</h1>
      <br>
    </div>

    <div v-if="directions">
      <h2 class="text-center">
        Как найти
      </h2>
      <div class="container">
        <ContentRenderer :value="directions" />
      </div>
      <hr>
    </div>

    <div v-if="buried.length" class="container">
      <h2 class="text-center">
        Похоронены
      </h2>

      <CardRows :items="buried">
        <template #image="item">
          <NuxtPicture
            v-if="'photos' in item"
            format="webp"
            quality="80"
            :src="`/images/${item.title.toLowerCase()}/${item.photos[0].path}`"
          />
        </template>

        <template #title="item">
          {{ item.name }}
        </template>

        <template #text="item">
          {{ item.birthDate }} - {{ item.deathDate }}

          <blockquote v-if="'epitaph' in item" class="blockquote">
            <br>
            <small class="text-muted">
              <em>
                {{ item.epitaph }}
              </em>
            </small>
          </blockquote>
        </template>
      </CardRows>
    </div>

    <div v-if="'photos' in page" class="container">
      <hr>
      <h2 class="text-center">
        Фотографии
      </h2>
      <Gallery :id="page.title.toLowerCase()" :photos="page.photos" />
    </div>
  </div>
</template>
