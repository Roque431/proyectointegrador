import React, { useState, useEffect } from 'react';
import './tPerfiles.css';
import { CgCloseO } from 'react-icons/cg';
import { Contenedor } from '../atoms/Contenedor';
import { DivCont } from '../atoms/DivCont';
import { LiTabble } from '../atoms/LiTabble';
import { TRTable } from '../atoms/TRTable';
import { THTable } from '../atoms/THTable';
import { Titulos } from '../atoms/Titulos';
import { InputsSty } from '../atoms/InputsSty';
import { Parrafos } from '../atoms/Parrafos';
import { DivEs } from '../atoms/DivEs';
import { TDTable } from '../atoms/TDTable';
import { BottomSty } from '../atoms/BottomSty';
import { DivStyle } from '../atoms/DivStyle';

function TPerfiles() {
  const [perfiles, setPerfiles] = useState([]);
  const [perfilSeleccionado, setPerfilSeleccionado] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarConsultas, setMostrarConsultas] = useState(true);
  const [mostrarAgregarFormulario, setMostrarAgregarFormulario] = useState(false);
  const [mostrarEditarFormulario, setMostrarEditarFormulario] = useState(false);
  const [nuevaConsulta, setNuevaConsulta] = useState({
    servicio: '',
    fecha: '',
  });

  useEffect(() => {
    const fetchPerfiles = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/usuarios');
        const data = await response.json();
        setPerfiles(data);
      } catch (error) {
        console.error('Error al obtener perfiles', error);
      }
    };

    fetchPerfiles();
  }, []);

  const verPerfil = (perfilId) => {
    setPerfilSeleccionado(perfilId);
    setMostrarFormulario(true);
  };

  const eliminarPerfil = async (perfilId) => {
    try {
      await fetch(`http://localhost:8080/api/usuarios/${perfilId}`, {
        method: 'DELETE',
      });

      const nuevosPerfiles = perfiles.filter((perfil) => perfil.id !== perfilId);
      setPerfiles(nuevosPerfiles);
    } catch (error) {
      console.error('Error al eliminar perfil', error);
    }
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  const cambiarVista = (consultas) => {
    setMostrarConsultas(consultas);
    setMostrarAgregarFormulario(false);
    setMostrarEditarFormulario(false);
  };

  const mostrarAgregarForm = () => {
    setMostrarAgregarFormulario(true);
    setMostrarEditarFormulario(false);
  };

  const mostrarEditarForm = () => {
    setMostrarAgregarFormulario(false);
    setMostrarEditarFormulario(true);
  };

  const handleAgregarConsulta = (e) => {
    e.preventDefault();
    // Lógica para enviar la nueva consulta al servidor
    console.log('Nueva Consulta:', nuevaConsulta);
  };

  const handleEditarConsulta = (e) => {
    e.preventDefault();
    // Lógica para enviar la consulta editada al servidor
    console.log('Consulta Editada:', nuevaConsulta);
  };

  return (
    <>
      <Contenedor top="63px" left="20%" width="80%" height="495px" border="1px solid black" backgroundColor="white" style={{ overflow: 'auto' }}>
        <DivCont width="100%" left="0" top="0" style={{ overflow: 'auto' }}>
          <LiTabble>
            <thead>
              <TRTable>
                <THTable className='thid'>ID</THTable>
                <THTable className='thnombre'>Nombre del cliente</THTable>
                <THTable className='thmascota'>Nombre de la mascota</THTable>
                <THTable className='thestado'>Motivo</THTable>
                <THTable className='thcita'>servicio</THTable>
                <THTable className='thactions'>Acciones</THTable>
              </TRTable>
            </thead>
            <tbody>
              {perfiles.map((perfil) => (
                <TRTable key={perfil.id}>
                  <TDTable>{perfil.id}</TDTable>
                  <TDTable>{perfil.nombre}</TDTable>
                  <TDTable>{perfil.email}</TDTable>
                  <TDTable>{perfil.contrasena}</TDTable>
                  <TDTable>{perfil.esCliente}</TDTable>

                  <TDTable>
                    <BottomSty width="40%" marginRight="20px" backgroundColor="rgba(45, 202, 140, 1)" fontSize="1rem" onClick={() => verPerfil(perfil)}>
                      Ver Perfil
                    </BottomSty>
                    <BottomSty width="50%" backgroundColor="rgba(255, 113, 91, 1)" fontSize="1rem" onClick={() => eliminarPerfil(perfil.id)}>
                      Eliminar Perfil
                    </BottomSty>
                  </TDTable>
                </TRTable>
              ))}
            </tbody>
          </LiTabble>
        </DivCont>
      </Contenedor>

      {mostrarFormulario && perfilSeleccionado && (
        <Contenedor width="70%" left="15%" height="430px" backgroundColor="white" border="3px solid rgba(45, 21, 130, 1)" borderRadius="15px">
          <CgCloseO className='iconocerrar' size={35} onClick={cerrarFormulario} />
          <DivEs>
            <DivCont left="0" width="40%" display="inline-block" height="140px" textAlign="left">
              <Titulos fontSize="1.5rem" margin="5px">
                Nombre del Cliente: {perfilSeleccionado.nombre}
              </Titulos>
              <Titulos fontSize="1.5rem" margin="5px">
                Nombre de la Mascota: {perfilSeleccionado.mascota}
              </Titulos>
              <Titulos fontSize="1.5rem" margin="5px">
                Datos de la Mascota: {perfilSeleccionado.datosMascota}
              </Titulos>
              <Titulos fontSize="1.5rem" margin="5px">
                Motivos del seguimiento: {perfilSeleccionado.motivosSeguimiento}
              </Titulos>
            </DivCont>
            <DivCont left="40%" height="140px" width="60%" textAlign="left" display="inline-block">
              <DivCont left="0%" height="140px" width="60%" textAlign="left" display="inline-block">
                <Titulos fontSize="1.5rem" margin="5px">
                  {perfilSeleccionado.id}
                </Titulos>
                <Titulos fontSize="1.5rem" margin="5px">
                  {perfilSeleccionado.nombre}
                </Titulos>
                <Titulos fontSize="1.5rem" margin="5px">
                  {perfilSeleccionado.Motivo}
                </Titulos>
                <Parrafos> {perfilSeleccionado.motivosSeguimiento}</Parrafos>
              </DivCont>
            </DivCont>
          </DivEs>
          <Contenedor top="45%" height="230px" backgroundColor="white">
            <DivCont width="30%">
              <InputsSty type='submit' border="2px solid rgba(252, 134, 33, 1)" value={"Consultas"} width="45%" onClick={() => cambiarVista(true)} />
              {/* <InputsSty type='submit' border="2px solid rgba(44, 214, 248, 1)" value={"Vacunas"} width="45%" onClick={() => cambiarVista(false)} /> */}
            </DivCont>
            <DivCont top="12%" width="97%" left="1.5%" height="190px">
              {mostrarConsultas && (
                <DivStyle left="0px" top="5%" width="100%" height="190px" style={{ overflow: 'auto' }}>
                  <LiTabble>
                    <tbody>
                      {perfiles.map((perfil) => (
                        <TRTable key={perfil.id}>
                          <TDTable className='pcar'>{perfil.id}</TDTable>
                          <TDTable className='pna'>{perfil.username}</TDTable>
                          <TDTable className='ppet'>{perfil.petName}</TDTable>

                          <TDTable className='thactionscar'>
                            <BottomSty width="35%" marginRight="20px" backgroundColor="rgba(45, 202, 140, 1)" fontSize="1rem" onClick={() => mostrarEditarForm()}>
                              Editar
                            </BottomSty>
                            <BottomSty width="35%" marginRight="20px" backgroundColor="rgba(255, 113, 91, 1)" fontSize="1rem">
                              Eliminar
                            </BottomSty>
                          </TDTable>
                        </TRTable>
                      ))}
                    </tbody>
                  </LiTabble>
                </DivStyle>
              )}

              {/* Mostrar formulario de agregar */}
              {mostrarAgregarFormulario && (
                <form onSubmit={handleAgregarConsulta}>
                  <div>
                    <label>Servicio:</label>
                    <input type="text" value={nuevaConsulta.servicio} onChange={(e) => setNuevaConsulta({ ...nuevaConsulta, servicio: e.target.value })} />
                  </div>
                  <div>
                    <label>Fecha:</label>
                    <input type="date" value={nuevaConsulta.fecha} onChange={(e) => setNuevaConsulta({ ...nuevaConsulta, fecha: e.target.value })} />
                  </div>
                  <BottomSty width="17%" marginRight="20px" backgroundColor="rgba(1, 118, 255, 1)" fontSize="1rem" type="submit">
                    Agregar
                  </BottomSty>
                </form>
              )}

              {/* Mostrar formulario de editar */}
              {mostrarEditarFormulario && (
                <form onSubmit={handleEditarConsulta}>
                  <div>
                    <label>Servicio:</label>
                    <input type="text" value={nuevaConsulta.servicio} onChange={(e) => setNuevaConsulta({ ...nuevaConsulta, servicio: e.target.value })} />
                  </div>
                  <div>
                    <label>Fecha:</label>
                    <input type="date" value={nuevaConsulta.fecha} onChange={(e) => setNuevaConsulta({ ...nuevaConsulta, fecha: e.target.value })} />
                  </div>
                  <BottomSty width="17%" marginRight="20px" backgroundColor="rgba(45, 202, 140, 1)" fontSize="1rem" type="submit">
                    Editar
                  </BottomSty>
                </form>
              )}
            </DivCont>
          </Contenedor>
        </Contenedor>
      )}
    </>
  );
}

export default TPerfiles;
