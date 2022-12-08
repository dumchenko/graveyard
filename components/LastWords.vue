<script lang="ts" setup>
const toggleModal = (context: PointerEvent) => {
  const parent: EventTarget = context.currentTarget.parentElement
  const modal = parent.querySelector('div.modal')
  if (modal.classList.contains('modal-active')) {
    modal.classList.remove('modal-active')
  } else {
    modal.classList.add('modal-active')
  }
}
</script>

<template>
  <div class="container">
    <h2 class="text-center">
      Последние слова от семьи
    </h2>

    <div class="columns-1 gap-6">
      <div v-for="item in items" class="column">
        <div class="card card-link btn btn-gray">
          <a @click="toggleModal">
            <h5 class="card-title">
              {{ ('relation' in item) ? `${item.author}, ${item.relation}` : item.author }}
            </h5>

            <div class="modal">
              <div class="text-left max-w-[90%] lg:max-w-[50%] text-xs sm:text-base lg:text-xl">
                <ContentRenderer :value="item" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LastWords',
  props: {
    items: {
      type: Array < {
        author: String,
        relation: String,
      } >,
      required: true
    }
  }
}
</script>
