// src/App.tsx
import React, { useState } from 'react';
import Login from './components/Login';
import Brands from './components/Brands';
import Categories from './components/Categories';
import Shoes from './components/Shoes';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div className="relative p-4">
          <button 
            onClick={handleLogout} 
            className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>

          <h1 className="text-center text-2xl md:text-3xl font-bold mt-4 mb-6">Welcome to the Shoes Store!</h1>

          <div className="flex flex-col md:flex-row md:justify-around mb-8 space-y-4 md:space-y-0">
            <Brands />
            <Categories />
            <Shoes />
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
