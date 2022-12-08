<script lang="ts">
export default defineNuxtRouteMiddleware((to) => {
  if (to.path.endsWith('.html')) {
    return navigateTo(to.path.replace(/\.html$/, ''))
  }
})
</script>
