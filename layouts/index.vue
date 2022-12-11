<script setup lang="ts">
const { data: people } = useAsyncData('people', () => queryContent('people').where({ _partial: false }).find(), {
  lazy: true,
  default: () => []
})
const { data: graveyards } = useAsyncData('graveyards', () => queryContent('graveyards').where({ _partial: false }).find(), {
  lazy: true,
  default: () => []
})

useHead({
  title: 'Место упокоения семьи Думченко'
})
</script>

<template>
  <div>
    <div v-if="people.length">
      <h1 class="text-center">
        Люди, которых мы потеряли
      </h1>

      <CardRows :items="people">
        <template #image="item">
          <img :src="`/images/${item._path.split('/').slice(-1)}/${item.photos[0].path}`" loading="lazy">
        </template>

        <template #title="item">
          {{ item.title }}
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
          {{ item.title }}
        </template>
      </CardRows>
    </div>
  </div>
</template>
