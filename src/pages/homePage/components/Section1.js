import React, { useContext } from 'react'
import StatesGlobal from '../../../globalStates/GlobalStates'
import img from '../../../img/antezana-serv-2.jpg'
import CardsSection1 from './componentsSection1.js/CardsSection1'
const especialiadad=["Derecho Penal",
        "Derecho Laboral",
        "Derecho Corporativo",
        "Derecho Civil",
        "Derecho Inmobiliario",
        "Derecho de Familia",
        "Procesos Administrativos",
        "Cobranza Judicial y Extrajudicial"
]

export const Section1 = () => {
    const {setNamePage}=useContext(StatesGlobal);
    return (
        <div className="w-full mt-10">
            <h1 className="text-center text-4xl mb-10 textColor">Áreas de Especialización </h1>
            <div className="gap-x-8 gap-y-8 px-14 items-center flex-col flex justify-between md:flex-row mb-10 flex-wrap">
               {especialiadad.map((item,i)=>{
                   return<CardsSection1 key={item} img={img} invertir={(i===2||i===1||i===5||i===6)&&true} 
                    title={item}
                    setNamePage={setNamePage}
                    />
               })}
               
            </div>
            
        </div>
    )
}//1256
export default Section1;