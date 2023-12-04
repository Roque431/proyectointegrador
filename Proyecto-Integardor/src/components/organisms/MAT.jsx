import React, { useState } from 'react';
import { Contenedor } from '../atoms/Contenedor';
import TablasPerfiles from './TablasPerfiles';
import TablasProductos from './TablasProductos';
import MenuPro from '../molecules/MenuPro';

function MAT() {
  const [mostrarCitas, setMostrarCitas] = useState(true);

  const toggleMostrarCitas = () => {
    setMostrarCitas(!mostrarCitas);
  };

  return (
    <Contenedor top="185px" height="440px" backgroundColor="grey">
      <MenuPro onToggle={toggleMostrarCitas} />
      {mostrarCitas ? <TablasProductos /> : <TablasPerfiles />}
    </Contenedor>
  );
}

export default MAT;
