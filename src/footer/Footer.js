import React from 'react'
import backImg from '../img/Estudio_Juridico_Antezana_botton.jpg'
import data from './Data';
const dataFoot=[1,1,1,1,1,1,1,1,1]

const Footer = () => {
    const {card1,card2,card3}=data;
    
    return (
        <footer className="text-white w-full border-8 pt-20 flex justify-center flex-wrap" style={{backgroundImage:`url(${backImg})`}}>
            <div className="w-4/5 flex  ">
                <div className=" w-96">
                    <h3 className="text-4xl mb-10">{card1.title}</h3>
                    <p className="text-justify">{card1.text}</p>
                </div>
                
                <div className="h-4/5 w-96 mx-8">
                    <h5 className="text-xl mb-5">{card2.title}</h5>
                    <ul className="w-full">{card2.especialiadad.map(item=>{
                        return <li className="border-b text-lg py-1">
                                <a href="//#">&gt;{item}</a>
                            </li> 
                    })}</ul>
                </div>
                
                <div className="h-4/5 w-96">
                    <h3 className="text-3xl py-4 border-b mb-8">{card3.title}</h3>
                    <p className="text-2xl">{card3.telefono}</p>
                    <p className="text-xl my-5">{card3.correo}</p>
                    <p className="text-xl">{card3.ubicacion}</p>
                </div>

            </div>
            <ul className="w-full flex flex-wrap justify-between px-16">
                {dataFoot.map((item,i)=>{
                        return <li className="w-64 mx-14 my-10">
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
