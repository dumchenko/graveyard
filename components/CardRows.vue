<template>
  <div class="container px-4 pt-3">
    <div class="row row-cols-auto g-5">
      <div v-for="item in items" class="col">
        <div class="card col-md-4 text-center shadow-lg" style="width: 18rem;">
          <slot name="image" v-bind="item" />
          <div class="card-body col-sm">
            <h5 class="card-title">
              <slot name="title" v-bind="item" />
            </h5>
            <div class="card-text">
              <slot name="text" v-bind="item" />
            </div>
          </div>
          <a
              v-if="'_path' in item"
              class="btn btn-primary stretched-link"
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
