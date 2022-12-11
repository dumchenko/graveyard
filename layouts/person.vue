<script lang="ts" setup>
const { path, params } = useRoute()
const pathParts = path.split('/')
pathParts.shift()
const pageID = params.slug[1]

const { page } = useContent()
const { data: lastWords } = await useAsyncData('lastWords', () => queryContent('', ...pathParts).where({
  _partial: true,
  _dir: '_last_words',
  _type: 'markdown'
}).find(), { lazy: true, default: () => [] })
const { data: memories } = await useAsyncData('memories', () => queryContent('', ...pathParts).where({
  _partial: true,
  _dir: '_memories',
  _type: 'markdown'
}).find(), { lazy: true, default: () => [] })

useContentHead(page)
</script>

<template>
  <div>
    <div class="container text-center">
      <h1 class="display-3">
        {{ page.title }}
      </h1>
      <p class="display-6 text-muted">
        {{ page.birthDate }} - {{ page.deathDate }}
      </p>
      <br>
    </div>

    <Gallery v-if="page.photos" :id="pageID" :photos="page.photos" />
    <LastWords v-if="lastWords" :items="lastWords" />
    <Memories v-if="memories" :items="memories" />
  </div>
</template>
