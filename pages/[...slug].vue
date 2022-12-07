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
  layout: "index",
  middleware: [
    "redirect-html",
  ],
})
</script>
