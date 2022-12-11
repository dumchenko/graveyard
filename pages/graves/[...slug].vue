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
  layout: 'grave'
})
</script>
