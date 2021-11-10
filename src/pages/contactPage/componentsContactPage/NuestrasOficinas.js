import {useState} from 'react'
import Mapa from './Mapa'
const info=[{lat:'51.52437', lng:'13.41053'},{lat:' -12.04318', lng:'-75.015152'}]
const NuestrasOficinas = () => {
    const [selected,setSelected]=useState(0);
    const [position ,setPosition]=useState({lat:'51.52437', lng:'13.41053'});
    
    const accionesMenu=(location,i)=>{
        setSelected(i);
        setPosition(location);
    }
    return (
        <div className="w-4/5 flex flex-col">
            <h1 className="text-center text-indigo-700 border-b pb-5 text-3xl mb-10">Nuestras Oficinas</h1>
            <div>
                <ul className="flex flex-col md:flex-row w-full mb-5">
                    {info.map((item,i)=>{
                        return<li className={`px-5 py-4 ${i!==selected&&"border-b-2"} flex-grow text-center cursor-pointer 
                            ${i===selected&&"border-t border-l border-r bg-sky-700 text-white"}`}
                            onClick={()=>accionesMenu(item,i)}
                            >
                                titulo
                            </li>
                    })}
                </ul>
                <div className="border flex py-5 px-5 gap-x-5 flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-5">
                        <h1 className="text-4xl mb-5">Oficina Principal</h1>
                        <p>Calle Sierra Morena 230, Of. 302. (Alt. Cuadra 27 de la Av. Alameda del Corregidor).
                        
                        </p>
                    </div>
                    <Mapa position={position}/>
                </div>
                
            </div>
        </div>
    )
}

export default NuestrasOficinas
