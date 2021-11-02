import React from 'react'

const CardsSection1 = ({img,invertir}) => {
    return (
        <div className={`h-80 ${invertir&&"flex flex-col"}`}>
            <img className={`border-b-8 border-blue-500  ${invertir&&"order-2"}`} src={img} alt=""/>
            <a className={`flex md:h-40 justify-center items-center `} href="/">
                <div>
                    <h3 className="text-2xl">Titulo</h3>
                    <p className="">Leer mas</p>
                </div>
            </a>
        </div>
    )
}

export default CardsSection1
