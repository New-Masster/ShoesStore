import api from './api';

// Função para listar Marcas
export const fetchBrands = async () => {
  const response = await api.get('brands/');
  return response.data;
};

// Função para criar Marca
export const createBrand = async (brandData: { name: string }) => {
  const response = await api.post('brands/', brandData);
  return response.data;
};

// Função para deletar Marca
export const deleteBrand = async (brandId: number) => {
  await api.delete(`brands/${brandId}/`);
};
