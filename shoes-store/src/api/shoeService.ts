import api from './api';

// Função para listar Sapatos
export const fetchShoes = async () => {
  const response = await api.get('shoes/');
  return response.data;
};

// Função para criar Sapato
export const createShoe = async (shoeData: { name: string; description: string }) => {
  const response = await api.post('shoes/', shoeData);
  return response.data;
};

// Função para deletar Sapato
export const deleteShoe = async (shoeId: number) => {
  await api.delete(`shoes/${shoeId}/`);
};
