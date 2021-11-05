import React, { useState} from 'react'
import {NavLink,} from 'react-router-dom';
import logo from '../img/Estudio_Juridico_Antezana_logo_2.png'
import OptionNav from './headerComponents/OptionNav';
const optionNav=["","Nuestra Firma","Especialidades","Clientes","Contactenos","Oficinas"];

const Header = ({setNamePage}) => {
    const [show,setShow]=useState(false);
    const [selected,setSelected]=useState("")
    
    return (
        <header className="z-10 mb-10 border-t-4  w-screen sticky top-0 bg-white md:h-54 border-blue-700 flex flex-wrap justify-around items-center">
            <div className="flex items-center justify-between w-4/5 md:max-w-max " >
                <NavLink to="/Especialidades" ><img src={logo}  alt="logo.jpg"/></NavLink>
                <div className="md:hidden border-2 rounded ml-8 py-3 px-3 w-12 h-12 flex justify-center flex-wrap items-center"  onClick={()=>setShow(!show) }>
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                </div>
            </div>

            <ul className={`md:flex items-center w-4/5 md:w-max ${!show&&"hidden"}`} >
             {optionNav.map(item=>{ 
                    return<OptionNav key={item} name={item} setNamePage={setNamePage} 
                    setShowMenu={setShow} setSelected={setSelected} selected={selected}
                    />
            })}
            </ul>
        </header>
    )
}

export default Header;

 


 