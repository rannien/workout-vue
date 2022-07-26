<script setup lang="ts">
import { useWorkoutStore } from '../stores/WorkoutStore';

const workoutStore = useWorkoutStore();

workoutStore.index();
</script>

<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
      >
        <div
          v-for="workout in workoutStore.workouts"
          :key="workout.id"
          class="group relative p-4 bg-slate-100 border-1 rounded-md"
        >
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ workout.attributes.exercise.data.attributes.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                {{ workout.attributes.circuit.data.attributes.name }}
              </p>
            </div>
            <p class="text-sm font-medium text-gray-900">
              {{ workout.attributes.target_repetition }}
              {{ workout.attributes.target_repetition_type }}
            </p>
          </div>
        </div>

        <!-- More products... -->
      </div>
    </div>
  </div>
</template>
