<template>
  <NavBar/>
  <div class="container mx-auto">
    <NuxtLayout>
      <ContentDoc/>
    </NuxtLayout>
  </div>
  <Footer/>
</template>

<script setup>
definePageMeta({
  layout: "person",
  middleware: [
    'redirect-html',
  ],
})
</script>
