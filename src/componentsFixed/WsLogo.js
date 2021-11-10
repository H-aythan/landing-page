import React from 'react'
import icon from '../img/ws.png'
const WsLogo = () => {
    return (
        <a className="fixed left-6 bottom-6 w-14" href="/#" style={{zIndex:"20000"}}>
            <img alt="icon-ws.png" src={icon}/>
        </a>
    )
}

export default WsLogo
