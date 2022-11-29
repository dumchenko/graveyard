<template>
  <p :class="['alert', `alert-${type}`]">
    <slot />
  </p>
</template>

<script>
export default {
  name: "Alert",
  props: [
      "type",
  ],
}
</script>
