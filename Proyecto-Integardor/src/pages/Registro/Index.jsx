import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import './registro.css';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verifica si las contraseñas coinciden
    if (contrasena !== confirmarContrasena) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          email,
          contrasena,
        }),
      });

      if (!response.ok) {
        throw new Error('Error en el registro');
      }

      // Muestra una alerta SweetAlert2 en caso de éxito
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: '¡Bienvenido! Tu registro ha sido completado con éxito.',
      });

      // Aquí podrías redirigir al usuario a la página de generación de citas o realizar otras acciones necesarias.

    } catch (error) {
      console.error('Error durante el registro:', error);
      // Puedes mostrar otra alerta SweetAlert2 para informar al usuario sobre el error.
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ha ocurrido un error durante el registro. Por favor, inténtalo de nuevo.',
      });
    }
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirigir a la ruta deseada
    navigate('/');
  };

  const handleAccesClick = () => {
    // Redirigir a la ruta deseada
    navigate('/Acceder');
  };

  return (
    <>
      <div>
        <button type="submit" className="ruturnhome" onClick={handleButtonClick}>
          <IoIosArrowRoundBack size={35} />
          Regresar
        </button>
      </div>
      <div className="card register">
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="inputField"
            />
          </label>
          <label>
            Correo Electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputField"
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className="inputField"
            />
          </label>
          <label>
            Confirmar Contraseña:
            <input
              type="password"
              value={confirmarContrasena}
              onChange={(e) => setConfirmarContrasena(e.target.value)}
              className="inputField"
            />
          </label>
          <button type="submit" className="submitButton">
            Registrarse
          </button>

          <p>
            <br />
            ¿Ya tienes una cuenta?{' '}
            <span className="loginButton" onClick={handleAccesClick}>
              Iniciar Sesión
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Registro;
