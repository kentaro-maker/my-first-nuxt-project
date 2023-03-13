<template>
  <div>
    <button>Update layout</button>
    <p>Count: {{ counter }}</p>
    <div><button @click="counter++">+</button></div>
  </div>
</template>
<script setup>
const counter = useCounter(0);

const title = ref('Aboutページ');
const description = ref('Aboutページ');
useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description,
    },
  ],
});
</script>