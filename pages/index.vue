    <script setup>
    // const { $hello } = useNuxtApp();
    const task = ref('');

    const { data: tasks, refresh  } = useFetch('/api/task');

    const addTask = () => {
      console.log(task.value);
      const { data } = useFetch('/api/task', {
        method: 'post',
        body: { task: task.value },
      });
      refresh();
      task.value = '';
    };
    
    const { count, inc, dec } = useCounter(100);
    </script>
<template>
  <div>
    <h1 class="text-4xl">Main Page</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.task }}</li>
    </ul>
    <form @submit.prevent="addTask">
      <div>
        <input v-model="task" />
      </div>
      <div>
        <button type="submit">タスクを登録</button>
      </div>
    </form>
    <!-- <h2>{{ $hello('World') }}</h2> -->

    <div>Count:{{ count }}</div>
    <div>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
  </div>
</template>
