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
  layout: "grave",
  middleware: [
    'redirect-html',
  ],
})
</script>
