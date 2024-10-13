import React, { useEffect, useState } from 'react';
import { api } from '../api/api'; // Errei nesse porc... depoois que notei que estava comento um /api. 

const Shoes: React.FC = () => {
  const [shoes, setShoes] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [newShoe, setNewShoe] = useState({
    name: '',
    brand: 0,
    category: 0, // Alterado para uma únca categoria
    price: '',
    stock: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle

  const loadShoes = async () => {
    try {
      const data = await api.getShoes();
      setShoes(data);
    } catch (error) {
      console.error('Erro ao carregar sapatos:', error);
    }
  };

  const loadBrands = async () => {
    try {
      const data = await api.getBrands();
      setBrands(data);
    } catch (error) {
      console.error('Erro ao carregar marcas:', error);
    }
  };

  const loadCategories = async () => {
    try {
      const data = await api.getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }
  };

  const handleAddShoe = async () => {
    if (!newShoe.name || !newShoe.price || !newShoe.stock || newShoe.brand === 0 || newShoe.category === 0) return;

    try {
      const createdShoe = await api.createShoe({
        name: newShoe.name,
        brand: newShoe.brand,
        categories: [newShoe.category], 
        price: parseFloat(newShoe.price.replace(',', '.')),
        stock: parseInt(newShoe.stock, 10)
      });
      setShoes((prevShoes) => [...prevShoes, createdShoe]);
      setNewShoe({ name: '', brand: 0, category: 0, price: '', stock: '' });
      setIsModalOpen(false); 
    } catch (error) {
      console.error('Erro ao adicionar sapato:', error);
    }
  };

  const handleDeleteShoe = async (id: number) => {
    try {
      await api.deleteShoe(id);
      setShoes((prevShoes) => prevShoes.filter((shoe) => shoe.id !== id));
    } catch (error) {
      console.error('Erro ao deletar sapato:', error);
    }
  };

  // Atualizar
  const handleRefresh = () => {
    loadShoes();
    loadBrands();
    loadCategories();
  };

  useEffect(() => {
    loadShoes();
    loadBrands();
    loadCategories();
  }, []);

  const getBrandName = (id: number) => {
    const brand = brands.find((b) => b.id === id);
    return brand ? `${brand.id} - ${brand.name}` : 'Desconhecida';
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Gerenciar Sapatos</h2>
        <button onClick={handleRefresh} className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors">
          Refresh
        </button>
      </div>

      <div className="flex items-center mb-4">
        <div className="flex flex-col mr-2 w-1/3">
          <label>Marca:</label>
          <select
            value={newShoe.brand}
            onChange={(e) => setNewShoe({ ...newShoe, brand: parseInt(e.target.value, 10) })}
            className="border border-gray-300 p-2 rounded"
          >
            <option value={0}>Selecione uma marca</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mr-2 w-1/3">
          <label>Categoria:</label>
          <select
            value={newShoe.category}
            onChange={(e) => setNewShoe({ ...newShoe, category: parseInt(e.target.value, 10) })}
            className="border border-gray-300 p-2 rounded"
          >
            <option value={0}>Selecione uma categoria</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
          Adicionar Sapato
        </button>
      </div>

      {/* Modal para adicionar sapato */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 w-1/3">
            <h3 className="text-lg font-semibold mb-2">Adicionar Novo Sapato</h3>
            <div className="flex flex-col mb-2">
              <label>Nome:</label>
              <input
                type="text"
                value={newShoe.name}
                onChange={(e) => setNewShoe({ ...newShoe, name: e.target.value })}
                placeholder="Nome do sapato"
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label>Preço (R$):</label>
              <input
                type="text"
                value={newShoe.price}
                onChange={(e) => setNewShoe({ ...newShoe, price: e.target.value })}
                placeholder="Preço do sapato"
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label>Estoque:</label>
              <input
                type="number"
                value={newShoe.stock}
                onChange={(e) => setNewShoe({ ...newShoe, stock: e.target.value })}
                placeholder="Quantidade em estoque"
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button onClick={() => setIsModalOpen(false)} className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600">
                Cancelar
              </button>
              <button onClick={handleAddShoe} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ml-2">
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}

      <ul className="list-disc pl-5">
        {shoes.map((shoe) => (
          <li key={shoe.id} className="flex justify-between items-center mb-2 p-2 border-b">
            <span className="text-lg">{shoe.name}</span>
            <div className="flex flex-col">
              <span>Preço: R$ {parseFloat(shoe.price).toFixed(2).replace('.', ',')}</span>
              <span>Estoque: {shoe.stock} unid.</span>
              <span>Marca: {getBrandName(shoe.brand)}</span>
            </div>
            <button
              onClick={() => handleDeleteShoe(shoe.id)}
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

export default Shoes;
