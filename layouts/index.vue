<script setup>
const people = await queryContent("people").where({_partial: false}).find()
const graveyards = await queryContent("graveyards").where({_partial: false}).find()
</script>

<template>
  <div v-if="people.length">
    <h1 class="text-center">
      Люди, которых мы потеряли
    </h1>

    <CardRows :items="people">
      <template #image="item">
        <img :src="`/images/${item.title.toLowerCase()}/${item.photos[0].path}`">
      </template>

      <template #title="item">
        {{ item.name }}
      </template>

      <template #text="item">
        {{ item.birthDate }} - {{ item.deathDate }}

        <blockquote v-if="'epitaph' in item">
          {{ item.epitaph }}
        </blockquote>
      </template>
    </CardRows>
  </div>

  <div v-if="graveyards.length">
    <hr>

    <h1 class="text-center">
      Кладбища
    </h1>

    <CardRows :items="graveyards">
      <template #title="item">
        {{ item.name }}
      </template>
    </CardRows>
  </div>
</template>
