import React from 'react'
import NavVar from '../components/molecules/NavVar'
import Carrusel from '../components/molecules/Carrusel'
import Eslogan from '../components/molecules/Eslogan'
import AboutUs from '../components/molecules/AboutUs'
import SiteVAS from '../components/organisms/SiteVAS'
import SobreDe from '../components/molecules/SobreDe'
import Adopciones from '../components/molecules/Adopciones'
import Productos from '../components/molecules/Productos'
import FooterPag from '../components/molecules/FooterPag'

function PaginaWeb() {
  return (
    <div>
      <NavVar />
      <Carrusel />
      <Eslogan />
      <AboutUs />
      <SiteVAS />
      <SobreDe />
      <Adopciones/>
      <Productos />
      <FooterPag />
    </div>
  )
}

export default PaginaWeb