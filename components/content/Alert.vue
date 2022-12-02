<template>
  <p :class="['alert']">
    <slot />
  </p>
</template>

<script>
export default {
  name: "Alert",
}
</script>
