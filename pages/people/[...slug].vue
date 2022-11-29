<template>
  <NavBar/>
  <main class="page-content py-5 flex-shrink-0" aria-label="Content">
    <NuxtLayout>
      <ContentDoc/>
    </NuxtLayout>
  </main>
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
