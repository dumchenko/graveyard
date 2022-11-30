<template>
  <div class="container bg-body rounded d-grid gap-5">
    <h3 class="text-center display-4">
      Последние слова от семьи
    </h3>

    <nav class="p2">
      <div class="nav nav-tabs bg-transparent flex-column d-grid gap-3" id="nav-tab" role="tablist">
        <button
            v-for="item in items"
            class="nav-link border rounded shadow p-2"
            v-bind:id="`nav-${ item.title }-tab`"
            data-bs-toggle="tab"
            v-bind:data-bs-target="`#${ item.title }-tab`"
            type="button"
            role="tab"
            v-bind:aria-controls="`nav-${ item.title }`"
            aria-selected="false"
            >
          {{ ('relation' in item) ? `${item.author}, ${item.relation}` : item.author }}
        </button>
      </div>
    </nav>

    <div class="tab-content">
      <div
          v-for="item in items"
          class="tab-pane fade"
          :id="`${item.title}-tab`"
          role="tabpanel"
          v-bind:aria-labelledby="`nav-${ item.title }-tab`">
        <div class="fw-light">
          <ContentRenderer :value="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastWords",
  props: {
    items: {
      type: Array[Object],
      required: true,
    },
  },
}
</script>
