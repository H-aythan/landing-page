import React from 'react'
const clientes=[1,1,1,1,1]
const ClientesPage = () => {
    
    return (
        <div className="flex flex-col items-center flex-wrap ">
            <h1 className="text-5xl textColor text-center mb-20 mt-10">Clientes</h1>
            <ul className="flex flex-col md:flex-row flex-wrap w-4/5 ">
                {clientes.map((item,i)=>{
                    return<li key={i} className="border-2 md:w-1/4 h-28 flex items-center justify-center ">
                        Asociados
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ClientesPage;
