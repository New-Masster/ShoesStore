import React, { useEffect, useState } from 'react';
import { fetchBrands, createBrand, deleteBrand } from '../api/brandService';

const BrandManager: React.FC = () => {
  const [brands, setBrands] = useState<{ id: number; name: string }[]>([]);
  const [newBrand, setNewBrand] = useState('');

  const loadBrands = async () => {
    const fetchedBrands = await fetchBrands();
    setBrands(fetchedBrands);
  };

  useEffect(() => {
    loadBrands(); // Carrega Marcas
  }, []);

  const handleAddBrand = async () => {
    if (newBrand) {
      await createBrand({ name: newBrand });
      setNewBrand('');
      loadBrands(); // Atualiza
    }
  };

  const handleDeleteBrand = async (id: number) => {
    await deleteBrand(id);
    loadBrands(); // Atualiza
  };

  return (
    <div>
      <h2>Manage Brands</h2>
      <input
        type="text"
        placeholder="New Brand Name"
        value={newBrand}
        onChange={(e) => setNewBrand(e.target.value)}
      />
      <button onClick={handleAddBrand}>Add Brand</button>

      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            {brand.name}
            <button onClick={() => handleDeleteBrand(brand.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandManager;
