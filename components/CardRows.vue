<template>
  <div class="container mx-auto">
    <div class="columns-auto gap-10">
      <div v-for="item in items" class="column">
          <div class="card">
            <slot name="image" v-bind="item"/>
            <h5 class="card-title">
              <slot name="title" v-bind="item"/>
            </h5>
            <div class="card-text">
              <slot name="text" v-bind="item"/>
            </div>
            <a
                v-if="'_path' in item"
                class="btn stretched-link"
                :href="`${item._path}#start`"
            >
              Подробнее...
            </a>
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
  },
}
</script>
