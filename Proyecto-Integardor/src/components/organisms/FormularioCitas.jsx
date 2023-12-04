import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { format } from 'date-fns';
import './formularioCitas.css';
import { Contenedor } from '../atoms/Contenedor';
import { BotonSty } from '../atoms/BotonSty';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function FormularioCitas() {
  const [nombre, setNombre] = useState('');
  const [mascota, setMascota] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [telefono, setTelefono] = useState('');
  const [lugarConsulta, setLugarConsulta] = useState('');
  const [direccion, setDireccion] = useState('');
  const [motivoCita, setMotivoCita] = useState('');

  const handleAgendarCita = () => {
    // Construir el objeto con los datos
    console.log("Fecha:", fecha);
    console.log("Hora:", hora);
    const fechaObj = new Date(fecha);
    const hora24Format = new Date(`1970-01-01T${hora}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // Esto asegura que el formato sea de 24 horas
    });

    const citaData = {
      username: nombre,
      petName: mascota,
      fecha: fechaObj.toISOString().split('T')[0], // Formatea la fecha como yyyy-MM-dd
      hora: hora24Format,
      Telefono: telefono,
      LugarConsulta: lugarConsulta,
      Direccion: direccion,
      Motivo: motivoCita,
    };

    // Realizar la solicitud POST a tu API
    fetch('http://localhost:8080/api/CitaUsuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(citaData),
    })
      .then(response => response.json())
      .then(data => {
        Swal.fire({
          title: 'Cita agendada con éxito:',
          html: `Usuario: ${data.username}<br/>Mascota: ${data.petName}<br/>Fecha: ${data.fecha}<br/>Hora: ${data.hora}<br/>Telefono: ${data.Telefono}<br/>Direccion: ${data.Direccion}<br/>Motivo: ${data.Motivo}<br/>LugarConsulta: ${data.LugarConsulta}`,
          icon: 'success',
        });
        
        // Generar PDF después de agendar la cita
        generarPDF(citaData);
      })
      .catch(error => {
        Swal.fire({
          title: 'Error al agendar la cita:',
          text: error.message,
          icon: 'error',
        });
      });

    // Limpiar los campos del formulario
    setNombre('');
    setMascota('');
    setFecha('');
    setHora('');
    setTelefono('');
    setLugarConsulta('');
    setDireccion('');
    setMotivoCita('');
  };

  const generarPDF = ({
    username,
    petName,
    fecha,
    hora,
    Telefono,
    LugarConsulta,
    Direccion,
    Motivo,
  }) => {
    const pdf = new jsPDF();

    // Añadir contenido al PDF
    pdf.text('Cita Agendada con Éxito', 20, 20);
    pdf.text(`Usuario: ${username}`, 20, 30);
    pdf.text(`Mascota: ${petName}`, 20, 40);
    pdf.text(`Fecha: ${format(new Date(fecha), 'yyyy-MM-dd')}`, 20, 50);
    pdf.text(`Hora: ${hora}`, 20, 60);
    pdf.text(`Teléfono: ${Telefono}`, 20, 70);
    pdf.text(`Lugar de Consulta: ${LugarConsulta}`, 20, 80);
    pdf.text(`Dirección: ${Direccion}`, 20, 90);
    pdf.text(`Motivo: ${Motivo}`, 20, 100);

    // Guardar el PDF
    pdf.save('cita_agendada.pdf');
  };


  return (
    <Contenedor top="180px" width="80%" left="10%" height="400px" border="5px solid rgba(45, 202, 140, 1)" borderRadius="15px" backgroundColor="whith">
      <div>
      <h1 className='titulo'>Agenda tu cita</h1>
      <div className="nombres">
        <label className='salidas'>Nombre del completo*</label>
        <input type='text' className='entradas' value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div className="MFH">
        <div>
          <label className='salidas'>Mascota*</label>
          <input type="text" className="entradas1" value={mascota} onChange={(e) => setMascota(e.target.value)} />
        </div>
        <div>
          <label className='salidas'>Fecha*</label>
          <input type="date" name="calendario" id="fecha" className='calen' value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </div>
        <div>
          <label className='salidas'>Hora*</label>
          <input type="time" name="hora" id="hora" className='hoar' value={hora} onChange={(e) => setHora(e.target.value)} />
        </div>
      </div>
      <div className='contac'>
        <div>
          <label className='salidas'>Numero De Telefono*</label>
          <input type="tel" name="telefono" id="telefono" className='telf' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
          <label className='salidas'>Lugar la Consulta</label>
          <input type="text" className='lugar' value={lugarConsulta} onChange={(e) => setLugarConsulta(e.target.value)} />
        </div>
      </div>
      <div className='direc'>
        <label className='salidas'>Direccion*</label>
        <input type="text" className='tmdi' value={direccion} onChange={(e) => setDireccion(e.target.value)} />
      </div>
      <div className='motivo'>
        <label className='salidas'>Motivo de la cita*</label>
        <input type="text" className='tmdi' value={motivoCita} onChange={(e) => setMotivoCita(e.target.value)} />
      </div>
      <BotonSty className='botom' backgroundColor="rgba(1, 118, 255, 1)" width="12%" height="30px" onClick={handleAgendarCita}>Agendar Cita</BotonSty>
      </div>
    </Contenedor>
  )
}

export default FormularioCitas;