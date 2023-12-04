import React from 'react'
import './generarCita.css'
import FormularioCitas from '../components/organisms/FormularioCitas'
import FooterCit from '../components/molecules/FooterCIt'
import NavVarCi from '../components/molecules/NavVarCi'

function GenerarCita() {
  return (
    <>
        <NavVarCi/>
        <FormularioCitas/>
        <FooterCit/>
    </>
  )
}

export default GenerarCita