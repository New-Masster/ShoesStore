// src/components/Categories.tsx
import React, { useEffect, useState } from 'react';
import { api } from '../api/api'; 

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [newCategory, setNewCategory] = useState('');

  const loadCategories = async () => {
    try {
      const data = await api.getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory) return;

    try {
      const createdCategory = await api.createCategory({ name: newCategory });
      loadCategories(); // Atualiza
      setNewCategory('');
    } catch (error) {
      console.error('Erro ao adicionar categoria:', error);
    }
  };

  const handleDeleteCategory = async (id: number) => {
    try {
      await api.deleteCategory(id);
      loadCategories(); // Atualiza
    } catch (error) {
      console.error('Erro ao deletar categoria:', error);
    }
  };

  useEffect(() => {
    loadCategories(); // Categorias
  }, []);

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Gerenciar Categorias</h2>
        <button onClick={loadCategories} className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors">
          Refresh
        </button>
      </div>

      <div className="flex mb-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Adicionar uma nova categoria"
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          onClick={handleAddCategory}
          className="bg-blue-500 text-white p-2 rounded ml-2 hover:bg-blue-600 transition-colors"
        >
          Adicionar Categoria
        </button>
      </div>

      <ul className="list-disc pl-5">
        {categories.map((category) => (
          <li key={category.id} className="flex justify-between items-center mb-2 p-2 border-b">
            <span className="text-lg">{category.id} - {category.name}</span> {/* Exibe o ID antes do nome */}
            <button
              onClick={() => handleDeleteCategory(category.id)}
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

export default Categories;
