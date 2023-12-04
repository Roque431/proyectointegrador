import React, { useState } from 'react';
import { Contenedor } from '../atoms/Contenedor';
import MenuCi from '../molecules/MenuCi';
import TablaCitas from './TablaCitas';
import TablasPerfiles from './TablasPerfiles';

function MenAndTable() {
  const [mostrarCitas, setMostrarCitas] = useState(true);

  const toggleMostrarCitas = () => {
    setMostrarCitas(!mostrarCitas);
  };

  return (
    <Contenedor top="185px" height="440px" backgroundColor="grey">
      <MenuCi onToggle={toggleMostrarCitas} />
      {mostrarCitas ? <TablaCitas /> : <TablasPerfiles />}
    </Contenedor>
  );
}

export default MenAndTable;
