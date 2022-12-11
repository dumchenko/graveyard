<script setup lang="ts">
import { LayoutKey } from '#build/types/layouts'

const { params: { slug } } = useRoute()

let layout: LayoutKey = 'index'
if (slug !== '' && slug.length > 0) {
  switch (slug[0]) {
    case 'people':
      layout = 'person'
      break
    case 'graveyards':
      layout = 'graveyard'
      break
    case 'graves':
      layout = 'grave'
      break
  }
}
</script>

<template>
  <div>
    <NavBar />
    <div class="container mx-auto">
      <NuxtLayout :name="layout">
        <ContentDoc />
      </NuxtLayout>
    </div>
    <Footer />
  </div>
</template>
