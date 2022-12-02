<script setup>
const {page} = useContent()
const {path, params} = useRoute()
const pageID = params.slug[0]

let pathParts = path.split("/")
pathParts.shift()

const yamlPartials = await queryContent(...pathParts).where({_partial: true, _type: "yaml"}).find()
const data = Object.assign({}, ...yamlPartials)
const directions = await queryContent(...pathParts).where({
  title: "Directions",
  _partial: true,
  _type: "markdown"
}).findOne()

const buried = [
  ...(('buried' in page.value) ? page.value.buried : []),
  ...(await queryContent("people").where({grave: pageID}).find()),
]
</script>

<template>
  <div class="container text-center" id="start">
    <h1>{{ page.name }}</h1>
    <br>
  </div>

  <div v-if="directions">
    <h2 class="text-center">
      Как найти
    </h2>
    <div class="container">
      <ContentRenderer :value="directions"/>
    </div>
    <hr>
  </div>

  <div v-if="buried.length" class="container">
    <h2 class="text-center">
      Похоронены
    </h2>

    <CardRows :items="buried">
      <template #image="item">
        <img
            v-if="'photos' in item"
            :src="`/images/${item.title.toLowerCase()}/${item.photos[0].path}`"
            class="img-fluid rounded"
            >
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
    <Carousel :photos="page.photos" :id="pageID"/>
  </div>
</template>
