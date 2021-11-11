import React from 'react'

const RedesSociales = ({setColor,init}) => {
    return (
        <div className="relative border-4 border-sky-800 w-full justify-center flex mb-8" style={{zIndex:"20000"}} ref={init}>
            <div className=" h-10 absolute md:right-40 flex">
            <div className="w-10 h-10 bg-red-500" onClick={()=>setColor("red")}></div>
            <div className="w-10 h-10 bg-blue-700" onClick={()=>setColor("blue")}></div>
            <div className="w-10 h-10 bg-purple-700" onClick={()=>setColor("purple")}></div>
            <div className="w-10 h-10 bg-orange-400" onClick={()=>setColor("orange")}></div>
            </div>
        </div>
    )
}

export default RedesSociales
