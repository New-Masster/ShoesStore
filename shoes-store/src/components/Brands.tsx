import React, { useEffect, useState } from 'react';
import { api } from '../api/api'; 

const Brands: React.FC = () => {
  const [brands, setBrands] = useState<any[]>([]);
  const [newBrand, setNewBrand] = useState('');

  const loadBrands = async () => {
    try {
      const data = await api.getBrands();
      setBrands(data);
    } catch (error) {
      console.error('Erro ao carregar marcas:', error);
    }
  };

  const handleAddBrand = async () => {
    if (!newBrand) return;

    try {
      const createdBrand = await api.createBrand({ name: newBrand });
      loadBrands(); // Atualiza
      setNewBrand('');
    } catch (error) {
      console.error('Erro ao adicionar marca:', error);
    }
  };

  const handleDeleteBrand = async (id: number) => {
    try {
      await api.deleteBrand(id);
      loadBrands(); // Atualiza
    } catch (error) {
      console.error('Erro ao deletar marca:', error);
    }
  };

  useEffect(() => {
    loadBrands(); // Marcas
  }, []);

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Gerenciar Marcas</h2>
        <button onClick={loadBrands} className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors">
          Refresh
        </button>
      </div>

      <div className="flex mb-4">
        <input
          type="text"
          value={newBrand}
          onChange={(e) => setNewBrand(e.target.value)}
          placeholder="Adicionar uma nova marca"
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          onClick={handleAddBrand}
          className="bg-blue-500 text-white p-2 rounded ml-2 hover:bg-blue-600 transition-colors"
        >
          Adicionar Marca
        </button>
      </div>

      <ul className="list-disc pl-5">
        {brands.map((brand) => (
          <li key={brand.id} className="flex justify-between items-center mb-2 p-2 border-b">
            <span className="text-lg">{brand.id} - {brand.name}</span> {/* Exibe o ID antes do nome */}
            <button
              onClick={() => handleDeleteBrand(brand.id)}
              className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition-colors"
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brands;
