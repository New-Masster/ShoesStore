import React, { useEffect, useState } from 'react';
import { fetchCategories, createCategory, deleteCategory } from '../api/categoryService'; 

const CategoryManager: React.FC = () => {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [newCategory, setNewCategory] = useState('');

  // Carregar Categorias
  const loadCategories = async () => {
    const fetchedCategories = await fetchCategories();
    setCategories(fetchedCategories);
  };

 
  useEffect(() => {
    loadCategories();
  }, []);

  // Adicionar Categoria
  const handleAddCategory = async () => {
    if (newCategory) {
      await createCategory({ name: newCategory });
      setNewCategory('');
      loadCategories(); // Atualiza
    }
  };

  // Deletar Categoria
  const handleDeleteCategory = async (id: number) => {
    await deleteCategory(id);
    loadCategories(); // Atualiza
  };

  return (
    <div>
      <h2>Manage Categories</h2>
      <input
        type="text"
        placeholder="New Category Name"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button onClick={handleAddCategory}>Add Category</button>

      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManager;
