import React from 'react'

const RedesSociales = ({init}) => {
    return (
        <div className="relative border-4 border-sky-800 w-full justify-center flex mb-8" style={{zIndex:"20000"}} ref={init}>
            <div className=" h-10 absolute md:right-40 flex">
            <div className="w-10 h-10 bg-sky-800"></div>
            <div className="w-10 h-10 bg-sky-800"></div>
            <div className="w-10 h-10 bg-sky-800"></div>
            <div className="w-10 h-10 bg-sky-800"></div>
            </div>
        </div>
    )
}

export default RedesSociales
