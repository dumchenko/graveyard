<template>
  <div class="container">
    <h2 class="text-center">
      Воспоминания от семьи
    </h2>

    <div class="columns-1 gap-6">
      <div
        v-for="item in items"
        class="card p-4 md:max-w-[80%] lg:max-w-[50%]"
      >
        <div class="text-left">
          <h2 class="text-center">
            {{ item.title }}
          </h2>
          <ContentRenderer :value="item" />
        </div>
        <figcaption class="blockquote-footer text-end text-neutral-500">
          {{ ('relation' in item) ? `${item.author}, ${item.relation}` : item.author }}
        </figcaption>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Memories',
  props: {
    items: {
      type: Array < {
        author: String,
        relation: String,
        title: String,
      } >,
      required: true
    }
  }
}
</script>
