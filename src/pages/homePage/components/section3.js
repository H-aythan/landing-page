import React from 'react'
import img from '../../../img/imag_002.jpg'
const section3 = () => {
    return (
        <div className="w-full  py-5">
            <h1 className="text-5xl text-center mb-12 textColor">Actualidad Legal</h1>
            <div className="flex justify-around items-center flex-col xl:flex-row gap-y-5">
                {[0,0,0].map((item,i)=>{
                    return <div className="w-60 md:w-80 rounded border-2 shadow-2xl" key={i}>
                        <img alt="" src={img}/>
                        <p className="text-center text-2xl py-2 text-gray-400">Titulo</p>
                    </div> 
                })}
            </div>
        </div>
    )
}

export default section3
