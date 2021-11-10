import React from 'react'
import { NavLink} from 'react-router-dom'
import img from '../../img/antezana-serv-2.jpg'
const especialiadad=["Derecho Civil",
        "Derecho Penal",
        "Procesos Administrativo",
        "Derecho Corporativo",
        "Derecho de Familia",
        "Cobranza Judicial y Extrajudicial",
        "Derecho Inmobiliario"
    ]
const EspecialidadPage = ({namePage,setNamePage}) => {
    
    return (
        <div className=" flex px-10 xl:px-32 gap-x-8 flex-col md:flex-row ">
            <div className="xl:w-1/5 h-4/5 ">
                <h1 className="text-2xl mb-5">Areas de Especailidades</h1>
                <ul className="flex flex-col">
                    {especialiadad.map(item=>{
                        return <NavLink key={item} to={`/Especialidades/`+namePage} className={`border py-2 pl-4 hover:bg-blue-700 hover:text-white ${namePage===item&&"bg-blue-700 text-white"}`}
                            onClick={()=>setNamePage(item)}
                        >
                            {item}
                            </NavLink>
                    })}
                
                </ul>
            </div>
                    
            <div className="md:w-4/5 pb-5 ">
                <img src={img} alt="" width="100%"/>
                <div className="text-justify mt-5">
                    <h1 className="text-left text-4xl text-blue-700 mb-2">{namePage}</h1>
                    <p>Los abogados penalistas del área representan a sociedades, asociaciones, directores, gerentes y otros profesionales que están siendo investigados o procesados. El servicio que brindamos comprende una asesoría integral preventiva y de definición de estrategias en caso de defensas penales.</p>
                </div>
            </div>
        </div>
    )
}

export default EspecialidadPage;
