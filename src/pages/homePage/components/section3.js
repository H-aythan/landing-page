import React from 'react'
import img from '../../../img/imag_002.jpg'
import Cards from './componentsSection3/Cards'
const Section3 = () => {
    
    return (
        <div className="w-full  py-5">
            <h1 className="text-5xl text-center mb-12 textColor">Actualidad Legal</h1>
            <div className="flex justify-around items-center flex-col xl:flex-row gap-y-5">
                {[0,0,0].map((item,i)=>{
                    return <Cards key={i} img={img}/>
                })}
            </div>
        </div>
    )
}

export default Section3
