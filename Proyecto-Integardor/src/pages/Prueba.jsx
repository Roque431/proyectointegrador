import React from 'react';

const Prueba = () => {
  const mensaje = async () => {
    try {
      const response = await fetch('http://localhost:8080/enviar-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: '+529671393797', // Número de teléfono del destinatario
          body: 'PURO PINCHE INTEGRADOR ALV COMPA',
        }),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    }
  };

  return (
    <div>
      <h1>¡Bienvenido a tu aplicación!</h1>
      <button onClick={mensaje}>Enviar Mensaje</button>
    </div>
  );
};

export default Prueba;
