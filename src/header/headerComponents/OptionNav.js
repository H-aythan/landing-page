import {useState} from 'react'
import {NavLink} from 'react-router-dom';

const especialiadad=["Derecho Penal",
        "Derecho Laboral",
        "Derecho Corporativo",
        "Derecho Civil",
        "Derecho Inmobiliario",
        "Derecho de Familia",
        "Procesos Administrativos",
        "Cobranza Judicial y Extrajudicial"
]

const OptionNav = ({name,setNamePage,setShowMenu,setPageSelected}) => {
    const [show,setShow]=useState(false);
    
    const acciones=(item)=>{
        setNamePage(item);
        setShowMenu(false);
        setShow(false);  
        
    }
    const acciones2=(e,name)=>{
        name!=="Especialidades"&&setShowMenu(false)
        name==="Especialidades"&&e.preventDefault()
        name!=="Especialidades"&&setPageSelected(name);
        setShow(!show);//cierra y abre el menu desplegable 
          
    }
    return (
        <li   className="relative py-2 "  
               onMouseOut={()=>setShow(false)}
            >
            <NavLink exact   
                className="px-5 py-2 md:py-5 flex items-center cursor-pointer border-b-2 md:border-0"
                activeClassName={`textColor ${"borderColor"}`}
                 
                to={`/${name!=="Inicio"?name:""}`}
                onClick={(e)=>acciones2(e,name)}
                
            >
                    <div className="flex items-center w-full" >
                        {name}
                        {name==="Especialidades"&&<div className="ml-4 transform rotate-90 text-3xl " >
                            &#8250;
                        </div>} 
                    </div>
            </NavLink>
              
                {/* menu deplegable */}
                {name==="Especialidades"&&(<ul className={` ${show===false&&"hidden"} text-sm text-black w-full 
                md:w-80 md:absolute bg-white top-16 right-0 flex flex-col flex-wrap `}
                    
                >
                {especialiadad.map((item,i)=>{
                    return <li key={i} className="backgroundColorH hover:text-white flex" 
                                onClick={()=>acciones(item)} 
                                onMouseEnter={()=>setShow(true)}
                                onMouseOut={()=>setShow(false)}
                            >
                            <NavLink to={`/Especialidades`} className="w-full py-2 pl-5">
                                {item}
                            </NavLink>
                    </li>
                })}
                </ul>)} 
        </li>
    
    )
}

export default OptionNav
