import api from './api';

// Função para listar Categorias
export const fetchCategories = async () => {
  const response = await api.get('categories/');
  return response.data;
};

// Função para criar Categoria
export const createCategory = async (categoryData: { name: string }) => {
  const response = await api.post('categories/', categoryData);
  return response.data;
};

// Função para deletar Categoria
export const deleteCategory = async (categoryId: number) => {
  await api.delete(`categories/${categoryId}/`);
};
