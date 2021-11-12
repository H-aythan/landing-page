import React from 'react'
import icon from '../img/carta.png'
const BtnForm = ({setShowForm}) => {
    return (
        <button className="fixed right-8 bottom-8 bg-white w-14 rounded px-2 cursor-pointer" 
        style={{zIndex:"22000"}} 
        onClick={()=>setShowForm(true)}>
            <img alt="carta.png" src={icon}/>
        </button>
    )
}

export default BtnForm
