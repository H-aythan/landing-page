import React from 'react'
import Formulario from '../pages/contactPage/componentsContactPage/Formulario'

const AsideForm = () => {
    return (
        <div className="bg-sky-800 w-72 h-screen fixed left-0 px-5 text-white py-5" style={{zIndex:"21000"}}>
            <h1 className="text-3xl mb-8">CONTÁCTENOS</h1>
            <Formulario/>
      </div>
    )
}

export default AsideForm
