<script lang="ts" setup>
const toggleModal = (context: PointerEvent) => {
  const parent: EventTarget = context.currentTarget.parentElement
  const modal = parent.querySelector("div.modal")
  if (modal.classList.contains("modal-active")) {
    modal.classList.remove("modal-active")
  } else {
    modal.classList.add("modal-active")
  }
}
</script>

<template>
  <div class="container">
    <h2 class="text-center">
      Последние слова от семьи
    </h2>

    <div class="mx-auto columns-1 gap-6">
      <div v-for="item in items" class="column">
        <div class="card">
          <a @click="toggleModal">
            <h5 class="card-title">
              {{ ('relation' in item) ? `${item.author}, ${item.relation}` : item.author }}
            </h5>

            <div class="modal text-left">
              <ContentRenderer :value="item"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "LastWords",
  props: {
    items: {
      type: Array < {
        author: String,
        relation: String,
      } >,
      required: true,
    },
  },
}
</script>
