import React from 'react'
import logo from '../img/Estudio_Juridico_Antezana_logo_2.png'
let option=["Inicio","Nuestra firmas","Especialidades","Clientes","Contactenos","oficinias"]
const header = () => {
    return (
        <header className="border-t-4 w-full h-48 border-blue-700 flex justify-around items-center">
            <a href="https://" ><img src={logo} alt="logo.jpg"/></a>
            <ul className="flex items-center">
               {option.map((item,i)=>{
                   return <li className="px-5 py-5 cursor-pointer" key={i}>{item}</li>
               })} 
            </ul>
        </header>
    )
}

export default header
