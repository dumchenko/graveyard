<template>
  <default-layout>
    <div class="text-center">
      <p class="display-3">
        Люди, которых мы потеряли
      </p>
    </div>

    <div class="container px-4 pt-3">
      <div class="row row-cols-auto g-5">
        <div v-for="person in people" class="col">
          <div class="card col-md-4 text-center shadow-lg" style="width: 18rem;">
            <img :src="`/images/${person.title.toLowerCase()}/${person.photos[0].path}`" class="img-fluid rounded">
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
                class="btn btn-primary stretched-link"
                :href="`${person._path}#start`"
            >
              Подробнее...
            </a>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <div class="text-center">
      <p class="display-3">
        Кладбища
      </p>
    </div>

    <div class="container px-4 pt-3">
      <div class="row row-cols-auto g-5">
        <div v-for="graveyard in graveyards" class="col">
          <div class="card col-md-4 text-center shadow-lg" style="width: 18rem;">
            <div class="card-body col-sm">
              <h5 class="card-title">
                {{ graveyard.name }}
              </h5>
              <a
                  class="btn btn-primary stretched-link"
                  :href="`${graveyard._path}#start`"
              >
                Подробнее...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </default-layout>
</template>

<script setup>
import DefaultLayout from "~/layouts/default.vue";

const people = await queryContent("people").where({_partial: false}).find()
const graveyards = await queryContent("graveyards").where({_partial: false}).find()
</script>
