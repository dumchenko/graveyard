<script setup lang="ts">
const slots = useSlots()
</script>

<template>
  <div class="container mx-auto">
    <div class="columns-auto gap-6">
      <div v-for="item in items" class="column">
        <div
          :class="{card: true, 'card-link': !disableLinks}"
        >
          <slot name="image" v-bind="item" />
          <p v-if="!!slots.title" class="card-title">
            <slot name="title" v-bind="item" />
          </p>
          <div v-if="!!slots.text" class="card-text">
            <slot name="text" v-bind="item" />
          </div>
          <NuxtLink
            v-if="'_path' in item && !disableLinks"
            class="btn stretched-link"
            :to="`${item._path}`"
          >
            Подробнее...
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CardRows',
  props: {
    items: {
      type: Array < {
        _path: String,
      } >,
      required: true
    },
    disableLinks: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>
