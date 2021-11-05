import React from 'react'
const clientes=[1,1,1,1,1]
const ClientesPage = () => {
    return (
        <div className="flex flex-col items-center flex-wrap ">
            <h1 className="text-5xl text-blue-500 text-center mb-20 mt-10">Clientes</h1>
            <ul className="flex flex-col md:flex-row flex-wrap w-4/5 ">
                {clientes.map(()=>{
                    return<li className="border-2 md:w-1/4 h-28 flex items-center justify-center ">
                        Asociados
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ClientesPage;
