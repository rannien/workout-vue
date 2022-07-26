import axios from 'axios';
import { useAuthStore } from '../stores/AuthStore';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export const HTTP = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {...headers, ...authHeader},
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