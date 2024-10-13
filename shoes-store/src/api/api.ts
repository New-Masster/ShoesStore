const API_URL = 'http://127.0.0.1:8000/api'; // URL da base da API(Dica do Wagne)

// Obtm Token 
const getToken = () => {
  return localStorage.getItem('token');
};

// Função para fazer requisições com Bearer Token
const fetchWithToken = async (url: string, options: RequestInit = {}) => {
  const token = getToken();
  
  if (token) {
    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
    };
  }

  const response = await fetch(url, options);
  return response.json();
};

// Funções para interagir com a API
export const api = {
  // Marcas
  getBrands: () => fetchWithToken(`${API_URL}/brands/`),
  createBrand: (data: any) => fetchWithToken(`${API_URL}/brands/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
  deleteBrand: (id: number) => fetchWithToken(`${API_URL}/brands/${id}/`, {
    method: 'DELETE',
  }),

  // Categorias
  getCategories: () => fetchWithToken(`${API_URL}/categories/`),
  createCategory: (data: any) => fetchWithToken(`${API_URL}/categories/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
  deleteCategory: (id: number) => fetchWithToken(`${API_URL}/categories/${id}/`, {
    method: 'DELETE',
  }),

  // Sapatos
  getShoes: () => fetchWithToken(`${API_URL}/shoes/`),
  createShoe: (data: any) => fetchWithToken(`${API_URL}/shoes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
  deleteShoe: (id: number) => fetchWithToken(`${API_URL}/shoes/${id}/`, {
    method: 'DELETE',
  }),
};
