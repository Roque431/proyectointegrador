import React, { useState, useEffect } from 'react';
import './tProductos.css'
import { Contenedor } from '../atoms/Contenedor';
import { DivCont } from '../atoms/DivCont';
import { LiTabble } from '../atoms/LiTabble';
import { TRTable } from '../atoms/TRTable';
import { THTable } from '../atoms/THTable';
import { TDTable } from '../atoms/TDTable';
import { BottomSty } from '../atoms/BottomSty';

function TMedica() {
  const [citas, setCitas] = useState([]);


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
  };


  return (
    <Contenedor top="63px" left="20%" width="80%" height="495px" border="1px solid black" backgroundColor="white" style={{ overflow: 'auto' }}>
      <DivCont width="100%" left="0" top="0" >
        <LiTabble>
          <thead>
            <TRTable>
              <THTable className='idth1'>ID</THTable>
              <THTable className='horath2'>Nombre del Producto</THTable>
              <THTable className='nombreth3'>Datos</THTable>
              <THTable className='lugarth4'>Fecha de caducidad</THTable>
              <THTable className='estadoth5'>Stock</THTable>
              <THTable className='accionesth6'>Acciones</THTable>
            </TRTable>
          </thead>
          <tbody>
            {citas.map((cita) => (
              <TRTable key={cita.id}>
                <TDTable className='idth1'>{cita.id}</TDTable>
                <TDTable className='horath2'>{cita.Hora}</TDTable>
                <TDTable className='nombreth3'>{cita.username}</TDTable>
                <TDTable className='lugarth4'>{cita.LugarConsulta}</TDTable>
                <TDTable className='estadoth5'>{cita.estado}</TDTable>
                <TDTable className='accionesth6'>
                  <BottomSty onClick={() => confirmarCita(cita.id)} className='botompro' fontSize="1rem">Ver Producto</BottomSty>
                </TDTable>
              </TRTable>
            ))}
          </tbody>
        </LiTabble>
      </DivCont>
    </Contenedor>
  );
}

export default TMedica;
