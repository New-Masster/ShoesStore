import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void; // Função Login
  onLogout: () => void; // Função Logout
  isLoggedIn: boolean; // Autenticação
}

const Login: React.FC<LoginProps> = ({ onLogin, onLogout, isLoggedIn }) => {
  const [username, setUsername] = useState(''); // Nome de usuário
  const [password, setPassword] = useState(''); // Senha
  const [error, setError] = useState(''); // Mensagens de erro

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/token/', { // Endpoint para login
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.detail || 'Login failed'); // Armazena mensagem de erro da API
      }

      localStorage.setItem('token', responseData.access); // Armazen o token
      onLogin(); // Função OnLogin

      // Limpa os campos Após login
      setUsername('');
      setPassword('');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); // Mensagem de erro
      } else {
        setError('An unexpected error occurred.'); 
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 relative">
      {isLoggedIn && (
        <button
          onClick={onLogout}
          className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      )}
      <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>} {/* Exibe a mensagem de erro */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="border border-gray-300 p-2 w-full rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 p-2 w-full rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
