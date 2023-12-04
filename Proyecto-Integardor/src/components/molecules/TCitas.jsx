import React, { useState, useEffect } from 'react';
import './tCitas.css'
import { Contenedor } from '../atoms/Contenedor';
import { DivCont } from '../atoms/DivCont';
import { LiTabble } from '../atoms/LiTabble';
import { TRTable } from '../atoms/TRTable';
import { THTable } from '../atoms/THTable';
import { TDTable } from '../atoms/TDTable';
import { BottomSty } from '../atoms/BottomSty';

function TCitas() {
  const [citas, setCitas] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);

  useEffect(() => {
    // Llamar a tu API para obtener las citas al montar el componente
    obtenerCitas();
  }, []);

  const obtenerCitas = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/CitaUsuario');
      const data = await response.json();
      setCitas(data);
    } catch (error) {
      console.error('Error al obtener citas:', error);
    }
  };

  const confirmarCita = async (id) => {
    try {
      // Llamar a tu API para confirmar la cita con el ID proporcionado
      await fetch(`http://localhost:8080/api/CitaUsuario${id}`, {
        method: 'PUT',
      });
      // Actualizar la lista de citas después de confirmar
      obtenerCitas();
    } catch (error) {
      console.error('Error al confirmar la cita:', error);
    }
    try {
      const response = await fetch('http://localhost:8080/enviar-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: '+529671393797', // Número de teléfono del destinatario
          body: 'Cita Confirmada',
        }),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    }
  };

  const mostrarFormularioAsignar = (id) => {
    setMostrarFormulario(true);
    setCitaSeleccionada(id);
  };

  const asignarCita = async (nuevaFecha) => {
    try {
      // Llamar a tu API para asignar una nueva fecha a la cita con el ID almacenado
      await fetch(`http://loclahost:8080/api/CitaUsuario/${citaSeleccionada}/asignar`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nuevaFecha }),
      });
      // Actualizar la lista de citas después de asignar
      obtenerCitas();
    } catch (error) {
      console.error('Error al asignar la nueva fecha:', error);
    } finally {
      // Cerrar el formulario después de asignar la cita
      setMostrarFormulario(false);
      // Limpiar la cita seleccionada
      setCitaSeleccionada(null);
    }
  };

  return (
    <Contenedor top="63px" left="20%" width="80%" height="495px" border="1px solid black" backgroundColor="white" style={{ overflow: 'auto' }}>
      <DivCont width="100%" left="0" top="0" >
        <LiTabble>
          <thead>
            <TRTable>
              <THTable className='idth'>ID</THTable>
              <THTable className='horath'>Hora de Cita</THTable>
              <THTable className='nombreth'>Nombre del Cliente</THTable>
              <THTable className='lugarth'>Lugar de Cita</THTable>
              <THTable className='estadoth'>Estado</THTable>
              <THTable className='accionesth'>Acciones</THTable>
            </TRTable>
          </thead>
          <tbody>
            {citas.map((cita) => (
              <TRTable key={cita.id}>
                <TDTable>{cita.id}</TDTable>
                <TDTable>{cita.petName}</TDTable>
                <TDTable>{cita.username}</TDTable>
                <TDTable>{cita.LugarConsulta}</TDTable>
                <TDTable>{cita.Motivo}</TDTable>
                <TDTable>
                  <BottomSty width="40%" marginRight="20px" backgroundColor="rgba(45, 202, 140, 1)" fontSize="1rem" onClick={() => confirmarCita(cita.id)}>Confirmar</BottomSty>
                  <BottomSty width="50%" backgroundColor="rgba(255, 113, 91, 1)" fontSize="1rem" onClick={() => mostrarFormularioAsignar(cita.id)}>Ver Cita</BottomSty>
                </TDTable>
              </TRTable>
            ))}
          </tbody>
        </LiTabble>
      </DivCont>

      {mostrarFormulario && (
        <div>
          <h2>Asignar Nueva Fecha</h2>
          <input type="date" />
          <button onClick={() => asignarCita('nuevaFecha')}>Confirmar</button>
        </div>
      )}
    </Contenedor>
  );
}

export default TCitas;
