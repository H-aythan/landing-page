import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import StatesGlobal from '../../../globalStates/GlobalStates'
import img from '../../../img/Estudio_Juridico_Antezana_botton.jpg'
const Section2 = () => {
    const {setNamePage}=useContext(StatesGlobal);
    
    return (
        <div className="w-full text-white flex flex-col items-center py-20" style={{backgroundImage:`url(${img})`}}>
            <h1 className="text-5xl mb-10 border-b min-w-min pb-5 ">Nuestro Estudio</h1>
            <p className="border rounded w-4/5 text-2xl text-center px-8 py-4">{texto}</p>
            <NavLink className="border rounded px-4 py-2 mt-16 cursor-pointer 
                hover:bg-gray-100 hover:bg-opacity-40" 
                onClick={()=>setNamePage("Nuestra firma")} to="/Nuestra Firma">
                Leer mas +
            </NavLink>
        </div>
    )
}

const texto ="Nuestro estudio de abogados ofrece a los clientes asesoría legal especializada en forma personalizada, a través de nuestro staff de abogados altamente capacitados y con experiencia en las diversas áreas del derecho. Brindamos asesoría jurídica de la más alta calidad, personalizando la relación con nuestros clientes, generándoles seguridad y comodidad, logrando formar, de esta manera, relaciones de estrecha confianza y de largo plazo."
export default Section2
