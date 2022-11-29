<script>
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.endsWith(".html")) {
    return navigateTo(to.path.replace(/\.html$/, ""))
  }
})
</script>
