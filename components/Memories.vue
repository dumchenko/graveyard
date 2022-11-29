<template>
  <div class="container bg-body rounded d-grid gap-4">
    <h3 class="text-center display-4">
      Воспоминания от семьи
    </h3>

    <div
        v-for="item in items"
        class="container bg-transparent shadow border p-4"
    >
      <figure>
        <blockquote>
          <p class="lead text-center display-6">
            {{ item.title }}
          </p>
          <ContentRenderer :value="item" />
        </blockquote>
        <figcaption class="blockquote-footer text-end">
          {{ ('relation' in item) ? `${item.author}, ${item.relation}` : item.author }}
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "Memories",
  props: [
      "items",
  ]
}
</script>
