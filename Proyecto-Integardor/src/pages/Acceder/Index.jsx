import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Acceder = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }

      // Si la solicitud es exitosa, redirige al usuario a la página deseada
      navigate('/dashboard');

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Puedes mostrar una alerta o mensaje de error al usuario
    }
  };

  const handleRegisClick = () => {
    // Redirigir a la ruta deseada
    navigate('/Registro');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 p-6 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-semibold mb-1">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded w-8/12 mx-8"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-sm font-semibold mb-1">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded w-9/12 mx-8" 
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition w-3/12 ml-56"
          >
            Iniciar Sesión
          </button>
          <p>
            <br />
            ¿No tienes una cuenta?{' '}
            <span className="loginButton" onClick={handleRegisClick}>Registrate</span>
          </p>
        </form>
      </div>
      <div className="w-1/2">
        {/* Puedes cambiar la URL de la imagen o utilizar un componente de imagen */}
        <img src="https://via.placeholder.com/400" alt="Login" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Acceder;
