import { defineStore } from 'pinia';

import { HTTP } from '../helpers/http';
import axios from 'axios';

export const useWorkoutStore = defineStore({
  id: 'workout',
  state: () => ({
    workouts: [],
  }),
  actions: {
    async index() {
        this.workouts = await HTTP
        .get('/circuit-sets?populate=%2A')
        .then((response) => {
          console.log('Data: ', response.data);
          return response.data.data;
        })
        .catch(this.handleError);
    },

    handleError(error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
      } else {
        console.log('unexpected error: ', error);
      }

      return [];
    },
  },
});
