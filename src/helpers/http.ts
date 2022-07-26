import axios from 'axios';
import { useAuthStore } from '../stores/AuthStore';

export const HTTP = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
},
});


function authHeader() {
    const { user } = useAuthStore();
    const isLoggedIn = !!user?.jwt;

    if (isLoggedIn) {
        return { Authorization: `Bearer ${user.jwt}` };
    } else {
        return {};
    }
}

HTTP.interceptors.request.use(function (config) {
    console.log('asdasd', authHeader());
    
    config.headers = { ...config.headers, ...authHeader()}
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });