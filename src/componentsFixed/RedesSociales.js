import React from 'react'
import ImgAnimate from '../ImgAnimate'

const RedesSociales = ({init}) => {
    
    return (
        <div className="relative borderColorT w-full justify-center flex mb-8" style={{zIndex:"20000"}} ref={init}>
            <div className=" h-10 absolute md:right-40 flex">
                <ImgAnimate/>
                <ImgAnimate/>
                <ImgAnimate/>
                <ImgAnimate/>
            </div>
            
        </div>
    )
}

export default RedesSociales
