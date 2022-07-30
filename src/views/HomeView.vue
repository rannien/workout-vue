<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/AuthStore';

const count = ref(0);

const { user } = useAuthStore();
</script>

<template>
  <div>
    <h1 class="text-3xl">
      Hello <strong>{{ user?.username }}!</strong>
    </h1>

    <button type="button" @click="count++">count is: {{ count }}</button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
