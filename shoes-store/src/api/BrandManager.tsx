import React, { useEffect, useState } from 'react';
import { fetchBrands, createBrand, deleteBrand } from '../api/brandService';

const BrandManager: React.FC = () => {
  const [brands, setBrands] = useState<{ id: number; name: string }[]>([]);
  const [newBrand, setNewBrand] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const loadBrands = async () => {
    try {
      const fetchedBrands = await fetchBrands();
      setBrands(fetchedBrands);
    } catch (error) {
      setError('Erro ao carregar marcas');
    }
  };

  useEffect(() => {
    loadBrands(); // Marcas
  }, []);

  const handleAddBrand = async () => {
    if (newBrand) {
      try {
        await createBrand({ name: newBrand });
        setNewBrand('');
        setSuccessMessage('Marca criada com sucesso!');
        loadBrands(); // Lista Marcas
      } catch (error) {
        setError('Erro ao criar marca');
      }
    }
  };

  const handleDeleteBrand = async (id: number) => {
    try {
      await deleteBrand(id);
      setSuccessMessage('Marca deletada com sucesso!');
      loadBrands(); // Lista Marcas
    } catch (error) {
      setError('Erro ao deletar marca');
    }
  };

  return (
    <div>
      <h2>Gerenciar Marcas</h2>
      <input
        type="text"
        placeholder="Nome da Nova Marca"
        value={newBrand}
        onChange={(e) => setNewBrand(e.target.value)}
      />
      <button onClick={handleAddBrand}>Adicionar Marca</button>

      {error && <div className="text-red-500">{error}</div>}
      {successMessage && <div className="text-green-500">{successMessage}</div>}

      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            {brand.name}
            <button onClick={() => handleDeleteBrand(brand.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandManager;
