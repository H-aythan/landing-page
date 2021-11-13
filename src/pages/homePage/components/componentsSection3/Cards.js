import React,{useState} from 'react'

const Cards = ({img}) => {
    const [hover,setHover]=useState(false)
    return (
        <div className="w-60 md:w-80 rounded border-2 shadow-2xl overflow-hidden relative" 
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}

        >
            <img className={`transition transform duration-300 ${hover&&"translate-x-1/4"}`} 
                alt=""
                src={img}
            />
            
            <img className={`transition transform duration-300 -left-full top-0
                absolute ${hover&&"translate-x-full"}`} 
                src={img}
                alt=""
            />
            <p className="text-center text-2xl py-2 text-gray-400 backgroundColorH 
                border-b-2 border-t-2"
            >Titulo</p>
    </div> 
    )
}

export default Cards
