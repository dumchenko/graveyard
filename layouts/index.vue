<script setup>
const people = await queryContent("people").where({_partial: false}).find()
const graveyards = await queryContent("graveyards").where({_partial: false}).find()
</script>

<template>
  <div v-if="people.length">
    <div class="text-center">
      <p class="display-3">
        Люди, которых мы потеряли
      </p>
    </div>

    <CardRows :items="people">
      <template #image="item">
        <img :src="`/images/${item.title.toLowerCase()}/${item.photos[0].path}`" class="img-fluid rounded">
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

  <div v-if="graveyards.length">
    <hr>

    <div class="text-center">
      <p class="display-3">
        Кладбища
      </p>
    </div>

    <CardRows :items="graveyards">
      <template #title="item">
        {{ item.name }}
      </template>
    </CardRows>
  </div>
</template>
