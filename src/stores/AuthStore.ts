import { defineStore } from 'pinia';

import { HTTP } from '../helpers/http';
import router from '../router';
import axios from 'axios';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null,
  }),
  actions: {
    async login(email, password) {
      await HTTP
        .post('/auth/local', {
          identifier: email,
          password: password,
        })
        .then((response) => {
          // Handle success.
          console.log('Well done!');
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);

          // update pinia state
          this.user = response.data.user;
          this.user.jwt = response.data.jwt;

          // store user details and jwt in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(this.user));

          // redirect to previous url or default to home page
          router.push(this.returnUrl || '/dashboard');
        })
        .catch(this.handleError);
    },

    handleError(error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        this.logout();
      } else {
        console.log('unexpected error: ', error);
        return Promise.reject(error);
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/login');
    },
  },
});
