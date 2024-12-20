// src/axiosConfig.ts
import axios from 'axios';

// Crie uma instância do Axios
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

// Interceptor para adicionar o token de autenticação
api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
