import React from 'react'
import { NavLink } from 'react-router-dom'

const CardsSection1 = ({img,invertir,title,setNamePage}) => {
    
    return (
        <div className={`h-80 md:w-1/5 ${invertir&&"flex flex-col"}`}>
            <img className={`borderColorB  ${invertir&&"order-2"}`} src={img} alt=""/>
            <div className={`flex md:h-40 justify-center items-center `}>
                <NavLink className="text-center textColor" to="/Especialidades" onClick={()=>setNamePage(title)}>
                    <h3 className="text-2xl ">{title}</h3>
                    <p>Leer mas</p>
                </NavLink>
            </div>
        </div>
    )
}

export default CardsSection1
