import {useState} from 'react'
import {NavLink} from 'react-router-dom';
const especialiadad=["Derecho Civil",
        "Derecho Penal",
        "Procesos Administrativo",
        "Derecho Corporativo",
        "Derecho de Familia",
        "Cobranza Judicial y Extrajudicial",
        "Derecho Inmobiliario"
    ]
const OptionNav = ({name,setNamePage,setShowMenu,setSelected,selected}) => {
    const [show,setShow]=useState(false);
    
    const acciones=(item)=>{
        setNamePage(item);
        setShowMenu(false);
        setSelected("Especialidades");
        setShow(false);  
        
    }
    const acciones2=(e)=>{
        name!=="Especialidades"&&setShowMenu(false)
        name==="Especialidades"&&e.preventDefault()
        setSelected(name)
        setShow(!show);//cierra y abre el menu desplegable   
    }
    return (
        <li   className="relative py-2 border-b-2 md:border-0"  
                
            >
            <NavLink exact   
                className={`px-5 py-2 md:py-5 flex items-center cursor-pointer
                    ${selected===name&&"md:border-b-2 md:border-blue-500 md:text-blue-500"}
                `} 
                to={`/${name}`}
                onClick={(e)=>acciones2(e,name)}
               
                >
                    <div className="flex items-center w-full" >
                        {name===""?"Inicio":name}
                        {name==="Especialidades"&&<div className="ml-4 transform rotate-90 text-3xl ">
                            &#8250;
                        </div>} 
                    </div>
            </NavLink>
              
                {/* menu deplegable */}
                {name==="Especialidades"&&(<ul className={` ${show===false&&"hidden"} text-sm text-black w-full 
                md:w-80 md:absolute bg-white top-16 right-0 flex flex-col flex-wrap `}
                    
                >
                {especialiadad.map((item,i)=>{
                    return <li key={i} className="hover:bg-blue-600 hover:text-white flex" 
                        onClick={()=>acciones(item)} 
                        onMouseEnter={()=>setShow(true)}
                        onMouseOut={()=>setShow(false)}
                        >
                            <NavLink to={`/Especialidades/${item}`} className="w-full py-2 pl-5">
                                {item}
                            </NavLink>
                    </li>
                })}
                </ul>)} 
        </li>
    
    )
}

export default OptionNav
