import {useEffect, useRef}from 'react'
import 'leaflet/dist/leaflet.css'
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import {IconLocation}from './IconLocation'
const Mapa = ({position}) => {
    const mapRef=useRef();
    
    useEffect(()=>{
        mapRef.current.leafletElement.locate()
    },[])
    
    return (
        <Map className="w-full md:w-3/4 z-2 h-96" ref={mapRef}
                zoom={5} 
                center={{lat:position.lat?position.lat:"0", 
                    lng:position.lng?position.lng:"0"}}
            >
                
           <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> 
            <Marker icon={IconLocation} 
                position={[position.lat?position.lat:"0",
                    position.lng?position.lng:"0"]}> 
                <Popup>
                    Nombre oficina
                </Popup>
            </Marker>
        </Map>
    )
}

export default Mapa
