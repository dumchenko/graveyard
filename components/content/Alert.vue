<template>
  <p :class="['alert']">
    <slot />
  </p>
</template>

<script lang="ts">
export default {
  name: 'Alert'
}
</script>
