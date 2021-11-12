import React,{useState} from 'react'

import Formulario from '../pages/contactPage/componentsContactPage/Formulario'
import BtnForm from './BtnForm'

const AsideForm = () => {
    
const [showForm,setShowForm]=useState(false)
    
 return (
    <>
       <div className={`bg-sky-800 w-72 h-screen fixed  px-5 text-white py-5 transition transform duration-500
        ${showForm?"":"-translate-x-72"}`}
        style={{zIndex:"21000"}}
        >
            {showForm&&<div className="absolute w-screen h-screen left-72" onClick={()=>setShowForm(false)}></div>}
            <h1 className="text-3xl mb-8">CONTÁCTENOS</h1>
            <Formulario/>
        </div>
        
        {!showForm&&<BtnForm setShowForm={setShowForm}/>}
    </>
    )
}

export default AsideForm
