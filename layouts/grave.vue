<script setup>
import DefaultLayout from "~/layouts/default.vue";

const {page} = useContent()
const {path, params} = useRoute()
const pageID = params.slug[0]

var pathParts = path.split("/")
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
  <default-layout>
    <div class="container text-center" id="start">
      <h1 class="display-3">{{ page.name }}</h1>
    </div>

    <div v-if="directions">
      <p class="display-4 text-center">
        Как найти
      </p>
      <div class="container">
        <ContentRenderer :value="directions"/>
      </div>
      <hr>
    </div>

    <div v-if="buried.length" class="container">
      <p class="display-4 text-center">
        Похоронены
      </p>

      <div class="container px-4 pt-3">
        <div class="row row-cols-auto g-3">
          <div v-for="person in buried" class="col">
            <div class="card col-md-4 text-center" style="width: 18rem;">
              <img v-if="'photos' in person" :src="`/images/${person.title.toLowerCase()}/${person.photos[0].path}`"
                   class="img-fluid rounded">
              <div class="card-body col-sm">
                <h5 class="card-title">
                  {{ person.name }}
                </h5>
                <div class="card-text">
                  {{ person.birthDate }} - {{ person.deathDate }}
                </div>
                <blockquote v-if="'epitaph' in person" class="blockquote">
                  <br>
                  <small class="text-muted">
                    <em>
                      {{ person.epitaph }}
                    </em>
                  </small>
                </blockquote>
              </div>
              <a
                  v-if="'_path' in person"
                  class="btn btn-primary stretched-link"
                  :href="`${person._path}#start`"
              >
                Подробнее...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="'photos' in page" class="container">
      <hr>
      <p class="display-4 text-center">
        Фотографии
      </p>
      <Carousel :photos="page.photos" :id="pageID"/>
    </div>
  </default-layout>
</template>
