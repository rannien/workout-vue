<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  workout: Object,
});

const editing = ref(false);
const weight = ref(0);

function update(e) {
  editing.value = false;
}
</script>

<template>
  <div class="flex flex-col" @click="editing = true">
    <div class="flex flex-row">
      <div class="basis-1/2 lg:basis-2/3">
        <h3 class="text-l text-gray-700">
          <a href="#">
            <strong>{{
              workout.attributes.exercise.data.attributes.name
            }}</strong>
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          {{ workout.attributes.circuit.data.attributes.name }}
        </p>
      </div>
      <div
        class="text-sm font-medium text-gray-900 text-right basis-1/2 lg:basis-1/3"
      >
        <div>
          {{ workout.attributes.target_repetition }}
          {{ workout.attributes.target_repetition_type }}
        </div>
        <div v-if="!editing">{{ weight }} kg</div>
        <div>
          <input
            id="{{ workout.id }}"
            type="number"
            @change="update"
            @blur="update"
            v-model="weight"
            v-if="editing"
            @vnode-mounted="({ el }) => el.focus()"
            class="mt-1 px-3 block w-full py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </div>
      </div>
    </div>
  </div>
</template>
