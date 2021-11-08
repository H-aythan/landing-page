import React from 'react'
import Mapa from './Mapa'

const NuestrasOficinas = () => {
    return (
        <div className="w-4/5 ">
            <h1 className="text-center text-indigo-700 border-b pb-5 text-3xl">Nuestras Oficinas</h1>
            <div>
                <ul className="flex w-full">
                    <li className="px-3 py-4 border-b-2">la molina</li>
                    <li className="px-3 py-4 border-b-2">surco</li>
                    <li className="px-3 py-4 border-b-2">chciha</li>
                </ul>
                <Mapa/>
            </div>
        </div>
    )
}

export default NuestrasOficinas
