<template>
  <div>
    <Html lang="ja" />

    <Navbar />
    <slot />
  </div>
</template>
<script setup>
useHead({
  // titleTemplate: (title) => {
  //   return title ? `${title} - Nuxt 3 basic` : 'Nuxt 3 basic';
  // },
  titleTemplate: '%s - Nuxt 3 basic',

});
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
