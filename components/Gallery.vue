<script setup lang="ts">
const toggleModal = (context: PointerEvent) => {
  const currentTarget = context.currentTarget
  if (currentTarget === null) {
    return
  }

  const parent: HTMLElement = currentTarget.parentElement
  const modal = parent.querySelector('div.modal')
  if (modal === null) {
    return
  }

  if (modal.classList.contains('modal-active')) {
    modal.classList.remove('modal-active')
  } else {
    modal.classList.add('modal-active')
  }
}
</script>

<template>
  <CardRows :items="photos">
    <template #image="item">
      <a @click="toggleModal">
        <nuxt-picture
          :class="{'rounded-b-2xl': !('caption' in item)}"
          :src="`/images/${id}/${item.path}`"
          loading="lazy"
        />

        <div class="modal">
          <nuxt-picture
            :src="`/images/${id}/${item.path}`"
            loading="lazy"
          />
        </div>
      </a>
    </template>

    <template #text="item">
      <div v-if="'caption' in item" class="text-center text-sm italic">
        {{ item.caption }}
      </div>
    </template>
  </CardRows>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'Gallery',
  props: {
    id: String,
    photos: Array< {
      path: String,
      caption: String,
    } >
  }
})
</script>
