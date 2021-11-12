import React, { useContext, useEffect, useState} from 'react'
import {NavLink,} from 'react-router-dom';
import StatesGlobal from '../globalStates/GlobalStates';
import logo from '../img/Estudio_Juridico_Antezana_logo_2.png'
import OptionNav from './headerComponents/OptionNav';
const optionNav=["Inicio","Nuestra Firma","Especialidades","Clientes","Contactenos","Oficinas"];

const Header = ({init}) => {
    const [show,setShow]=useState(false);
    const [pageSelected,setPageSelected]=useState("")
    const {namePage,setNamePage}=useContext(StatesGlobal)
    useEffect(()=>{
        init.current.scrollIntoView({block: "end", behavior: "smooth"})
        
    },[pageSelected,init,namePage])
    
    return (
        <header className="mb-10 w-full sticky top-0 bg-white md:h-54 flex flex-wrap justify-around items-center" style={{zIndex:"10000"}}>
            <div className="flex items-center justify-between w-4/5 md:max-w-max " >
                <NavLink to="/" ><img src={logo}  alt="logo.jpg"/></NavLink>
                <div className="md:hidden border-2 rounded ml-8 py-3 px-3 w-12 h-12 flex justify-center flex-wrap items-center"  onClick={()=>setShow(!show) }>
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                </div>
            </div>

            <ul className={`md:flex items-center w-4/5 md:w-max ${!show&&"hidden"}`} >
             {optionNav.map(item=>{ 
                    return<OptionNav key={item} name={item} setNamePage={setNamePage} 
                    setShowMenu={setShow} setPageSelected={setPageSelected}
                    />
            })}
            </ul>
            
        </header>
    )
}

export default Header;

 


 