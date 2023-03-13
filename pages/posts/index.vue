<script setup>
// const { data: posts, error } = await useFetch(
//   // 'https://jsonplaceholder.typicode.com/posts/'
//   'https://jsonplaceholder.typicode.com/post/'
// );


// console.log(('error', error.value));

// const {
//   data: posts,
//   error,
//   refresh,
// } = await useFetch('https://jsonplaceholder.typicode.com/posts/');

// const { data: posts, error } = await useAsyncData('posts', () =>{
//   console.log('fetch'); //追加の処理
//   return $fetch('https://jsonplaceholder.typicode.com/posts/')
// });


const {
  data: posts,
  error,
  pending,
} = await useLazyFetch('https://jsonplaceholder.typicode.com/posts/');

</script>
<template>
  <div>
    <h1>Posts一覧</h1>
    <!-- <button @click="refresh()">再取得</button> -->

    <p v-if="error">{{ error }}</p>
    <p v-if="pending">Loading...</p>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>

      </li>
    </ul>
  </div>
</template>