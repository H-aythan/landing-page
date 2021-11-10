import React,{useEffect} from 'react'
import img from './../../img/Estudio_Juridico_Antezana_slider_02.jpg'
const FirmaPage = ({init}) => {
  useEffect(()=>{
    init.current.scrollIntoView('smooth','start')
},[])
  
  return (
        <div className="md:px-28 flex flex-wrap justify-center ">
          <h1 className="text-center text-5xl mb-20 text-blue-300">Antezana</h1>  
          <p className="mb-20 px-4">{parrafo1}</p>
          <div className="mx-8 md:mx-0">
            <img alt=""  src={img}/>
          </div>
          <div className="flex flex-col xl:flex-row ">
              <div className="border-2 mx-8 md:mx-0 rounded md:h-auto xl:w-2/3 flex justify-center flex-wrap py-8">
                  <h3 className="text-3xl w-full text-center mb-3">Titulo</h3>
                  
                  <ul className="list-disc px-8">{[1,1,1].map((item,i)=>{
                      return <li key={i}>Proporcionar un servicio de calidad que satisfaga las expectativas de nuestros clientes.</li>
                    
                    })}</ul>
              </div>
              <div className="xl:w-1/3 border-2 pt-8 mx-8 md:mx-0">
                <h3 className="text-center text-3xl">Titulo</h3>
                <p className="p-5">{parrafo2}</p>
              </div>
              
          </div>
        </div>
    )
}

const parrafo1="Nuestro estudio de abogados ofrece a los clientes asesoría legal especializada en forma personalizada, a través de nuestro staff de abogados altamente capacitados y con experiencia en las diversas áreas del derecho. Brindamos asesoría jurídica de la más alta calidad, personalizando la relación con nuestros clientes, generándoles seguridad y comodidad, logrando formar, de esta manera, relaciones de estrecha confianza y de largo plazo.";
const parrafo2="Los trabajadores de EJA debemos compartir y hacer nuestros una serie de valores, como principios indispensables que nos hacen formar parte del equipo. Reconocernos en ellos, propagarlos y defenderlos nos hace a cada uno “Mejor Profesional”";
export default FirmaPage