<script setup>
const slots = useSlots()
</script>

<template>
  <div class="container mx-auto">
    <div class="columns-auto gap-6">
      <div v-for="item in items" class="column">
          <div
              :class="{card: true, 'card-link': !disableLinks}"
          >
            <slot name="image" v-bind="item"/>
            <h5 v-if="!!slots.title" class="card-title">
              <slot name="title" v-bind="item"/>
            </h5>
            <div v-if="!!slots.text" class="card-text">
              <slot name="text" v-bind="item"/>
            </div>
            <LazyNuxtLink
                v-if="'_path' in item && !disableLinks"
                class="btn stretched-link"
                v-bind:to="`${item._path}#start`"
                prefetch
            >
              Подробнее...
            </LazyNuxtLink>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardRows",
  props: {
    items: {
      type: Array[Object],
      required: true,
    },
    disableLinks: {
      type: Boolean,
      default: false,
      required: false,
    }
  },
}
</script>
