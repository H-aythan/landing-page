import React from 'react'
import Formulario from './componentsContactPage/Formulario'
import NuestrasOficinas from './componentsContactPage/NuestrasOficinas'
const lista=[1,1,1]
const ContactPage = () => {
    
    
    return (
        <div className="w-full flex-col xl:flex-row flex justify-center gap-x-20 items-center flex-wrap">
            <div className="xl:w-1/2 w-4/5">
                <h1 className="text-3xl textColor pb-4 mb-8 border-b">Contáctanos</h1>
                <p>Si usted desea comunicarse con nosotros puede acercarse, escribirnos o llamarnos</p>
                <ul className="flex flex-wrap mt-5">
                    {lista.map((item,i)=>{
                        return<li key={i} className="w-full py-5 border border-t-8 px-12">
                            <h1 className="text-4xl mb-4">Titulo</h1>
                            <p>
                                Pablo Bermúdez 150 Urb. Piso 11 oficina 11-A, Santa Beatri<br/> 
                                (Altura cuadra 7 de Arequipa)
                            </p>
                        </li>
                    })}
                </ul>
                <div className="my-8">
                    <h1 className="text-4xl mb-5">Social</h1>
                    <div className="flex">
                        <div className="w-10 h-10 border-2"></div>
                        <div className="w-10 h-10 border-2"></div>
                    </div>
                </div>
            </div>
            <aside className="xl:w-1/4 w-4/5">
                <h1 className="text-3xl textColor pb-4 mb-8 border-b">Formulario de Contacto</h1>
                <p className="mb-5">Para atender su consulta, por favor complete el siguiente formulario:</p>
                <Formulario/>
            </aside>
           
            <NuestrasOficinas/>
        </div>
    )
}

export default ContactPage
