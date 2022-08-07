<script setup lang="ts">
import { ref } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { useWorkoutStore } from '../stores/WorkoutStore';
import WorkoutItem from '../components/WorkoutItem.vue';

const workoutStore = useWorkoutStore();

workoutStore.index();

const categories = ref(['Week 1', 'Week 2', 'Week 3']);
</script>

<template>
  <div class="bg-white">
    <TabGroup>
      <TabList class="flex space-x-1 rounded-xl bg-gray-600 p-1">
        <Tab
          v-for="category in categories"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 ',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow font-bold text-indigo-700'
                : 'text-white hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="category in categories"
          :key="category"
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
          {{ category }}
          <div
            class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
          >
            <div
              v-for="workout in workoutStore.workouts"
              :key="workout.id"
              class="group relative p-4 bg-slate-100 border-1 rounded-md"
            >
              <WorkoutItem :workout="workout" />
            </div>

            <!-- More products... -->
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>

    <div
      class="max-w-2xl mx-auto px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8"
    ></div>
  </div>
</template>
