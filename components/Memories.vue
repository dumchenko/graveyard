<template>
  <div class="container bg-body rounded d-grid gap-4">
    <h3 class="text-center display-4">
      Воспоминания от семьи
    </h3>

    <div
        v-for="item in items"
        class="container bg-transparent shadow border p-4"
    >
      <div>
        <h2 class="text-center">
          {{ item.title }}
        </h2>
        <ContentRenderer :value="item"/>
      </div>
      <figcaption class="blockquote-footer text-end text-neutral-500">
        {{ ('relation' in item) ? `${item.author}, ${item.relation}` : item.author }}
      </figcaption>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Memories",
  props: {
    items: {
      type: Array < {
        author: String,
        relation: String,
        title: String,
      } >,
      required: true,
    },
  },
}
</script>
