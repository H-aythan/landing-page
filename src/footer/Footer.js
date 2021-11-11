import React from 'react'
import { NavLink } from 'react-router-dom';
import backImg from '../img/Estudio_Juridico_Antezana_botton.jpg'
import data from './Data';
const dataFoot=[1,1,1,1,1,1,1,1,1]

const Footer = ({setNamePage}) => {
    const {card1,card2,card3}=data;
    
    return (
        <footer className="mt-16 text-white md:py-20 flex justify-center flex-wrap overflow-x-hidden" style={{backgroundImage:`url(${backImg})`}}>
            <div className="xl:w-4/5 flex flex-wrap md:flex-nowrap flex-col lg:flex-row items-center mb-5 md:gap-x-14">
                 <div className="lg:w-1/3 leading-tight p-5 ">
                    <h3 className="text-4xl mb-10">{card1.title}</h3>
                    <p className="text-justify">{card1.text}</p>
                </div>
                
                <div className="w-4/5 lg:w-1/3">
                    <h5 className="text-xl mb-5">{card2.title}</h5>
                    <ul className="w-full">{card2.especialiadad.map((item,i)=>{
                        return <li className="border-b text-lg py-1" key={i}>
                                <NavLink to="/Especialidades" onClick={()=>setNamePage(item)}>&gt;{item}</NavLink>
                            </li> 
                    })}</ul>
                </div> 
                
                 <div className="w-4/5 lg:w-1/3 flex flex-col justify-between gap-y-4">
                    <h3 className="text-3xl py-4  mb-6">{card3.title}</h3>
                    <p className="text-2xl">{card3.telefono}</p>
                    <p className="text-xl my-5 break-all">{card3.correo}</p> 
                    <p className="text-xl">{card3.ubicacion}</p>
                    
                </div>
                

            </div>
            <ul className="w-full flex flex-wrap md:justify-bewtween justify-center items-center gap-y-20 gap-x-8 flex-col md:flex-row">
                {dataFoot.map((item,i)=>{
                        return <li className="w-4/5 md:w-1/4 p-1 " key={i} >
                            <h1 className="mb-5 text-4xl">Titulo {i+1}</h1>
                            <p>Av. Paseo de la republica 291. Piso 11.
                                Oficinas 1101, Cercado de lima.
                                Teléfono: 998 009 723 / 933 041 647
                            </p>
                        </li> 
                    })}
             </ul>
            
        </footer>
    )
}

export default Footer
