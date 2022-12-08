<template>
  <div>
    <NavBar />
    <div class="container mx-auto">
      <NuxtLayout>
        <ContentDoc />
      </NuxtLayout>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'person',
  middleware: [
    'redirect-html'
  ]
})
</script>
