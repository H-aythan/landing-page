import React, { useState } from 'react'
import {NavLink} from 'react-router-dom';
import logo from '../img/Estudio_Juridico_Antezana_logo_2.png'
let option=["Inicio","Nuestra firmas","Especialidades","Clientes","Contactenos","oficinias"]
const Header = () => {
    const [show,setShow]=useState(false);
    
    return (
        <header className="z-10 mb-10 border-t-4 w-screen sticky top-0 bg-white md:h-48 border-blue-700 flex flex-wrap justify-around items-center">
            <div className="flex items-center justify-between w-4/5 md:max-w-max ">
                <a href="https://" ><img src={logo}  alt="logo.jpg"/></a>
                <div className="md:hidden border-2 rounded ml-8 py-3 px-3 w-12 h-12 flex justify-center flex-wrap items-center" onClick={()=>setShow(!show)}>
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                </div>
            </div>

            <ul className={`md:flex items-center w-4/5 md:w-max ${show&&"hidden"}`}>
               {option.map((item,i)=>{
                   return <li  key={i} className="py-2 border-b-2 md:border-0" onClick={()=>setShow(!show)}>
                        <NavLink activeClassName="md:border-b-2 md:border-blue-500 md:text-blue-500" className={`px-5 py-2 md:py-5  cursor-pointer `} to={`/${item}`}>{item}</NavLink>
                       </li>
               })} 
            </ul>
        </header>
    )
}

export default Header;
