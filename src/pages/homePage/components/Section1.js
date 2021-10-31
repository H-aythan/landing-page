import React from 'react'
import img from '../../../img/antezana-serv-2.jpg'
import CardsSection1 from './componentsSection1.js/CardsSection1'
export const Section1 = () => {
    return (
        <div className="w-full mt-10">
            <h1 className="text-center text-4xl mb-10">Áreas de Especialización </h1>
            <div className="px-28 flex justify-between">
                <CardsSection1 img={img}/>
                <CardsSection1 img={img} invertir={true}/>
                <CardsSection1 img={img} invertir={true}/>
                <CardsSection1 img={img}/>
            </div>
            <div className="px-28 flex justify-between">
                <CardsSection1 img={img}/>
                <CardsSection1 img={img} invertir={true}/>
                <CardsSection1 img={img} invertir={true}/>
                <CardsSection1 img={img}/>
            </div>
        </div>
    )
}
export default Section1;